export const INIT_APP = 'INIT_APP';
export const INIT_APP_SUCCESS = 'INIT_APP_SUCCESS';


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