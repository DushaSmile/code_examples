// Redux Saga
import { call, put, takeEvery } from 'redux-saga/effects';

// Actions
import { registerSuccess, registerFailure } from '../../actions/userReducer/authActions';
import { REGISTER_REQUEST } from '../../actions/userReducer/types';

// API
import registerUserApi from '../../api/registerUserApi';

// Worker
function* registerWorker(action) {
    try {
        const response = yield call(registerUserApi, action.registerData);
        yield put(registerSuccess(response));
    } catch (e) {
        yield put(registerFailure(e));
    }
}

// Watcher
export default function* registerWatcher() {
    yield takeEvery(REGISTER_REQUEST, registerWorker);
};