import {
    GET_SETTINGS_REQUEST,
    GET_SETTINGS_SUCCESS,
    GET_SETTINGS_FAILURE
} from './types';

// Begin AJAX request
export const getSettings = url => ({
    type: GET_SETTINGS_REQUEST,
    url: url
});

// AJAX Success
export const getSettingsSuccess = response => ({
    type: GET_SETTINGS_SUCCESS,
    payload: response
});

// AJAX Failure
export const getSettingsFailure = error => ({
    type: GET_SETTINGS_FAILURE,
    payload: error
});