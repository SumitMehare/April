import { LightningElement, api } from 'lwc';

export default class SayHelloChild extends LightningElement {
    @api parentToChild;
    @api message = 'Hey I am from child';
    @api
    changeMessage(){
        this. message = 'Hey I am changed';
        return this.message;
    }
}