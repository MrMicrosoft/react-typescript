import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { ApplicationStore } from '../stores/ApplicationStore';
import { ConversationView } from '../components/ConversationView';

interface MessageContainerProps {
    store?: ApplicationStore;
}

@inject('store')
@observer
export class MessageContainer extends React.Component<MessageContainerProps, {}> {
    render() {
        const { store } = this.props;
        return (
            <ConversationView/>
        )
    }
}