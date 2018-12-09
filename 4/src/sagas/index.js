// Redux-Saga
import { all } from 'redux-saga/effects';

// weatherReducer sagas
import getWeatherSaga from './getWeatherSaga';

export default function* rootSaga() {
    yield all([
        getWeatherSaga()
    ])
};