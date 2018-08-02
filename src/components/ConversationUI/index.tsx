import * as React from 'react';
import { observer } from 'mobx-react';
import { Conversation, Message, MessageType } from '../../stores/ApplicationStore';
import Flex, { FlexItem } from "mineral-ui/Flex";
import './ConversationUIStyle.css';
import { MessageView } from './MessageView';
import { MessageInput } from './MessageInput';
import {MessageInputStyled} from './styles';

interface ConversationUIProps
 {
    conversation: Conversation,
    addMessage: (message: Message)=>void
}

@observer
export class ConversationUI extends React.Component<ConversationUIProps, {}> {
    componentWillMount(){
        this.props.addMessage({id: 2, msg: "Hello Input #1", type: MessageType.Input})
        this.props.addMessage({id: 3, msg: "Hello Input #2", type: MessageType.Input})
        this.props.addMessage({id: 4, msg: "Hello Output #3", type: MessageType.Output})
    }

    render() {
        const {title, desc, messages} = this.props.conversation;
        return (
            <div>
            <Flex
                direction="column"
                className="container">
                <FlexItem className="title"><h2>{title}</h2></FlexItem>
                <FlexItem className="desc"><h3>{desc}</h3></FlexItem>
                <FlexItem>
                    {messages.map((message, i)=>
                        <MessageView key={i} message={message}/>
                    )}
                </FlexItem>
            </Flex>
            <MessageInputStyled><MessageInput addMessage={this.props.addMessage}/></MessageInputStyled>
            </div>
            
        )
    }
}