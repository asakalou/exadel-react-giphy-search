import {combineEpics} from 'redux-observable';
import {of} from 'rxjs';
import {switchMap, map, catchError, takeUntil} from 'rxjs/operators';
import * as actions from './actions';
import {ajax} from 'rxjs/ajax';
import * as qs from 'qs';


const URL = 'https://api.giphy.com/v1/gifs/search';
const API_KEY = 'JokfEsQ6phaio2LlwNgGHhpBr47QE89e';

const queryChange = (action$, store) =>
    action$.ofType(actions.HOME_QUERY_CHANGE).pipe(
        switchMap(action => {
            const params = qs.stringify({
                key: API_KEY,
                api_key: API_KEY,
                q: action.payload.query
            });

            return ajax({
                url: `${URL}?${params}`,
                method: 'GET',
                responseType: 'json'
            }).pipe(
                map(({response}) => {
                    console.log(response);
                    return actions.homeItemsLoadSuccess(response.data);
                }),
                catchError(error => {
                    return of(actions.homeItemsLoadError('An error!'));
                }),
                takeUntil(action$.ofType(actions.HOME_ITEMS_LOAD_CANCEL))
            );
        })
    );


export default combineEpics(
    queryChange
)