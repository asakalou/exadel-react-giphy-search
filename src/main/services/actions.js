export const INIT_APP = 'INIT_APP';
export const INIT_APP_SUCCESS = 'INIT_APP_SUCCESS';
export const INIT_APP_ERROR = 'INIT_APP_ERROR';


export const initApp = () => {
    return {
        type: INIT_APP
    };
};

export const initAppSuccess = (payload) => {
    return {
        type: INIT_APP_SUCCESS,
        payload
    };
};

export const initAppError = (error) => {
    return {
        type: INIT_APP_ERROR,
        error
    };
};