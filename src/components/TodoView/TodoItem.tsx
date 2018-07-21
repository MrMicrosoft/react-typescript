import * as React from 'react';
import { observer } from 'mobx-react';
import {Todo} from '../../stores/ApplicationStore';
import {Container} from './styles';
import Card, {CardTitle, CardBlock} from 'mineral-ui/Card';
import Checkbox from 'mineral-ui/Checkbox';

interface TodoItemProps {
    todo: Todo;
    completeTodo: (todo: Todo) => void;
}

@observer
export class TodoItem extends React.Component<TodoItemProps, {}> {
    onChangeCheckbox=(event)=>{
        const {
            completeTodo,
            todo
        } = this.props;
        completeTodo(todo);
    }

    render() {
        const {
            todo
        } = this.props;

        return (
            <Card>
                <CardTitle>{todo.disc}</CardTitle>
                <CardBlock>
                    <Checkbox
                        labelPosition="start"
                        label="Completed"
                        checked={todo.complete}
                        onChange={this.onChangeCheckbox}
                    />
                </CardBlock>
            </Card>
        )
    }
}