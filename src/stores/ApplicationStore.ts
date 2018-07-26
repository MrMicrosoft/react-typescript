import { observable, action } from 'mobx';

export interface Todo {
    disc: String,
    complete: boolean,
    id: number 
}

export interface TodoResponse {
    success: boolean,
    data: Todo[]
}

export class ApplicationStore {
    constructor(){
    }

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

    @action
    loadTodos = ()=>{
        return new Promise((resolve, rejects)=>{
            fetch("http://localhost:8000/todo", {method: "GET"})
            .then(response => response.json())
            .then(json => {
                if(json.success){
                    let response:TodoResponse = {
                        success: json.success,
                        data: json.data
                    }
                    this.todos.push(...json.data);
                    resolve(response);
                }else{
                    rejects(new Error(json.err))
                }
            })
        });
    }
}