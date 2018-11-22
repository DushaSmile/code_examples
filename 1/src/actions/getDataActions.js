import {
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE
} from './types';

// Begin AJAX request action
export const getData = url => ({
    type: GET_DATA_REQUEST,
    payload: url
});

// AJAX success action
export const getDataSuccess = response => ({
    type: GET_DATA_SUCCESS,
    payload: response
});

// AJAX failure action
export const getDataFailure = error => ({
    type: GET_DATA_FAILURE,
    payload: error
});