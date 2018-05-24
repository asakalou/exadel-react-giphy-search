export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

export const login = (username, password) => {
    return {
        type: LOGIN,
        payload: {
            username,
            password
        }
    }
};

export const logout = () => {
    return {
        type: LOGOUT
    }
};
