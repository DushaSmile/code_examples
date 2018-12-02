// Redux Saga
import { call, put, takeLatest } from 'redux-saga/effects';

// Actions
import { createTransactionSuccess, createTransactionFailure } from '../../actions/transactionsReducer/createTransactionActions';
import { CREATE_TRANSACTION_REQUEST } from '../../actions/transactionsReducer/types';

// AJAX POST request to API
const createTransactionAjax = async (url, token, data) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (response.status !== 200) {
        throw await response.text()
    }
    return response.json();
};

// Worker
function* createTransactionWorker(action) {
    try {
        const response = yield call(createTransactionAjax, action.url, action.token, action.payload);
        yield put(createTransactionSuccess(response));
    } catch (e) {
        yield put(createTransactionFailure(e));
    }
}

// Watcher
export default function* createTransactionWatcher() {
    yield takeLatest(CREATE_TRANSACTION_REQUEST, createTransactionWorker);
};