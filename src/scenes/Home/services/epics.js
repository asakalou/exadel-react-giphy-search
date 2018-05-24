import {combineEpics} from 'redux-observable';
import {of} from 'rxjs';
import {catchError, map, switchMap, takeUntil} from 'rxjs/operators';
import * as actions from './actions';


export const queryChange = (action$, store, {api}) =>
    action$.ofType(actions.HOME_QUERY_CHANGE).pipe(
        switchMap(action => {
            return api.search(action.payload.query)
                .pipe(
                    map(({response}) => {
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