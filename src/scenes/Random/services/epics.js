import {combineEpics} from 'redux-observable';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/observable/of';
import * as actions from './actions';
import {ajax} from 'rxjs/observable/dom/ajax';
import * as qs from 'qs';


const URL = 'https://api.giphy.com/v1/gifs/random';
const API_KEY = 'JokfEsQ6phaio2LlwNgGHhpBr47QE89e';

const loadRandom = (action$, store) =>
    action$.ofType(actions.LOAD_RANDOM)
        .switchMap(action => {
            const params = qs.stringify({
                key: API_KEY,
                api_key: API_KEY
            });

            return ajax({
                url: `${URL}?${params}`,
                method: 'GET',
                responseType: 'json'
            }).map(({response}) => {
                console.log(response);
                return actions.loadRandomSuccess(response.data);
            }).catch(error => {
                return Observable.of(actions.loadRandomError('An error!'));
            }).takeUntil(
                action$.ofType(actions.LOAD_RANDOM_CANCEL)
            );
        });

export default combineEpics(
    loadRandom
)