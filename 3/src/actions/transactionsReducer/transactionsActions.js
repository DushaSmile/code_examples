import {
    GET_TRANSACTIONS_REQUEST,
    GET_TRANSACTIONS_SUCCESS,
    GET_TRANSACTIONS_FAILURE,

    CREATE_TRANSACTION_REQUEST,
    CREATE_TRANSACTION_SUCCESS,
    CREATE_TRANSACTION_FAILURE
} from './types';

// Begin AJAX GET request
export const getTransactions = token => ({
    type: GET_TRANSACTIONS_REQUEST,
    token: token
});

// AJAX Success
export const getTransactionsSuccess = response => ({
    type: GET_TRANSACTIONS_SUCCESS,
    response: response
});

// AJAX Failure
export const getTransactionsFailure = error => ({
    type: GET_TRANSACTIONS_FAILURE,
    error: error
});




// Begin AJAX POST request
export const createTransaction = (token, transaction) => ({
    type: CREATE_TRANSACTION_REQUEST,
    token: token,
    transaction: transaction
});

// AJAX Success
export const createTransactionSuccess = response => ({
    type: CREATE_TRANSACTION_SUCCESS,
    response: response
});

// AJAX Failure
export const createTransactionFailure = error => ({
    type: CREATE_TRANSACTION_FAILURE,
    response: error
});