import { LightningElement,wire } from 'lwc';
import methodA from '@salesforce/apex/FetchCustomLabel.methodA';
import {loadScript} from "lightning/platformResourceLoader";
import docxFile from "@salesforce/resourceUrl/docxFile";
import pdfLib from "@salesforce/resourceUrl/pdfLib";

export default class PayloadQuickActionComponent extends LightningElement {

    renderedCallback(){
        loadScript(this,pdfLib).then(()=>{});
        
        // loadScript(this.docxFile).then(()=>{});
    }
    payloadData;
    errors;
    text;

    @wire(methodA)
    payload ({error, data}) {
        if (error) {
            this.errors=error;
        } else if (data) {
            this.payloadData=data;
            this.text = `data:text/plain,${encodeURIComponent(`${this.payloadData}`)}`;
        }
    }

    async createPdf() {
        const pdfDoc = await PDFLib.PDFDocument.create()
        const timesRomanFont = await pdfDoc.embedFont(PDFLib.StandardFonts.TimesRoman)
      
        const page = pdfDoc.addPage()
        const { width, height } = page.getSize()
        const fontSize = 10
        page.drawText(this.payloadData, {
          x: 50,
          y: height - 4 * fontSize,
          size: fontSize,
          font: timesRomanFont,
          color: PDFLib.rgb(0, 0.53, 0.71),
        })
        
    const pdfBytes = await pdfDoc.save()
    this.saveByteArray("My Pdf", pdfBytes);
    }

    saveByteArray(pdfName,byte){
        var blob = new Blob([byte],{type:"application/pdf"});
        var link= document.createElement("a");
        link.href=window.URL.createObjectURL(blob);
        link.download=pdfName;
        link.click();
    }
   
}