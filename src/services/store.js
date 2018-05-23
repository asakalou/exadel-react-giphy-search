import {routerMiddleware, routerReducer} from "react-router-redux";
import {applyMiddleware, compose, createStore} from "redux";
import combineReducers from "redux/src/combineReducers";
import {reducer as randomReducer} from '../scenes/Random/services/reducer';
import {reducer as homeReducer} from '../scenes/Home/services/reducer';
import {createEpicMiddleware, combineEpics} from 'redux-observable';
import randomEpic from '../scenes/Random/services/epics';
import homeEpic from '../scenes/Home/services/epics';


export const createAppStore = (history) => {
    const routerHistoryMiddleware = routerMiddleware(history);

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        || compose;

    const rootEpic = combineEpics(
        randomEpic,
        homeEpic
    );

    const epicMiddleware = createEpicMiddleware(rootEpic);

    return createStore(
        // creating a global reducer for an app with combineReducers

        combineReducers({
            router: routerReducer,
            random: randomReducer,
            home: homeReducer
        }),
        composeEnhancers(
            applyMiddleware(
                routerHistoryMiddleware,
                epicMiddleware
            )
        )
    );
};

