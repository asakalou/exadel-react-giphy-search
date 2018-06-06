import {of, throwError} from 'rxjs';
import {delay} from 'rxjs/operators';
import {loadRandom} from "./epics";
import {expectEpic} from "../../../testUtils/epics";
import * as actions from './actions';

describe('randomEpics', () => {

    describe('loadRandom', () => {

        const store = {
            getState: () => ({random: {}})
        };

        const dependencies = {api: {}};

        beforeEach(() => {
            dependencies.api.random = jest.fn();
        });

        it('should dispatch loadRandomSuccess', () => {
            dependencies.api.random.mockReturnValue(of({
                response: {
                    data: {id: 1}
                }
            }));

            expectEpic(
                loadRandom,
                dependencies,
                store,
                {
                    i: {t: '-a---', a: {
                            a: actions.loadRandom()
                        }},
                    o: {t: '-b---', a: {
                            b: actions.loadRandomSuccess({id: 1})
                        }}
                }
            );

            expect(dependencies.api.random.mock.calls.length).toBe(1);
        });

        it('should dispatch loadRandomError', () => {
            dependencies.api.random.mockReturnValue(throwError('Errrror!'));

            expectEpic(
                loadRandom,
                dependencies,
                store,
                {
                    i: {
                        t: '-a---', a: {
                            a: actions.loadRandom()
                        }
                    },
                    o: {
                        t: '-b---', a: {
                            b: actions.loadRandomError('An error!')
                        }
                    }
                }
            );

            expect(dependencies.api.random.mock.calls.length).toBe(1);
        });

        it('should dispatch loadRandomSuccess just once', () => {
            dependencies.api.random.mockReturnValue(of({
                response: {
                    data: {id: 1}
                }
            }).pipe(delay(4)));

            expectEpic(
                loadRandom,
                dependencies,
                store,
                {
                    i: {
                        t: 'aaa--', a: {
                            a: actions.loadRandom()
                        }
                    },
                    o: {
                        t: '------c', a: {
                            c: actions.loadRandomSuccess({id: 1})
                        }
                    }
                }
            );

            expect(dependencies.api.random.mock.calls.length).toBe(3);
        });

    });

});