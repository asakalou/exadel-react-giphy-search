import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from "enzyme";

xdescribe('<App/>', () => {
    xit('renders without crashing', () => {
        const div = document.createElement('div');
        shallow(<App/>);
        // ReactDOM.render(<App />, div);
        // ReactDOM.unmountComponentAtNode(div);
    });
});


