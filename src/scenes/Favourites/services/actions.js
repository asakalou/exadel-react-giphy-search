export const LOAD_FAVOURITES = 'LOAD_FAVOURITES';
export const LOAD_FAVOURITES_SUCCESS = 'LOAD_FAVOURITES_SUCCESS';
export const LOAD_FAVOURITES_ERROR = 'LOAD_FAVOURITES_ERROR';

export const loadFavourites = () => {
    return {
        type: LOAD_FAVOURITES
    }
};

export const loadFavouritesSuccess = (items) => {
    return {
        type: LOAD_FAVOURITES_SUCCESS,
        payload: items
    }
};

export const loadFavouritesError = (error) => {
    return {
        type: LOAD_FAVOURITES_ERROR,
        error
    }
};