import * as React from 'react';
import { observer } from 'mobx-react';
import {Todo} from '../../stores/ApplicationStore';
import {Container, TodoInput, TodoItemStyle} from './styles';
import {TodoItem} from './TodoItem'
import Button from 'mineral-ui/Button';
import TextInput from 'mineral-ui/TextInput';

interface TodoViewProps {
    todos: Array<Todo>;
    addTodo: (todo: Todo) => void;
    completeTodo: (todo: Todo) => void;
}

interface TodoViewState {
    todoTextField: String
}

@observer
export class TodoView extends React.Component<TodoViewProps, TodoViewState> {
    onChangeTextField = (event)=>{
        this.setState({todoTextField: event.target.value})
    }

    submitTodo = ()=>{
        this.props.addTodo({disc: this.state.todoTextField, complete: false});
    }
    
    render() {
        const {
            todos,
            addTodo,
            completeTodo,
        } = this.props;

        return (
            <Container>
                <Container id="TodosContainer">
                     {
                        todos.map((todo, i)=><TodoItemStyle key={i}><TodoItem key={i} todo={todo} completeTodo={completeTodo}/></TodoItemStyle>)}
                </Container>
                <TodoInput>
                    <TextInput 
                        width="80%" 
                        onChange={this.onChangeTextField}
                        name="todoDescription"
                    />
                    <Button
                        onClick={this.submitTodo}
                    >Add Todo</Button>
                </TodoInput>
            </Container>
        )
    }
}