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


const URL = 'https://api.giphy.com/v1/gifs/search';
const API_KEY = 'JokfEsQ6phaio2LlwNgGHhpBr47QE89e';

const queryChange = (action$, store) =>
    action$.ofType(actions.HOME_QUERY_CHANGE)
        .switchMap(action => {
            const params = qs.stringify({
                key: API_KEY,
                api_key: API_KEY,
                q: action.payload.query
            });

            return ajax({
                url: `${URL}?${params}`,
                method: 'GET',
                responseType: 'json'
            }).map(({response}) => {
                console.log(response);
                return actions.homeItemsLoadSuccess(response.data);
            }).catch(error => {
                return Observable.of(actions.homeItemsLoadError('An error!'));
            }).takeUntil(
                action$.ofType(actions.HOME_ITEMS_LOAD_CANCEL)
            );
        });

export default combineEpics(
    queryChange
)