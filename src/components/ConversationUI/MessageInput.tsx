import * as React from 'react';
import { observer } from 'mobx-react';
import { Message, MessageType } from '../../stores/ApplicationStore';
import './ConversationUIStyle.css';
import {AutoComplete} from './AutoComplete'


interface MessageInputProps{
    addMessage: (message: Message)=>void
}

interface MessageInputState{
    text: string
}

@observer
export class MessageInput extends React.Component<MessageInputProps, MessageInputState> {
    constructor(props){
        super(props);
        this.state = {text: ""}
    }

    getSuggestions = (value,source) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
      
        return inputLength === 0 ? [] : source.filter(item =>
            item.toLowerCase().slice(0, inputLength) === inputValue
        );
    }

    onChange = (event, {newValue}) =>{
        this.setState({text: newValue});
    }

    render() {
        return (
            <AutoComplete 
                source={["Test1", "Test2"] as any[]}
                getFormatedString={(value)=>value}
                getSuggestions={this.getSuggestions}
                value={this.state.text}
                onChange={this.onChange}
                style={{width: "100%"}}
            />
        )
    }
}