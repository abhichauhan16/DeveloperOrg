import { LightningElement, wire } from 'lwc';
import methodA from '@salesforce/apex/FetchCustomLabel.methodA';

export default class CustomLabelComponent extends LightningElement {
    @wire(methodA) labelData;

    //payload;
    //errors;

    // @wire(methodA)
    // recievePayload ({error, data}) {
    //     if (error) {
    //         // TODO: Error handling
    //         this.errors=error;
    //         this.payload=undefined;
    //     } else if (data) {
    //         // TODO: Data handling
    //         this.errors=undefined;
    //         this.payload=data;
    //     }
    // }
    isModalOpen=false;
    openModal=()=>{this.isModalOpen=true
    window.console.log("hii")
    window.console.log(labelData)
    // window.console.log(varData)
    };
    closeModal=()=>{this.isModalOpen=false};
    submitDetails=()=>{this.isModalOpen=false};

}