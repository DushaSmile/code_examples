import {
    ADD_DATA_REQUEST,
    ADD_DATA_SUCCESS,
    ADD_DATA_FAILURE
} from './types';

// Begin AJAX request action
export const addData = data => ({
    type: ADD_DATA_REQUEST,
    payload: data
});

// AJAX Success
export const addDataSuccess = () => ({
    type: ADD_DATA_SUCCESS
});

// AJAX Failed
export const addDataFailure = error => ({
    type: ADD_DATA_FAILURE,
    payload: error
});