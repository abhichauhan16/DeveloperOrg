import { LightningElement ,track,wire } from 'lwc';
import  returnProducts  from "@salesforce/apex/ProductList.returnProducts";

export default class ProductCatalogueComponent extends LightningElement {

    errors;
    prodLst;
    @track activeLst=[];
    @track deletedLst=[];
    map1={'a':1,'b':3,'c':44};
    // ProductCatalogueComponent(){
    //     this.map1 = new Map();

    //     map1.set('a', 1);
    //     map1.set('b', 2);
    //     map1.set('c', 3);
    // }
    @wire(returnProducts)
    products({error, data}) {
        if (error) {
            this.errors=error;
        } else if (data) {
            console.dir(this.map1);
            this.prodLst=JSON.parse(data);
            this.activeLst=this.prodLst;
            console.log('prodLst',this.prodLst[0]);
            console.log('prodLst',this.prodLst[2]);
            
            console.log('prodLst',this.prodLst[1]);
            
            console.log('prodLst',this.prodLst[3]);
            
            console.log('prodLst',this.prodLst[4]);
            
            console.log('prodLst',this.prodLst[5]);
            
            console.log('prodLst',this.prodLst[6]);

        }
    }

    clickDelete(event){
        console.log('value in the clicked button target name ' , event.target.dataset.name);
        console.log('value in the clicked button target id ' , event.target.dataset.id);
        let index=event.target.dataset.id;
        this.deletedLst.push(this.activeLst[index]);
        this.activeLst.splice(index,1);
        // this.calculateSum();
        window.console.log('activeProducts '+ this.activeProducts);
    }
    clickRestore(event){
        console.log('value in the clicked button target name ' , event.target.dataset.name);
        console.log('value in the clicked button target id ' , event.target.dataset.id);
        let index=event.target.dataset.id;
        this.activeLst.push(this.deletedLst[index]);
        this.deletedLst.splice(index,1);
        // this.calculateSum();
    }

}