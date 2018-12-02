// Redux Saga
import { call, put, takeLatest } from 'redux-saga/effects';

// Actions
import { getTransactionsSuccess, getTransactionsFailure } from '../../actions/transactionsReducer/getTransactionsActions';
import { GET_TRANSACTIONS_REQUEST } from '../../actions/transactionsReducer/types';

// AJAX GET request to API
const getTransactionsAjax = async (url, token) => {
    const response = await fetch(url, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    if (response.status !== 200) {
        throw await response.text();
    }
    return response.json();
};

// Worker
function* getTransactionsWorker(action) {
    try {
        const response = yield call(getTransactionsAjax, action.url, action.token);
        console.log(response);
        yield put(getTransactionsSuccess(response));
    } catch (e) {
        yield put(getTransactionsFailure(e));
    }
}

// Watcher
export default function* getTransactionsWatcher() {
    yield takeLatest(GET_TRANSACTIONS_REQUEST, getTransactionsWorker);
}