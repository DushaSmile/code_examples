// Redux Saga
import { call, put, takeEvery } from 'redux-saga/effects';

// Actions
import { loginSuccess, loginFailure } from '../../actions/userReducer/authActions';
import { LOGIN_REQUEST } from '../../actions/userReducer/types';

// AJAX POST request to API
const loginAjax = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (response.status !== 201) {
        throw await response.text();
    };
    return response.json();
};

// Worker
function* loginWorker(action) {
    try {
        const response = yield call(loginAjax, action.url, action.payload);
        yield put(loginSuccess(response))
        console.log(response);
    } catch (e) {
        yield put(loginFailure(e));
    };
};

// Watcher
export default function* loginWatcher() {
    yield takeEvery(LOGIN_REQUEST, loginWorker);
};