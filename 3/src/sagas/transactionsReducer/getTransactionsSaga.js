// Redux Saga
import { call, put, takeLatest } from 'redux-saga/effects';

// Actions
import { getTransactionsSuccess, getTransactionsFailure } from '../../actions/transactionsReducer/transactionsActions';
import { GET_TRANSACTIONS_REQUEST } from '../../actions/transactionsReducer/types';

// API
import { getUserTransactionsApi } from '../../api/userTransactionsApi';

// Worker
function* getTransactionsWorker(action) {
    try {
        const response = yield call(getUserTransactionsApi, action.token);
        yield put(getTransactionsSuccess(response));
    } catch (e) {
        yield put(getTransactionsFailure(e));
    }
}

// Watcher
export default function* getTransactionsWatcher() {
    yield takeLatest(GET_TRANSACTIONS_REQUEST, getTransactionsWorker);
}