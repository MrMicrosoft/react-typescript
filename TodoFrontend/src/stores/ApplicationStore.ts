import { action, observable } from "mobx";

export interface ITodo {
    disc: string;
    complete: boolean;
    id: number;
}

export interface ITodoResponse {
    success: boolean;
    data: ITodo[];
}

export class ApplicationStore {
    @observable
    public todos = new Array<ITodo>();
    public constructor() {
        this.loadTodos();
    }

    @action
    public addTodo = (todo: ITodo) => {
        this.todos.push(todo);
    }

    @action
    public completeTodo = (index: number) => {
        this.todos[index].complete = !this.todos[index].complete;
    }

    @action
    public loadTodos = () => {
        return new Promise((resolve, rejects) => {
            fetch("http://localhost:8000/todo", {method: "GET"})
            .then((response) => response.json())
            .then((json) => {
                if (json.success) {
                    const response: ITodoResponse = {
                        data: json.data,
                        success: json.success,
                    };
                    this.todos.push(...json.data);
                    resolve(response);
                } else {
                    rejects(new Error(json.err));
                }
            });
        });
    }
}
