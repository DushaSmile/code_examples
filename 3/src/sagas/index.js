import { all } from 'redux-saga/effects';

// userReducer sagas
import loginSaga from './userReducer/loginSaga';
import registerSaga from './userReducer/registerSaga';
import getUserInfoSaga from './userReducer/getUserInfoSaga';

// transactionsReducer sagas
import filteredTransactionsSaga from './transactionsReducer/getFilteredTransactionsSaga';
import createTransactionSaga from './transactionsReducer/createTransactionSaga';
import getTransactionsSaga from './transactionsReducer/getTransactionsSaga';

export default function* rootSaga() {
    yield all([
        loginSaga(),
        registerSaga(),
        getUserInfoSaga(),

        filteredTransactionsSaga(),
        createTransactionSaga(),
        getTransactionsSaga()
    ]);
};