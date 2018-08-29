import * as React from "react";
import { TodoView } from "./TodoView";

import { shallow } from "enzyme";

test("Render Todos", () => {
    const wrapper = shallow(
    <TodoView
        todos={[{disc: "Hello1", complete: false, id: 1}]}
        addTodo={() => {/*---Empty Function----*/}}
        completeTodo={() => {/*---Empty Function----*/}}
    />);

    expect(wrapper.find("#TodosContainer").children.length).toBe(1);
});

test("Test addTodo button pressed", () => {
    const addTodoSpy = jest.fn();
    const wrapper = shallow(
    <TodoView
        todos={[{disc: "Hello1", complete: false, id: 1}]}
        addTodo={addTodoSpy}
        completeTodo={() => {/*---Empty Function----*/}}
    />);

    wrapper.setState({todoTextField: "Hello3"});
    wrapper.find("#submitButton").first().simulate("click");

    expect(addTodoSpy).toBeCalled();
});
