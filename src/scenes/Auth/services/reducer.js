import * as actions from './actions';

const defaultState = {
    user: null,
    loggedIn: false,
    loading: false,
    error: null
};

export const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case actions.LOGIN.REQUESTED:
        case actions.SIGNUP.REQUESTED: {
            return {
                ...state,
                loading: true
            };
        }

        case actions.LOGIN.SUCCESS:
        case actions.SIGNUP.SUCCESS: {
            return {
                ...state,
                user: action.payload.user,
                loggedIn: true,
                loading: false,
                error: null
            };
        }

        case actions.LOGIN.ERROR:
        case actions.SIGNUP.ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        }

        case actions.LOGOUT: {
            return defaultState;
        }

        default:
            return state;
    }
};