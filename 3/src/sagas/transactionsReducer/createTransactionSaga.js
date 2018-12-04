// Redux Saga
import { call, put, takeLatest } from 'redux-saga/effects';

// Actions
import { createTransactionSuccess, createTransactionFailure } from '../../actions/transactionsReducer/transactionsActions';
import { CREATE_TRANSACTION_REQUEST } from '../../actions/transactionsReducer/types';

// API
import { createUserTransactionApi } from '../../api/userTransactionsApi';

// Worker
function* createTransactionWorker(action) {
    try {
        const response = yield call(createUserTransactionApi, action.token, action.transaction);
        yield put(createTransactionSuccess(response));
    } catch (e) {
        yield put(createTransactionFailure(e));
    }
}

// Watcher
export default function* createTransactionWatcher() {
    yield takeLatest(CREATE_TRANSACTION_REQUEST, createTransactionWorker);
};