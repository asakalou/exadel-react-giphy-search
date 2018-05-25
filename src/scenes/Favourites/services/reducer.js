import * as actions from './actions';

const defaultState = {
    items: null,
    loading: false,
    error: null
};

export const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case actions.LOAD_FAVOURITES: {
            return {
                ...state,
                loading: true,
                error: null
            };
        }

        case actions.LOAD_FAVOURITES_SUCCESS: {
            return {
                ...state,
                items: action.payload.items,
                loading: false
            };
        }

        case actions.LOAD_FAVOURITES_ERROR: {
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