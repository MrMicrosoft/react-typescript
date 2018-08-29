import { action, observable } from "mobx";
import { loadTodosService } from "./Services/todoService";

export interface ITodo {
    disc: string;
    complete: boolean;
    id: number;
}

export class ApplicationStore {
    @observable
    public todos = new Array<ITodo>();

    @action
    public addTodo = (todo: ITodo) => {
        this.todos.push(todo);
    }

    @action
    public completeTodo = (index: number) => {
        this.todos[index].complete = !this.todos[index].complete;
    }

    @action
    public async loadTodos() {
        const loadedTodos = await loadTodosService();
        this.todos.push(...loadedTodos);
    }
}
