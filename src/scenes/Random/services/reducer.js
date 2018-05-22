import * as actions from './actions';

const defaultState = {
    image: null,
    loading: false,
    error: null
};

export const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case actions.LOAD_RANDOM: {
            return {
                ...state,
                loading: true,
                error: null
            };
        }

        case actions.LOAD_RANDOM_SUCCESS: {
            return {
                ...state,
                image: action.payload.image,
                loading: false,
            };
        }

        case actions.LOAD_RANDOM_ERROR: {
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