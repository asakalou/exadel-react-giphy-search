import * as actions from './actions';

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

        default: {
            return state;
        }

    }
};