import React from 'react';
import {shallow, render} from "enzyme";
import renderer from 'react-test-renderer';
import {HomeScene} from "./Home";

describe('<HomeScene/>', () => {

    it('should render error', () => {
        const wrapper = shallow(
            <HomeScene onQueryChange={jest.fn()}/>
        );

        expect(wrapper.find('.error').length).toBe(0);

        wrapper.setProps({
            error: 'An error'
        });

        const error = wrapper.find('.error');
        expect(error.length).toBe(1);
        expect(error.text()).toBe('An error');
    });

    it('should call onQueryChange on input', () => {
        const onQueryChange = jest.fn();
        const wrapper = shallow(
            <HomeScene onQueryChange={onQueryChange}/>
        );

        expect(onQueryChange.mock.calls.length).toBe(1);

        wrapper.find('input').simulate('change', {
            target: {
                value: 'Hello!'
            }
        });

        expect(onQueryChange.mock.calls.length).toBe(2);
        expect(onQueryChange.mock.calls[1][0]).toBe('Hello!');
    });




    xit('should call onQueryChange', () => {
        const onQueryChange = jest.fn();

        const wrapper = shallow(<HomeScene onQueryChange={onQueryChange}/>);

        expect(onQueryChange.mock.calls.length).toBe(1);

        wrapper.find('.query').simulate('change', {target: {value: 'Hola!'}});

        expect(onQueryChange.mock.calls.length).toBe(2);
        expect(onQueryChange.mock.calls[1][0]).toBe('Hola!');
    });

    it('renders correctly react-test-renderer', () => {
        const tree = renderer.create(
            <HomeScene onQueryChange={() => {}} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // it('renders correctly enzyme', () => {
    //     const tree = render(
    //         <HomeScene onQueryChange={() => {}} />
    //     );
    //     expect(tree).toMatchSnapshot();
    // });

});