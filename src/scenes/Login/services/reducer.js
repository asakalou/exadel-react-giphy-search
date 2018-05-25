import * as actions from './actions';
import * as appActions from '../../../main/services/actions';

const defaultState = {
    user: null,
    loggedIn: false,
    loading: false,
    error: null
};

export const reducer = (state = defaultState, action) => {
    switch(action.type) {

        case actions.LOGIN: {
            return {
                ...state,
                loading: true
            };
        }

        case actions.LOGIN_SUCCESS: {
            return {
                ...state,
                user: action.payload.user,
                loading: false,
                loggedIn: true
            };
        }

        case actions.LOGIN_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error
            };
        }

        case actions.LOGOUT_SUCCESS: {
            return {
                ...state,
                user: null,
                loggedIn: false
            };
        }

        case appActions.INIT_APP_SUCCESS: {
            const {user} = action.payload;

            return {
                ...state,
                loggedIn: !!user,
                user
            };
        }

        default: {
            return state;
        }

    }
};