import {combineEpics} from 'redux-observable';
import {of} from 'rxjs';
import {catchError, map, switchMap, takeUntil} from 'rxjs/operators';
import * as actions from './actions';


export const login = (action$, store, {api}) =>
    action$.ofType(actions.LOGIN).pipe(
        switchMap(action => {
            const {username, password} = action.payload;

            return api.login(username, password)
                .pipe(
                    map(({response}) => {
                        return actions.loginSuccess(response.data);
                    }),
                    catchError(error => {
                        return of(actions.loginError('An error!'));
                    }),
                    takeUntil(action$.ofType(actions.LOGIN_CANCELLED))
                );
        })
    );

export const logout = (action$, store, {api}) =>
    action$.ofType(actions.LOGOUT).pipe(
        switchMap(action => {

            return api.logout();
                // .pipe(
                //     map(({response}) => {
                //         return actions.logout(response.data);
                //     }),
                //     catchError(error => {
                //         return of(actions.loginError('An error!'));
                //     }),
                //     takeUntil(action$.ofType(actions.LOGIN_CANCELLED))
                // );
        })
    );


export default combineEpics(
    login,
    logout
)