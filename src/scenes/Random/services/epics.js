import {combineEpics} from 'redux-observable';
import {of, interval} from 'rxjs';
import {catchError, map, switchMap, takeUntil} from 'rxjs/operators';
import * as actions from './actions';

export const loadRandom = (action$, store, {api}) =>
    action$.ofType(actions.LOAD_RANDOM).pipe(
        switchMap(action => {
            return api.random().pipe(
                map(({response}) => {
                    return actions.loadRandomSuccess(response.data);
                }),
                catchError(error => {
                    return of(actions.loadRandomError('An error!'));
                }),
                takeUntil(action$.ofType(actions.LOAD_RANDOM_CANCEL))
            )
        })
    );

export const startTimer = (action$, store) =>
    action$.ofType(actions.START_TIMER).pipe(
        switchMap(action => {
            return interval(5000).pipe(
                map(() => actions.loadRandom())
            );
        })
    );


export default combineEpics(
    loadRandom,
    startTimer
)