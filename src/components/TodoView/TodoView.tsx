import * as React from 'react';
import { observer } from 'mobx-react';
import {Todo} from '../../stores/ApplicationStore';
import {Container, TodoInput, TodoItemStyle} from './styles';
import {TodoItem} from './TodoItem'
import Button from 'mineral-ui/Button';
import TextInput from 'mineral-ui/TextInput';
import { FormField, FormFieldset} from 'mineral-ui/Form'
import {IconBackspace} from 'mineral-ui-icons'
import {css} from 'react-emotion';

interface TodoViewProps {
    todos: Array<Todo>;
    addTodo: (todo: Todo) => void;
    completeTodo: (index: number) => void;
}

interface TodoViewState {
    todoTextField: String
}

@observer
export class TodoView extends React.Component<TodoViewProps, TodoViewState> {
    constructor(props){
        super(props);
        this.state = {todoTextField :""}
    }

    onChangeTextField = (event)=>{
        this.setState({todoTextField: event.target.value})
    }

    submitTodo = ()=>{
        if(this.state.todoTextField !== ""){
            this.props.addTodo({disc: this.state.todoTextField, complete: false, id: this.props.todos.length});
            this.setState({todoTextField: ""});
        }
    }
    
    render() {
        const {
            todos,
            addTodo,
            completeTodo
        } = this.props;

        return (
            <div style={{alignItems: "center"}}>
                <Container id="TodosContainer">
                     {todos.map((todo, i)=><TodoItemStyle key={i}><TodoItem index={i} key={i} todo={todo} completeTodo={completeTodo}/></TodoItemStyle>)}
                </Container>
                <TodoInput>
                    <FormField label="Description" className={css({width: "100%"})}>
                    <TextInput 
                        onChange={this.onChangeTextField}
                        name="todoTextField"
                        value={this.state.todoTextField}
                        iconEnd={<IconBackspace/>}
                        style={{width: "100%"}}/>
                    </FormField>
                    <FormField label="Add Todo">
                        <Button
                            id="submitButton"
                            onClick={this.submitTodo}>Add Todo</Button>
                    </FormField>
                </TodoInput>
            </div>
        )
    }
}