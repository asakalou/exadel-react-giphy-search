import React, {Component} from 'react';
import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import {Provider} from "react-redux";
import {createAppStore} from './services/store';
import './App.css';
import Main from "./main/Main";


const history = createHistory();
const store = createAppStore(history);

class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <Main/>
                    </ConnectedRouter>
                </Provider>
            </div>
        );
    }
}

export default App;
