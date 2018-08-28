export const LOGIN = {
    REQUESTED: 'login/requested',
    SUCCESS: 'login/success',
    ERROR: 'login/error'
};

export const SIGNUP = {
    REQUESTED: 'signup/requested',
    SUCCESS: 'signup/success',
    ERROR: 'signup/error'
};
export const LOGOUT = 'logout';

export const login = (email, password) => {
    return {
        type: LOGIN.REQUESTED,
        payload: {email, password}
    };
};

export const loginSuccess = (user) => {
    return {
        type: LOGIN.SUCCESS,
        payload: {user}
    };
};

export const loginError = (error) => {
    return {
        type: LOGIN.ERROR,
        payload: {error}
    };
};

export const signup = (email, password) => {
    return {
        type: SIGNUP.REQUESTED,
        payload: {email, password}
    };
};

export const signupSuccess = (user) => {
    return {
        type: SIGNUP.SUCCESS,
        payload: {user}
    };
};

export const signupError = (error) => {
    return {
        type: SIGNUP.ERROR,
        payload: {error}
    };
};

export const logout = () => {
    return {type: LOGOUT};
};