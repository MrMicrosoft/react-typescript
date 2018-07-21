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
    completeTodo = (todo: Todo) => {
        let index = this.todos.findIndex(todo1 => todo1.disc==todo.disc&&todo1.complete==todo.complete)
        this.todos[index].complete = !this.todos[index].complete;
    }
}