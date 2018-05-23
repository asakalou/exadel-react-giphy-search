export const HOME_QUERY_CHANGE = 'HOME_QUERY_CHANGE';
export const HOME_ITEMS_LOAD = 'HOME_ITEMS_LOAD';
export const HOME_ITEMS_LOAD_SUCCESS = 'HOME_ITEMS_LOAD_SUCCESS';
export const HOME_ITEMS_LOAD_ERROR = 'HOME_ITEMS_LOAD_ERROR';
export const HOME_ITEMS_LOAD_CANCEL = 'HOME_ITEMS_LOAD_CANCEL';

export const homeQueryChange = (query) => {
    return {
        type: HOME_QUERY_CHANGE,
        payload: {query}
    };
};

export const homeItemsLoad = () => {
    return {
        type: HOME_ITEMS_LOAD
    };
};

export const homeItemsLoadSuccess = (items) => {
    return {
        type: HOME_ITEMS_LOAD_SUCCESS,
        payload: {items}
    };
};

export const homeItemsLoadError = (error) => {
    return {
        type: HOME_ITEMS_LOAD_ERROR,
        error
    };
};

export const homeItemsLoadCancel = () => {
    return {
        type: HOME_ITEMS_LOAD_CANCEL
    };
};