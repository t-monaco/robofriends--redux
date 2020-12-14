import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import * as actions from './actions';
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
} from './constants';
import fetchMock from 'fetch-mock';

const mockStore = configureMockStore([thunkMiddleware]);
const store = mockStore({});

describe('Search field actions Tests', () => {
    it('Should create an action to seach robots', () => {
        const text = 'wooo';
        const expectAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text,
        };
        expect(actions.setSearchField(text)).toEqual(expectAction);
    });
});

describe('Robots actions tests', () => {
    beforeEach(() => {
        store.clearActions();
    });
    it('Fetch robots action PENDING', () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots());
        const action = store.getActions();
        const expectAction = {
            type: REQUEST_ROBOTS_PENDING,
        };
        expect(action[0]).toEqual(expectAction);
    });

    it('Fetch robots action SUCCESS', () => {
        fetchMock.get('https://jsonplaceholder.typicode.com/users', {
            count: 82,
            results: [
                {
                    id: 1,
                    name: 'test-1',
                    email: 'test-1@mail.com',
                },
                {
                    id: 2,
                    name: 'Test-2',
                    email: 'test-2@mail.com',
                },
            ],
        });

        return store.dispatch(actions.requestRobots()).then(() => {
            let expectAction = {
                type: REQUEST_ROBOTS_SUCCESS,
                payload: {
                    count: 82,
                    results: [
                        {
                            id: 1,
                            name: 'test-1',
                            email: 'test-1@mail.com',
                        },
                        {
                            id: 2,
                            name: 'Test-2',
                            email: 'test-2@mail.com',
                        },
                    ],
                },
            };
            expect(store.getActions()[1]).toEqual(expectAction);
        });
    });
});
