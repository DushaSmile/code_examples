import {
    GET_TRANSACTIONS_REQUEST,
    GET_TRANSACTIONS_SUCCESS,
    GET_TRANSACTIONS_FAILURE
} from './types';

// Begin AJAX request
export const getTransactions = (url, token) => ({
    type: GET_TRANSACTIONS_REQUEST,
    url: url,
    token: token
});

// AJAX Success
export const getTransactionsSuccess = response => ({
    type: GET_TRANSACTIONS_SUCCESS,
    payload: response
});

// AJAX Failure
export const getTransactionsFailure = error => ({
    type: GET_TRANSACTIONS_FAILURE,
    payload: error
});