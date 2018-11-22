import { all } from 'redux-saga/effects';

import getSettingsSaga from './getSettingsSaga';
import setSettingsSaga from './setSettingsSaga';

export default function* rootSaga() {
    yield all([
        getSettingsSaga(),
        setSettingsSaga()
    ])
};