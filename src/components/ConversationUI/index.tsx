import * as React from 'react';
import { observer } from 'mobx-react';
import { Button, Container, NumberDisplay } from './styles';

interface ConversationUIProps {
}

@observer
export class ConversationUI extends React.Component<ConversationUIProps, {}> {
    render() {
        return (
            <h1>Hello</h1>
        )
    }
}