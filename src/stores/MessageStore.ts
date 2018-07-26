import { observable, action, computed } from 'mobx';

export enum MessageType {
    Input,
    Output
}

export interface Message {
    message: String,
    type: MessageType,
    id: number 
}

export class MessageStore {
    @observable
    messages = new Array<Message>();

    @action
    commitMessage = (msg:Message)=>{
        this.messages.push(msg)
    }

    @computed
    get incrementIndex(){
        return this.messages.length;
    }
    
}