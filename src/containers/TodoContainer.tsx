import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { ApplicationStore } from '../stores/ApplicationStore';
import { TodoView } from '../components/TodoView/TodoView';

interface TodoContainerProps {
    store?: ApplicationStore;
}

@inject('store')
@observer
export class TodoContainer extends React.Component<TodoContainerProps, {}> {

    render() {
        const { store } = this.props;
        return (
            <TodoView 
                todos={store.todos} 
                addTodo={store.addTodo}
                completeTodo={store.completeTodo}
            />
        )
    }
}