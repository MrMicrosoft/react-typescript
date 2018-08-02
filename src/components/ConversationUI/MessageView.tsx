import * as React from 'react';
import { observer } from 'mobx-react';
import { Conversation, Message, MessageType } from '../../stores/ApplicationStore';
import Flex, { FlexItem } from "mineral-ui/Flex";
import Avatar from 'mineral-ui/Avatar';
import './ConversationUIStyle.css';
import IconSentimentSatisfied from 'mineral-ui-icons/IconSentimentSatisfied';

interface MessageViewProps {
    message: Message
}

@observer
export class MessageView extends React.Component<MessageViewProps, {}> {
    render() {
        const {msg, type} = this.props.message;
        return (
            <Flex
                className="messageContainer" 
                direction="row"
                justifyContent={type==MessageType.Input?"left":"right"}>
                <Avatar>
                    <IconSentimentSatisfied/>
                </Avatar>
                <FlexItem className="messageBox">{msg}</FlexItem>
            </Flex>
        )
    }
}