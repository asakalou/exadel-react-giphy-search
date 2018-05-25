import {from, ReplaySubject} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import * as firebase from 'firebase';
import * as qs from 'qs';

firebase.initializeApp({
    apiKey: "AIzaSyCWFTfVjyWhyvj3PlXMwOYiqp2CSpt7MDw",
    authDomain: "giphy-search-a225c.firebaseapp.com",
    databaseURL: "https://giphy-search-a225c.firebaseio.com",
    projectId: "giphy-search-a225c",
    storageBucket: "giphy-search-a225c.appspot.com",
    messagingSenderId: "489526016041"
});

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
        return from(
            firebase.auth().signInWithEmailAndPassword(username, password)
        );
    },

    logout: () => {
        return from(
            firebase.auth().signOut()
        );
    },

    signup: (username, password) => {
        return from(
            firebase.auth().createUserWithEmailAndPassword(username, password)
        );
    },


    getUser: () => {
        const observer = new ReplaySubject(1);
        firebase.auth().onAuthStateChanged(observer);

        return observer;
    }

};

export default api;