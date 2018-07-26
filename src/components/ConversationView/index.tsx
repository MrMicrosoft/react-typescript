import * as React from 'react';
import { observer } from 'mobx-react';
import {Message, MessageType} from '../../stores/MessageStore';
import {Container, TodoInput, MessagePair} from './styles';
import Button from 'mineral-ui/Button';
import TextInput from 'mineral-ui/TextInput';
import { FormField} from 'mineral-ui/Form'
import {IconBackspace} from 'mineral-ui-icons'
import {css} from 'react-emotion';
import { SingleMessage } from './SingleMessage';

interface ConversationViewProps {
}

interface ConversationViewState {
    todoTextField: String
}

@observer
export class ConversationView extends React.Component<ConversationViewProps, ConversationViewState> {
    constructor(props){
        super(props);
        this.state = {todoTextField :""}
    }
    
    render() {

        return (
            <div style={{alignItems: "center"}}>
            <h3>Message </h3>
                <Container>
                    <MessagePair>
                        <SingleMessage
                            message={{message: "Hello", type: MessageType.Input, id: 123}}
                        />
                        <SingleMessage
                            message={{message: "Hello", type: MessageType.Output, id: 123}}
                        />
                        <SingleMessage
                            message={{message: "Hello", type: MessageType.Input, id: 123}}
                        />
                        <SingleMessage
                            message={{message: "Hello", type: MessageType.Output, id: 123}}
                        />
                        <SingleMessage
                            message={{message: "Hello", type: MessageType.Output, id: 123}}
                        />
                    </MessagePair>
                </Container>
                <TodoInput>
                    <FormField label="Description" className={css({width: "100%"})}>
                    <TextInput 
                        name="todoTextField"
                        value={this.state.todoTextField}
                        iconEnd={<IconBackspace/>}
                        style={{width: "100%"}}/>
                    </FormField>
                    <FormField label="Add Todo">
                        <Button
                            id="submitButton">Add Todo</Button>
                    </FormField>
                </TodoInput>
            </div>
        )
    }
}