// Redux Saga
import { call, put, takeLatest } from 'redux-saga/effects';

// Action types
import { ADD_DATA_REQUEST } from '../actions/types';

// Actions
import { addDataSuccess, addDataFailure } from '../actions/addDataActions';

// AJAX request to API
async function addDataAjax(data) {
    const { daterange_start, daterange_end, passengers_input, price_input } = data;
    const api = 'http://localhost:3000/requests';
    const body = {
        id: `req-${Math.floor(Math.random() * 100000)}`,
        date_from: daterange_start,
        date_until: daterange_end,
        passengers: passengers_input,
        price: price_input,
        currency: 'USD'
    };
    await fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
}

// worker
function* addDataWorker(action) {
    try {
        yield call(addDataAjax, action.payload);
        yield put(addDataSuccess())
    } catch (e) {
        yield put(addDataFailure(e));
    }
}

// watcher
export default function* addDataWatcher() {
    yield takeLatest(ADD_DATA_REQUEST, addDataWorker)
}