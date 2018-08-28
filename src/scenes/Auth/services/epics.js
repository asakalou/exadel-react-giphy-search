import {combineEpics} from 'redux-observable';
import {of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import * as actions from './actions';

export const login = (action$, store, {api}) =>
    action$.ofType(actions.LOGIN.REQUESTED).pipe(
        switchMap(action => {
            const {email, password} = action.payload;

            if (password === '1') {
                return of(actions.loginSuccess({
                    email
                }));
            }

            return of(actions.loginError(
                'Please check credentials'
            ));

        })
    );

export const signup = (action$, store, {api}) =>
    action$.ofType(actions.SIGNUP.REQUESTED).pipe(
        switchMap(action => {
            const {email, password} = action.payload;

            if (email !== 'admin@gmail.com') {
                return of(actions.signupSuccess({
                    email
                }));
            }

            return of(actions.signupError({
                error: 'User already exists'
            }));

        })
    );

export const logout = (action$, store, {api}) =>
    action$.ofType(actions.LOGOUT).pipe(
        switchMap(action => {
            return of({type: 'unknown'});
        })
    );



export default combineEpics(
    login,
    logout,
    signup
)