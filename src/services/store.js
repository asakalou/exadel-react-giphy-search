import {routerMiddleware, routerReducer} from "react-router-redux";
import {applyMiddleware, compose, createStore} from "redux";
import combineReducers from "redux/src/combineReducers";
import {reducer as randomReducer} from '../scenes/Random/services/reducer';
import {createEpicMiddleware, combineEpics} from 'redux-observable';
import randomEpic from '../scenes/Random/services/epics';


export const createAppStore = (history) => {
    const routerHistoryMiddleware = routerMiddleware(history);

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        || compose;

    const rootEpic = combineEpics(
        randomEpic
    );

    const epicMiddleware = createEpicMiddleware(rootEpic);

    return createStore(
        combineReducers({
            router: routerReducer,
            random: randomReducer
        }),
        composeEnhancers(
            applyMiddleware(
                routerHistoryMiddleware,
                epicMiddleware
            )
        )
    );
};

