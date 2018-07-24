import { observable, action } from 'mobx';

export interface Todo {
    disc: String,
    complete: boolean
}

export class ApplicationStore {
    @observable
    todos = new Array<Todo>();

    @action
    addTodo = (todo: Todo) => {
        this.todos.push(todo);
    }

    @action
    completeTodo = (index: number) => {
        this.todos[index].complete = !this.todos[index].complete;
    }
}