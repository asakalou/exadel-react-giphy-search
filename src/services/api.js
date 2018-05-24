import {ajax} from 'rxjs/ajax';
import * as qs from 'qs';


const SEARCH_URL = 'https://api.giphy.com/v1/gifs/search';
const RANDOM_URL = 'https://api.giphy.com/v1/gifs/random';
const API_KEY = 'JokfEsQ6phaio2LlwNgGHhpBr47QE89e';


const api = {

    search: (query) => {
        const params = qs.stringify({
            key: API_KEY,
            api_key: API_KEY,
            q: query
        });

        return ajax({
            url: `${SEARCH_URL}?${params}`,
            method: 'GET',
            responseType: 'json'
        });
    },

    random: () => {
        const params = qs.stringify({
            key: API_KEY,
            api_key: API_KEY
        });

        return ajax({
            url: `${RANDOM_URL}?${params}`,
            method: 'GET',
            responseType: 'json'
        });
    },

    login: (username, password) => {

    },

    logout: () => {

    },

    signup: (username, password) => {

    },

    isLoggedIn: () => {

    }

};

export default api;