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

export const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            user
        }
    }
};

export const loginError = (error) => {
    return {
        type: LOGIN_ERROR,
        error
    }
};

export const logout = () => {
    return {
        type: LOGOUT
    }
};

export const logoutSuccess = () => {
    return {
        type: LOGOUT_SUCCESS
    }
};

export const logoutError = (error) => {
    return {
        type: LOGOUT_ERROR,
        error
    }
};
