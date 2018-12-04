// Redux Saga
import { call, put, takeLatest } from 'redux-saga/effects';

// Actions
import { getUserInfoSuccess, getUserInfoFailure } from '../../actions/userReducer/getUserInfoActions';
import { GET_USER_INFO_REQUEST } from '../../actions/userReducer/types';

// API
import getUserInfoApi from '../../api/getUserInfoApi';

// Worker
function* getUserInfoWorker(action) {
    try {
        const data = yield call(getUserInfoApi, action.token);
        yield put(getUserInfoSuccess(data));
    } catch (e) {
        yield put(getUserInfoFailure(e));
    }
}

// Watcher
export default function* getUserInfoWatcher() {
    yield takeLatest(GET_USER_INFO_REQUEST, getUserInfoWorker);
};