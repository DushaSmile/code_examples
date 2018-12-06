// Redux Saga
import { call, put, takeLatest } from 'redux-saga/effects';

// Actions
import { getUserListSuggestionsSuccess, getUserListSuggestionsFailure } from '../../actions/transactionsReducer/userListSuggestionsActions';
import { GET_USER_LIST_SUGGESTIONS } from '../../actions/transactionsReducer/types';

// API
import getUserListSuggestionsApi from '../../api/getUserListSuggestionsApi';

// Worker
function* getFilteredTransactionsWorker(action) {
    try {
        const response = yield call(getUserListSuggestionsApi, action.token, action.suggestion);
        yield put(getUserListSuggestionsSuccess(response));
    } catch (e) {
        yield put(getUserListSuggestionsFailure(e));
    }
}

// Watcher
export default function* getFilteredTransactionsWatcher() {
    yield takeLatest(GET_USER_LIST_SUGGESTIONS, getFilteredTransactionsWorker);
};