import * as React from 'react';
import { TodoView } from './TodoView';
import { shallow } from 'enzyme';

test('Render Todos', () => {
    const wrapper = shallow(
    <TodoView
        todos={[{disc: "Hello1", complete: false, id: 1}]}
        addTodo={() => {}}
        completeTodo={() => {}}         
    />);

    expect(wrapper.find("#TodosContainer").children.length).toBe(1);
});

test('Test addTodo button pressed', () => {
    const addTodoSpy = jest.fn();
    const wrapper = shallow(
    <TodoView
        todos={[{disc: "Hello1", complete: false, id: 1}]}
        addTodo={addTodoSpy}
        completeTodo={() => {}}         
    />);

    wrapper.setState({todoTextField: "Hello3"})
    wrapper.find("#submitButton").first().simulate('click');

    expect(addTodoSpy).toBeCalled();
});