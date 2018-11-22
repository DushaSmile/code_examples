import {
    SET_SETTINGS_REQUEST,
    SET_SETTINGS_SUCCESS,
    SET_SETTINGS_FAILURE
} from './types';

// Begin AJAX request
export const setSettings = (url, data) => ({
    type: SET_SETTINGS_REQUEST,
    url: url,
    payload: data
});

// AJAX Success
export const setSettingsSuccess = response => ({
    type: SET_SETTINGS_SUCCESS,
    payload: response
});

// AJAX Failure
export const setSettingsFailure = error => ({
    type: SET_SETTINGS_FAILURE,
    payload: error
});