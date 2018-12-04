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
export const login = loginData => ({
    type: LOGIN_REQUEST,
    loginData: loginData
});

// Login success
export const loginSuccess = response => ({
    type: LOGIN_SUCCESS,
    response: response
});

// Login failure
export const loginFailure = error => ({
    type: LOGIN_FAILURE,
    error: error
});





// Begin register
export const register = registerData => ({
    type: REGISTER_REQUEST,
    registerData: registerData
});

// Register success
export const registerSuccess = response => ({
    type: REGISTER_SUCCESS,
    response: response
});

// Register failure
export const registerFailure = error => ({
    type: REGISTER_FAILURE,
    error: error
});

// User logout
export const userLogout = () => ({
    type: USER_LOGOUT
});