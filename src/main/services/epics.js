import {combineEpics} from 'redux-observable';
import {map, switchMap} from 'rxjs/operators';
import * as actions from './actions';


export const appInit = (action$, store, {api}) =>
    action$.ofType(actions.INIT_APP).pipe(
        switchMap(action => {
            return api.getUser().pipe(
                map(u => {
                    const user = u ? {username: u.username, uid: u.uid} : null;
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