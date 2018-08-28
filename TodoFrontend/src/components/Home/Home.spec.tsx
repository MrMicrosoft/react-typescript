import * as React from "react";
import { Home } from "./Home";

import { shallow } from "enzyme";
import {  Button, NumberDisplay } from "./styles";

test("that counter is rendered", () => {
    const wrapper = shallow(
    <Home
        counter={1}
        increment={() => {/*---Empty Function----*/}}
        decrement={() => {/*---Empty Function----*/}}
    />);

    expect(wrapper.find(NumberDisplay).childAt(0).text()).toBe("1");
});

test("that decrement is called when button decrement is clicked", () => {
    const decrementSpy = jest.fn();
    const wrapper = shallow(
    <Home
        counter={1}
        increment={() => {/*---Empty Function----*/}}
        decrement={decrementSpy}
    />);

    wrapper.find(Button).first().simulate("click");

    expect(decrementSpy).toBeCalled();
});

test("that increment is called when button increment is clicked", () => {
    const incrementSpy = jest.fn();
    const wrapper = shallow(
    <Home
        counter={1}
        increment={incrementSpy}
        decrement={() => {/*---Empty Function----*/}}
    />);

    wrapper.find(Button).at(1).simulate("click");

    expect(incrementSpy).toBeCalled();
});
