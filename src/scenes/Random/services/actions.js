export const LOAD_RANDOM = 'LOAD_RANDOM';
export const LOAD_RANDOM_SUCCESS = 'LOAD_RANDOM_SUCCESS';
export const LOAD_RANDOM_ERROR = 'LOAD_RANDOM_ERROR';

export const loadRandom = () => {
    return {
        type: LOAD_RANDOM
    }
};

export const loadRandomSuccess = (image) => {
    return {
        type: LOAD_RANDOM_SUCCESS,
        payload: {
            image
        }
    }
};

export const loadRandomError = (error) => {
    return {
        type: LOAD_RANDOM_ERROR,
        error
    }
};