import {
    CREATE_TRANSACTION_REQUEST,
    CREATE_TRANSACTION_SUCCESS,
    CREATE_TRANSACTION_FAILURE
} from './types';

// Begin AJAX request
export const createTransaction = (url, token, data) => ({
    type: CREATE_TRANSACTION_REQUEST,
    url: url,
    token: token,
    payload: data
});

// AJAX Success
export const createTransactionSuccess = response => ({
    type: CREATE_TRANSACTION_SUCCESS,
    payload: response
});

// AJAX Failure
export const createTransactionFailure = error => ({
    type: CREATE_TRANSACTION_FAILURE,
    payload: error
});