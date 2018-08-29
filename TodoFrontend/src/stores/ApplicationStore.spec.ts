import { ApplicationStore, ITodo } from "./ApplicationStore";

import * as fetchMock from "fetch-mock";
import { loadTodosService } from "./Services/todoService";

test("inital todos is empty", () => {
    const applicationStore = new ApplicationStore();

    expect(applicationStore.todos.length).toBe(0);
});

test("addTodo adds an Todo to the todos", () => {
    const applicationStore = new ApplicationStore();

    applicationStore.addTodo({disc: "Hello", complete: false, id: 1});

    expect(applicationStore.todos.length).toBe(1);
});

test("complete Todo changes Todo State to done", () => {
    const applicationStore = new ApplicationStore();

    applicationStore.addTodo({disc: "Hello", complete: false, id: 1});
    applicationStore.completeTodo(0);

    expect(applicationStore.todos[0].complete).toBe(true);
});

describe("Test Async", () => {
    afterEach(fetchMock.restore);

    it("Fetch Todos: Success", () => {
        fetchMock.mock("http://localhost:8000/todo", {
            body: {
                data: [
                    {disc: "Hello Todo", complete: false, id: 6},
                ],
                success: true,
            },
            status: 200,
        });
        loadTodosService().then((loadedTodos: ITodo[]) => {
            expect(loadedTodos.length).toBe(1);
        });
    });

    it("Fetch Todos: NoSuccess", () => {
        fetchMock.mock("http://localhost:8000/todo", {
            body: {
                err: "Cannot read File",
                success: false,
            },
            status: 200,
        });
        loadTodosService().catch((err: Error) => {
            expect(err.message).toBe("Success False");
        });
    });
});
