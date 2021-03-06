import * as React from "react";

import { observer } from "mobx-react";
import { ITodo } from "../../stores/ApplicationStore";
import {Container, TodoInput, TodoItemStyle} from "./styles";
import {TodoItem} from "./TodoItem";

import Button from "mineral-ui/Button";
import { FormField, FormFieldset} from "mineral-ui/Form";
import TextInput from "mineral-ui/TextInput";

import {IconBackspace} from "mineral-ui-icons";
import {css} from "react-emotion";
import { AutoComplete } from "./AutoComplete";

interface ITodoViewProps {
    todos: ITodo[];
    addTodo: (todo: ITodo) => void;
    completeTodo: (index: number) => void;
}

interface ITodoViewState {
    todoTextField: string;
    autocompleteField: string;
}

@observer
export class TodoView extends React.Component<ITodoViewProps, ITodoViewState> {
    constructor(props) {
        super(props);
        this.state = {todoTextField : "", autocompleteField: ""};
    }

    public render() {
        const {
            todos,
            addTodo,
            completeTodo,
        } = this.props;

        return (
            <div style={{alignItems: "center"}}>
                <div style={{margin: "50px"}}>
                    <AutoComplete
                        source={todos as any[]}
                        value={this.state.autocompleteField}
                        onChange={this.onChange}
                        getSuggestions={this.getSuggestions}
                        getFormatedString={(value) => value.disc}/>
                </div>

                <Container id="TodosContainer">
                     {todos.map((todo, i) => {
                        return (<TodoItemStyle key={i}>
                            <TodoItem index={i} key={i} todo={todo} completeTodo={completeTodo}/>
                        </TodoItemStyle>);
                    })}
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
        );
    }

    private onChangeTextField = (event) => {
        this.setState({todoTextField: event.target.value});
    }

    private submitTodo = () => {
        if (this.state.todoTextField !== "") {
            this.props.addTodo({disc: this.state.todoTextField, complete: false, id: this.props.todos.length});
            this.setState({todoTextField: ""});
        }
    }

    private getSuggestions = (value, source) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        return inputLength === 0 ? [] : source.filter((lang) =>
          lang.disc.toLowerCase().slice(0, inputLength) === inputValue,
        );
    }

    private onChange = (event, {newValue}) => {
        this.setState({autocompleteField: newValue});
    }
}
