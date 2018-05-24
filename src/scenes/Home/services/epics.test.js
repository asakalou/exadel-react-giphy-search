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

        it('should dispatch homeItemsLoadSuccess', () => {
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
                            b: actions.homeItemsLoadSuccess([{id: 1}, {id: 2}])
                        }
                    }
                },
                (scheduler) => {
                    dependencies.api.search.mockReturnValue(of({
                        response: {
                            data: [{id: 1}, {id: 2}]
                        }
                    }));
                }
            );

            expect(dependencies.api.search.mock.calls.length).toBe(1);
            expect(dependencies.api.search.mock.calls[0][0]).toBe('my dog is cute');
        });

        it('should dispatch homeItemsLoadError', () => {
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
                },
                (scheduler) => {
                    dependencies.api.search.mockReturnValue(throwError('Errrror!'));
                }
            );

            expect(dependencies.api.search.mock.calls.length).toBe(1);
            expect(dependencies.api.search.mock.calls[0][0]).toBe('my dog is cute');
        });

        it('should dispatch homeItemsLoadSuccess just once', () => {
            expectEpic(
                queryChange,
                dependencies,
                store,
                {
                    i: {
                        t: '-a--', a: {
                            a: actions.homeQueryChange('my dog is cute'),
                            b: actions.homeQueryChange('my dog is cute')
                        }
                    },
                    o: {
                        t: '---c', a: {
                            c: actions.homeItemsLoadSuccess([{id: 1}, {id: 2}])
                        }
                    }
                },
                (scheduler) => {
                    dependencies.api.search.mockReturnValue(of({
                        response: {
                            data: [{id: 1}, {id: 2}]
                        }
                    }).pipe(delay(20, scheduler)));
                }
            );

            expect(dependencies.api.search.mock.calls.length).toBe(1);
            expect(dependencies.api.search.mock.calls[0][0]).toBe('my dog is cute');
        });

    });

});