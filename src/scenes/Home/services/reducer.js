import * as actions from './actions';

const defaultState = {
    query: '',
    loading: false,
    error: null,
    items: null
};

export const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case actions.HOME_QUERY_CHANGE: {
            return {
                ...state,
                query: action.payload.query
            };
        }

        case actions.HOME_ITEMS_LOAD: {
            return {
                ...state,
                loading: true
            };
        }

        case actions.HOME_ITEMS_LOAD_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: null,
                items: action.payload.items
            };
        }

        case actions.HOME_ITEMS_LOAD_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error
            };
        }

        case actions.HOME_ITEMS_LOAD_CANCEL: {
            return {
                ...state,
                loading: false
            };
        }
    }

    return state;
};