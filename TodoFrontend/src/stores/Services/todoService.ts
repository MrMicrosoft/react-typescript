import { ITodo } from "../ApplicationStore";

export interface ITodoResponse {
    success: boolean;
    data: ITodo[];
}

export async function loadTodosService() {
    let json: ITodoResponse;
    try {
        const response = await fetch("http://localhost:8000/todo", {method: "GET"});
        json = await response.json() as ITodoResponse;
    } catch (e) {
        throw e;
    }

    if (!json.success) {
        throw new Error("Success False");
    }

    return json.data;
}
