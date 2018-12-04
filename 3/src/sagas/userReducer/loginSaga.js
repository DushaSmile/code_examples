// Redux Saga
import { call, put, takeEvery } from 'redux-saga/effects';

// Actions
import { loginSuccess, loginFailure } from '../../actions/userReducer/authActions';
import { LOGIN_REQUEST } from '../../actions/userReducer/types';

// API
import loginUserApi from '../../api/loginUserApi';

// Worker
function* loginWorker(action) {
    try {
        const response = yield call(loginUserApi, action.loginData);
        yield put(loginSuccess(response));
    } catch (e) {
        yield put(loginFailure(e));
    }
}

// Watcher
export default function* loginWatcher() {
    yield takeEvery(LOGIN_REQUEST, loginWorker);
};