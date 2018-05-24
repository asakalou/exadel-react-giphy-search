import {combineEpics} from 'redux-observable';
import {of} from 'rxjs';
import {catchError, map, switchMap, takeUntil} from 'rxjs/operators';
import * as actions from './actions';

const loadRandom = (action$, store, {api}) =>
    action$.ofType(actions.LOAD_RANDOM).pipe(
        switchMap(action => {
            return api.random().pipe(
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