import {
    GET_FILTERED_TRANSACTIONS_REQUEST,
    GET_FILTERED_TRANSACTIONS_SUCCESS,
    GET_FILTERED_TRANSACTIONS_FAILURE
} from './types';

// Begin AJAX request
export const getFilteredTransactions = (url, token, data) => ({
    type: GET_FILTERED_TRANSACTIONS_REQUEST,
    url: url,
    token: token,
    payload: data
});

// AJAX Success
export const getFilteredTransactionsSuccess = response => ({
    type: GET_FILTERED_TRANSACTIONS_SUCCESS,
    payload: response
});

// AJAX Failure
export const getFilteredTransactionsFailure = error => ({
    type: GET_FILTERED_TRANSACTIONS_FAILURE,
    payload: error
});