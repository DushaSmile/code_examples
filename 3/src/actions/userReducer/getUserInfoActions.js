import {
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAILURE
} from './types';

// Begin AJAX request
export const getUserInfo = token => ({
    type: GET_USER_INFO_REQUEST,
    token: token
});

// AJAX Success
export const getUserInfoSuccess = response => ({
    type: GET_USER_INFO_SUCCESS,
    response: response
});

// AJAX Failure
export const getUserInfoFailure = error => ({
    type: GET_USER_INFO_FAILURE,
    error: error
});