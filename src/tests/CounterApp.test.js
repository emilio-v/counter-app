import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('<CounterApp>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('it should show CounterApp', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('it should renders a default value of 10', () => {
        expect(wrapper.find('h2').text()).toBe('10');
    });

    test('it should increase the counter', () => {
        expect(wrapper.find('h2').text()).toBe('10');
        wrapper.find('button').at(2).simulate('click');
        expect(wrapper.find('h2').text()).toBe('11');
    });

    test('it should decrease the counter', () => {
        wrapper.find('button').at(0).simulate('click');
        expect(wrapper.find('h2').text()).toBe('9');
    });

    test('it should reset the count', () => {
        const value = 0;
        const wrapper = shallow(<CounterApp value={value} />);
        wrapper.find('button').at(2).simulate('click');
        expect(wrapper.find('h2').text()).toBe(`${value + 1}`);
        wrapper.find('button').at(1).simulate('click');
        expect(wrapper.find('h2').text()).toBe(`${value}`);
    });
});
