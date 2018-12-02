// Redux Saga
import { call, put, takeEvery } from 'redux-saga/effects';

// Actions
import { registerSuccess, registerFailure } from '../../actions/userReducer/authActions';
import { REGISTER_REQUEST } from '../../actions/userReducer/types';

// AJAX POST request to API
const registerAjax = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (response.status !== 201) {
        throw await response.text()
    };
    return response.json();
};

// Worker
function* registerWorker(action) {
    try {
        const response = yield call(registerAjax, action.url, action.payload);
        yield put(registerSuccess(response));
        console.log(response);
    } catch (e) {
        yield put(registerFailure(e));
    }
}

// Watcher
export default function* registerWatcher() {
    yield takeEvery(REGISTER_REQUEST, registerWorker);
};