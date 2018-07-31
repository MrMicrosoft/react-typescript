import * as React from 'react';
import { observer } from 'mobx-react';
import { Conversation, Message, MessageType } from '../../stores/ApplicationStore';
import Flex, { FlexItem } from "mineral-ui/Flex";

interface ConversationUIProps {
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
            <Flex 
                justifyContent="center"
                direction="column"
            >
                <FlexItem><h2>{title}</h2></FlexItem>
                <FlexItem><h3>{desc}</h3></FlexItem>
                <FlexItem>
                    {messages.map((message)=>
                        <Flex direction="row" justifyContent={message.type==MessageType.Input?"left":"right"}>
                            <FlexItem>{message.msg}</FlexItem>
                        </Flex>
                    )}
                </FlexItem>
            </Flex>
        )
    }
}