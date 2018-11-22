// Redux Saga
import { call, put, takeLatest } from 'redux-saga/effects';

// Action Types
import { GET_DATA_REQUEST } from '../actions/types'
// Actions
import { getDataFailure, getDataSuccess } from '../actions/getDataActions';

// AJAX request to API
async function getDataAjax(url) {
    const response = await fetch(url);
    return response.json();
}

// worker
function* getDataWorker(action) {
    try {
        const data = yield call(getDataAjax, action.payload);
        yield put(getDataSuccess(data));
    } catch (e) {
        yield put(getDataFailure(e));
        console.log('error');
    }
}

// watcher
export default function* getDataWatcher() {
    yield takeLatest(GET_DATA_REQUEST, getDataWorker)
}