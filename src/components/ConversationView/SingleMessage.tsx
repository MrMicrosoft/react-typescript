import * as React from 'react';
import { observer } from 'mobx-react';
import {Message, MessageType} from '../../stores/MessageStore';
import {InputMessage, OutputMessage} from './styles';
import Card, {CardTitle, CardBlock} from 'mineral-ui/Card';
import Checkbox from 'mineral-ui/Checkbox';

interface MessageProps {
    message: Message;
}

@observer
export class SingleMessage extends React.Component<MessageProps, {}> {
    render() {
        const {
            message
        } = this.props;

        let messageComponent: React.ReactNode = 
        <Card>
            <CardTitle>{message.message}</CardTitle>
        </Card>

        if(message.type == MessageType.Input)
            return (
                <InputMessage>
                    {messageComponent}
                </InputMessage>
            )
        else
            return (
                <OutputMessage>
                    {messageComponent}
                </OutputMessage>
            )
    }
}