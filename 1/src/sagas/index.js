import { all } from 'redux-saga/effects';
import getDataSaga from './getDataSaga';
import addDataSaga from './addDataSaga';

export default function* rootSaga() {
    yield all([
        getDataSaga(),
        addDataSaga()
    ]);
}