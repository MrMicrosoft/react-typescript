import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { ApplicationStore } from '../stores/ApplicationStore';
import { ConversationUI } from '../components/ConversationUI';

interface ConversationUIContainerProps {
    store?: ApplicationStore;
}

@inject('store')
@observer
export class ConversationUIContainer extends React.Component<ConversationUIContainerProps, {}> {
    render() {
        const { store } = this.props;
        return (
            <ConversationUI/>
        )
    }
}