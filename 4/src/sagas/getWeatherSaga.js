// Redux-Saga
import { call, put, takeLatest } from 'redux-saga/effects';

// Actions
import { getWeatherSuccess, getWeatherFailure } from '../actions/weatherActions';
import { GET_WEATHER_REQUEST } from '../actions/types';

// API
import getWeatherApi from '../api/getWeatherApi';

// Worker
function* getWeatherWorker(action) {
    try {
        const response = yield call(getWeatherApi, action.data, action.kind);
        yield put(getWeatherSuccess(response));
    } catch (error) {
        yield put(getWeatherFailure(error));
    }
}

// Watcher
export default function* getWeatherWatcher() {
    yield takeLatest(GET_WEATHER_REQUEST, getWeatherWorker);
}