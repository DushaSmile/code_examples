// Redux Saga
import { call, put, takeLatest } from 'redux-saga/effects';

// Actions
import { getFilteredTransactionsSuccess, getFilteredTransactionsFailure } from '../../actions/transactionsReducer/getFilteredTransactionsActions';
import { GET_FILTERED_TRANSACTIONS_REQUEST } from '../../actions/transactionsReducer/types';

// AJAX POST request to API 
const getFilteredTransactionsAjax = async (url, token, data) => {
    const body = {
        filter: data
    };
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    if (response.status !== 200) {
        throw await response.text();
    }
    return response.json();
};

// Worker
function* getFilteredTransactionsWorker(action) {
    try {
        const response = yield call(getFilteredTransactionsAjax, action.url, action.token, action.payload);
        yield put(getFilteredTransactionsSuccess(response));
    } catch (e) {
        yield put(getFilteredTransactionsFailure(e));
    }
}

// Watcher
export default function* getFilteredTransactionsWatcher() {
    yield takeLatest(GET_FILTERED_TRANSACTIONS_REQUEST, getFilteredTransactionsWorker);
};