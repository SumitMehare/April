import { LightningElement, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/WireController.getAccounts'; //Importing method

export default class SayHello extends LightningElement {
    parent;

    @wire(getAccounts)AccountList;
    @track greeting;
    handlemessage(event){
        this.parent = this.template.querySelector('c-say-hello-child').message;
        return this.parent
    }
    chnagemessage(event){
        this.parent = this.template.querySelector('c-say-hello-child').changeMessage();
    }
    onChangeHandler(event){
        this.greeting = event.target.value;
    }
}