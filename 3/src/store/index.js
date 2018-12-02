// Redux
import { createStore, compose, applyMiddleware } from 'redux';

// Redux Saga
import createSagaMiddleware from 'redux-saga';

// Root reducer & saga
import rootReducer from '../reducers/index';
import rootSaga from '../sagas/index';

// Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// devtools middleware
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore( 
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        reduxDevTools
    )
);

sagaMiddleware.run(rootSaga);

export default store;