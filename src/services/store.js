import {routerMiddleware, routerReducer} from "react-router-redux";
import {applyMiddleware, compose, createStore} from "redux";
import combineReducers from "redux/src/combineReducers";
import {reducer as randomReducer} from '../scenes/Random/services/reducer';
import {reducer as homeReducer} from '../scenes/Home/services/reducer';
import {reducer as mainReducer} from '../main/services/reducer';
import {reducer as authReducer} from '../scenes/Auth/services/reducer';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import randomEpic from '../scenes/Random/services/epics';
import homeEpic from '../scenes/Home/services/epics';
import authEpic from '../scenes/Auth/services/epics';
import api from './api';


export const createAppStore = (history) => {
    const routerHistoryMiddleware = routerMiddleware(history);

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        || compose;

    const rootEpic = combineEpics(
        randomEpic,
        homeEpic,
        authEpic
    );

    const epicMiddleware = createEpicMiddleware({
        dependencies: {
            api
        }
    });

    const rootReducer = combineReducers({
        router: routerReducer,
        random: randomReducer,
        home: homeReducer,
        main: mainReducer,
        auth: authReducer
    });

    const reducer = (state, action) => {
        const newState = state;
        console.log('proxy reducer');
        return rootReducer(newState, action)
    };

    const store = createStore(
        // creating a global reducer for an app with combineReducers
        reducer,

        composeEnhancers(
            applyMiddleware(
                routerHistoryMiddleware,
                epicMiddleware
            )
        )
    );

    epicMiddleware.run(rootEpic);

    return store;
};

