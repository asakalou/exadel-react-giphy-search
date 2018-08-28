import {of, throwError} from 'rxjs';
import {delay} from 'rxjs/operators';
import {queryChange} from "./epics";
import {expectEpic} from "../../../testUtils/epics";
import * as actions from './actions';

describe('homeEpics', () => {

    describe('queryChange', () => {

        const store = {
            getState: () => {
                return {
                    home: {
                        query: 'dog'
                    }
                };
            }
        };

        const dependencies = {
            api: {}
        };

        beforeEach(() => {
            dependencies.api.search = jest.fn();
        });

        xit('should dispatch homeItemsLoadSuccess', () => {
            dependencies.api.search.mockReturnValue(of({
                response: {
                    data: [{id: 1}, {id: 2}]
                }
            }));

            expectEpic(
                queryChange,
                dependencies,
                store,
                {
                    i: {t: '--a---', a: {
                            a: actions.homeQueryChange('my dog is cute')
                        }},
                    o: {t: '--b---', a: {
                            b: actions.homeItemsLoadSuccess([{id: 1}, {id: 2}])
                        }}
                }
            );

            expect(dependencies.api.search.mock.calls.length).toBe(1);
            expect(dependencies.api.search.mock.calls[0][0]).toBe('my dog is cute');
        });

        xit('should dispatch homeItemsLoadError', () => {
            dependencies.api.search.mockReturnValue(throwError('Errrror!'));

            expectEpic(
                queryChange,
                dependencies,
                store,
                {
                    i: {
                        t: '-a---', a: {
                            a: actions.homeQueryChange('my dog is cute')
                        }
                    },
                    o: {
                        t: '-b---', a: {
                            b: actions.homeItemsLoadError('An error!')
                        }
                    }
                }
            );

            expect(dependencies.api.search.mock.calls.length).toBe(1);
            expect(dependencies.api.search.mock.calls[0][0]).toBe('my dog is cute');
        });

        it('should dispatch homeItemsLoadSuccess just once', () => {
            dependencies.api.search.mockReturnValue(of({
                response: {
                    data: [{id: 1}, {id: 2}]
                }
            }).pipe(delay(0)));

            expectEpic(
                queryChange,
                dependencies,
                store,
                {
                    i: {
                        t: 'cc-c', a: {
                            c: actions.homeQueryChange('my dog is cute')
                        }
                    },
                    o: {
                        t: 'cc-c', a: {
                            c: actions.homeItemsLoadSuccess([{id: 1}, {id: 2}])
                        }
                    }
                }
            );

            expect(dependencies.api.search.mock.calls.length).toBe(3);
            expect(dependencies.api.search.mock.calls[0][0]).toBe('my dog is cute');
        });

    });

});