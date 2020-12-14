import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
} from './constants';

import * as reducers from './reducers'

describe('Search Robots', () => {
    const initialStateSearch = {
        searchField: ''
    }
    it('Should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch)
    })

    it('Should handle CHANGE_SEARCH_FIELD', () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({
            searchField: 'abc'
        });
    });
})

describe('Request Robots', () => {
    const initialStateRobots = {
        robots: [],
        isPending: false,
        error: ''
    };
    it('Should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
    });

    it('Should handle REQUEST_ROBOTS_PENDING', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            robots: [],
            isPending: true,
            error: ''
        })
    })

    it('Should handle REQUEST_ROBOTS_SUCCESS', () => {
        expect(
            reducers.requestRobots(initialStateRobots, {
                type: REQUEST_ROBOTS_SUCCESS,
                payload: [
                    {
                        id: 123,
                        email: 'test@mail.com',
                        name: 'test',
                    },
                ],
            })
        ).toEqual({
            robots: [
                {
                    id: 123,
                    email: 'test@mail.com',
                    name: 'test',
                },
            ],
            isPending: false,
            error: '',
        });
    })

    it('Should handle REQUEST_ROBOTS_FAILED', () => {
        expect(
            reducers.requestRobots(initialStateRobots, {
                type: REQUEST_ROBOTS_FAILED,
                payload: 'NOOOO!!',
            })
        ).toEqual({
            robots: [],
            isPending: false,
            error: 'NOOOO!!',
        });
    });
})
