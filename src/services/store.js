import {routerMiddleware, routerReducer} from "react-router-redux";
import {applyMiddleware, compose, createStore} from "redux";
import combineReducers from "redux/src/combineReducers";
import {reducer as randomReducer} from '../scenes/Random/services/reducer';
import {reducer as homeReducer} from '../scenes/Home/services/reducer';
import {reducer as loginReducer} from '../scenes/Login/services/reducer';
import {reducer as mainReducer} from '../main/services/reducer';
import {reducer as favouritesReducer} from '../scenes/Favourites/services/reducer';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import randomEpic from '../scenes/Random/services/epics';
import homeEpic from '../scenes/Home/services/epics';
import authEpic from '../scenes/Login/services/epics';
import mainEpic from '../main/services/epics';
import api from './api';


export const createAppStore = (history) => {
    const routerHistoryMiddleware = routerMiddleware(history);

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        || compose;

    const rootEpic = combineEpics(
        randomEpic,
        homeEpic,
        authEpic,
        mainEpic
    );

    const epicMiddleware = createEpicMiddleware(rootEpic, {
        dependencies: {
            api
        }
    });

    const rootReducer = combineReducers({
        router: routerReducer,
        random: randomReducer,
        home: homeReducer,
        auth: loginReducer,
        main: mainReducer,
        favourites: favouritesReducer
    });

    return createStore(
        // creating a global reducer for an app with combineReducers
        rootReducer,

        composeEnhancers(
            applyMiddleware(
                routerHistoryMiddleware,
                epicMiddleware
            )
        )
    );
};

