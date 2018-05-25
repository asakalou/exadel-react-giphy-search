import * as actions from './actions';

const defaultState = {
    initializing: true,
    error: null
};

export const reducer = (state = defaultState, action) => {
    switch(action.type) {

        case actions.INIT_APP_SUCCESS: {
            return {
                ...state,
                initializing: false
            };
        }

        case actions.INIT_APP_ERROR: {
            return {
                ...state,
                initializing: false,
                error: 'unable to init app'
            };
        }

        default: {
            return state;
        }

    }
};