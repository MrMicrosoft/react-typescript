import { ApplicationStore } from './ApplicationStore';

test('inital todos is empty', () => {
    const applicationStore = new ApplicationStore();

    expect(applicationStore.todos.length).toBe(0);
});

test('addTodo adds an Todo to the todos', () => {
    const applicationStore = new ApplicationStore();

    applicationStore.addTodo({disc: "Hello", complete:false});

    expect(applicationStore.todos.length).toBe(1);
});

test('complete Todo changes Todo State to done', () => {
    const applicationStore = new ApplicationStore();

    applicationStore.addTodo({disc: "Hello", complete:false});
    applicationStore.completeTodo(0)

    expect(applicationStore.todos[0].complete).toBe(true);
});