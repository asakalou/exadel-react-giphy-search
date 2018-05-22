import React, {Component, Fragment} from 'react';
import {ConnectedRouter, routerReducer, routerMiddleware} from 'react-router-redux';
import {Redirect, Route, Switch} from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import RandomScene from "./scenes/Random/Random";
import HomeScene from "./scenes/Home/Home";
import NavItem from "./components/NavItem/NavItem";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {Provider} from "react-redux";
import {reducer as randomReducer} from './scenes/Random/services/reducer';
import './App.css';


const history = createHistory();
const routerHistoryMiddleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    || compose;

const store = createStore(
    combineReducers({
        router: routerReducer,
        random: randomReducer
    }),
    composeEnhancers(
        applyMiddleware(routerHistoryMiddleware)
    )
);


class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <Fragment>
                            <ol>
                                <li><NavItem to={'/random'}>Random</NavItem></li>
                                <li><NavItem to={'/home'}>Home</NavItem></li>
                            </ol>

                            <Switch>
                                <Route exact path="/" component={RandomScene}/>
                                <Route path={'/random'} component={RandomScene}/>
                                <Route path={'/home'} component={HomeScene}/> : null

                                <Redirect to={'/'}/>
                            </Switch>
                        </Fragment>
                    </ConnectedRouter>
                </Provider>
            </div>
        );
    }
}

export default App;
