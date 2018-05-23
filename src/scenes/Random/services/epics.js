import {combineEpics} from 'redux-observable';
import {of} from 'rxjs';
import {catchError, map, switchMap, takeUntil} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';
import * as qs from 'qs';
import * as actions from './actions';



const URL = 'https://api.giphy.com/v1/gifs/random';
const API_KEY = 'JokfEsQ6phaio2LlwNgGHhpBr47QE89e';

const loadRandom = (action$, store) =>
    action$.ofType(actions.LOAD_RANDOM).pipe(
        switchMap(action => {
            const params = qs.stringify({
                key: API_KEY,
                api_key: API_KEY
            });

            return ajax({
                url: `${URL}?${params}`,
                method: 'GET',
                responseType: 'json'
            }).pipe(
                map(({response}) => {
                    console.log(response);
                    return actions.loadRandomSuccess(response.data);
                }),
                catchError(error => {
                    return of(actions.loadRandomError('An error!'));
                }),
                takeUntil(action$.ofType(actions.LOAD_RANDOM_CANCEL))
            )
        })
    );


export default combineEpics(
    loadRandom
)