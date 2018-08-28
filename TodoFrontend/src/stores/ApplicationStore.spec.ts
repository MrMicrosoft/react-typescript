import { ApplicationStore } from "./ApplicationStore";

import * as fetchMock from "fetch-mock";

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
        const applicationStore = new ApplicationStore();
        applicationStore.loadTodos().then((response) => {
            expect(applicationStore.todos.length).toBe(1);
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
        const applicationStore = new ApplicationStore();
        applicationStore.loadTodos().catch((err) => {
            expect(err.message).toBe(new Error("Cannot read File").message);
        });
    });
});
