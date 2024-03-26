import { LightningElement } from 'lwc';

export default class SayHello extends LightningElement {
    parent;
    handlemessage(event){
        this.parent = this.template.querySelector('c-say-hello-child').message;
        return this.parent
    }
    chnagemessage(event){
        this.parent = this.template.querySelector('c-say-hello-child').changeMessage();
    }
}