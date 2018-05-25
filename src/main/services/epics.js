import {combineEpics} from 'redux-observable';
import {first, map, switchMap} from 'rxjs/operators';
import {forkJoin} from 'rxjs';
import * as actions from './actions';

export const appInit = (action$, store, {api}) =>
    action$.ofType(actions.INIT_APP).pipe(
        switchMap(action => {
            return forkJoin(
                api.getUser().pipe(first())
            ).pipe(
                map(([u]) => {
                    const user = u ? {email: u.email, uid: u.uid} : null;

                    return actions.initAppSuccess({
                        user
                    });
                })
            );
        })
    );

export default combineEpics(
    appInit
)