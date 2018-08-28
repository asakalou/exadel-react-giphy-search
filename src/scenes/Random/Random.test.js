import React from 'react';
import {shallow, render} from "enzyme";
import renderer from 'react-test-renderer';
import {RandomScene} from "./Random";

describe('<RandomScene/>', () => {

    it('should call ', () => {
        const onLoad = jest.fn();
        const wrapper = shallow(
            <RandomScene onLoad={onLoad}/>
        );

        expect(onLoad.mock.calls.length).toBe(1);

        wrapper.find('.onLoad').simulate('click');

        expect(onLoad.mock.calls.length).toBe(2);
    });

});