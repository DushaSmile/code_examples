import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,

    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,

    USER_LOGOUT
} from './types';

// Begin login
export const login = (url, data) => ({
    type: LOGIN_REQUEST,
    url: url,
    payload: data
});

// Login success
export const loginSuccess = response => ({
    type: LOGIN_SUCCESS,
    payload: response
});

// Login failure
export const loginFailure = error => ({
    type: LOGIN_FAILURE,
    payload: error
});

// Begin register
export const register = (url, data) => ({
    type: REGISTER_REQUEST,
    url: url,
    payload: data
});

// Register success
export const registerSuccess = response => ({
    type: REGISTER_SUCCESS,
    payload: response
});

// Register failure
export const registerFailure = error => ({
    type: REGISTER_FAILURE,
    payload: error
});

// User logout
export const userLogout = () => ({
    type: USER_LOGOUT
});