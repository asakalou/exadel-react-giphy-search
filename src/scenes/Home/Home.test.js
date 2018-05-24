import React from 'react';
import {shallow} from "enzyme";
import {HomeScene} from "./Home";

describe('<HomeScene/>', () => {

    it('should render', () => {
        const onQueryChange = jest.fn();
        const wrapper = shallow(<HomeScene onQueryChange={onQueryChange}/>);

        expect(wrapper.find('h1').text()).toBe('Home');
    });

    it('should render error', () => {
        const onQueryChange = jest.fn();
        const wrapper = shallow(<HomeScene onQueryChange={onQueryChange}/>);

        expect(wrapper.find('.error').length).toBe(0);

        wrapper.setProps({
            error: 'An error'
        });

        expect(wrapper.find('.error').length).toBe(1);
        expect(wrapper.find('.error').text()).toBe('An error');
    });

    it('should render error', () => {
        const onQueryChange = jest.fn();
        const wrapper = shallow(<HomeScene onQueryChange={onQueryChange}/>);

        expect(wrapper.find('.error').length).toBe(0);

        wrapper.setProps({
            error: 'An error'
        });

        expect(wrapper.find('.error').length).toBe(1);
        expect(wrapper.find('.error').text()).toBe('An error');
    });

    it('should call onQueryChange', () => {
        const onQueryChange = jest.fn();

        const wrapper = shallow(<HomeScene onQueryChange={onQueryChange}/>);

        expect(onQueryChange.mock.calls.length).toBe(1);

        wrapper.find('.query').simulate('change', {target: {value: 'Hola!'}});

        expect(onQueryChange.mock.calls.length).toBe(2);
        expect(onQueryChange.mock.calls[1][0]).toBe('Hola!');
    });

});