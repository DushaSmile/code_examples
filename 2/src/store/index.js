// Redux
import { createStore, compose, applyMiddleware } from 'redux';

// Redux-Saga
import createSagaMiddlware from 'redux-saga';

// Root reducer & saga
import rootReducer from '../reducers/index';
import rootSaga from '../sagas/index';

// Saga Middleware
const sagaMiddlware = createSagaMiddlware();

// devtools middleware
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddlware),
        reduxDevTools
    )
);

sagaMiddlware.run(rootSaga);

export default store;