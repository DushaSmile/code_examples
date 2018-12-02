// Redux Saga
import { call, put, takeLatest } from 'redux-saga/effects';

// Actions
import { getUserInfoSuccess, getUserInfoFailure } from '../../actions/userReducer/getUserInfoActions';
import { GET_USER_INFO_REQUEST } from '../../actions/userReducer/types';

// AJAX GET request to API
const getUserInfoAjax = async (url, token) => {
    const response = await fetch(url, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    if (response.status !== 200) {
        throw await response.text();
    }
    return response.json();
};

// Worker
function* getUserInfoWorker(action) {
    try {
        const data = yield call(getUserInfoAjax, action.url, action.payload);
        yield put(getUserInfoSuccess(data));
    } catch (e) {
        yield put(getUserInfoFailure(e));
    }
}

// Watcher
export default function* getUserInfoWatcher() {
    yield takeLatest(GET_USER_INFO_REQUEST, getUserInfoWorker);
};