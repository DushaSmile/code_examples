// Redux
import { createStore, compose, applyMiddleware } from 'redux';

// localStorage
import { saveState } from '../util/localStorage';

// Redux Saga
import createSagaMiddleware from 'redux-saga';

// Root Reducer & Saga
import rootReducer from '../reducers/index';
import rootSaga from '../sagas/index';

// Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// devTools
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
    )
);

store.subscribe(() => {
    saveState(
        store.getState().weather.cities
    )
});

sagaMiddleware.run(rootSaga);

export default store;