import { all } from 'redux-saga/effects';

// userReducer sagas
import loginSaga from './userReducer/loginSaga';
import registerSaga from './userReducer/registerSaga';
import getUserInfoSaga from './userReducer/getUserInfoSaga';

// transactionsReducer sagas
import getUserListSuggestionsSaga from './transactionsReducer/getUserListSuggestionsSaga';
import createTransactionSaga from './transactionsReducer/createTransactionSaga';
import getTransactionsSaga from './transactionsReducer/getTransactionsSaga';

export default function* rootSaga() {
    yield all([
        loginSaga(),
        registerSaga(),
        getUserInfoSaga(),

        getUserListSuggestionsSaga(),
        createTransactionSaga(),
        getTransactionsSaga()
    ]);
};

