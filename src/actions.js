import {apiCall} from './api/api'
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
} from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text,
});

export const requestRobots = () => async dispatch => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    try {
        const data = await apiCall('https://jsonplaceholder.typicode.com/users');
        return dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data });
    } catch (error) {
        return dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error });
    }
};
