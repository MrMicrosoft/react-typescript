import * as React from "react";

import { observer } from "mobx-react";
import {ITodo} from "../../stores/ApplicationStore";
import {Container} from "./styles";

import Card, {CardBlock, CardTitle} from "mineral-ui/Card";
import Checkbox from "mineral-ui/Checkbox";

interface ITodoItemProps {
    todo: ITodo;
    index: number;
    completeTodo: (index: number) => void;
}

@observer
export class TodoItem extends React.Component<ITodoItemProps, {}> {
    public render() {
        const {
            todo,
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
        );
    }
    private onChangeCheckbox = (event) => {
        const {
            completeTodo,
            index,
        } = this.props;
        completeTodo(index);
    }
}
