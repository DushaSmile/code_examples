// Redux
import { createStore, applyMiddleware, compose } from 'redux';

// Redux-saga
import createSagaMiddleware from 'redux-saga';

// Root reducer & saga
import rootSaga from '../sagas/index'
import rootReducer from '../reducers/index'

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
import devToolsEnhancer, { composeWithDevTools } from 'remote-redux-devtools';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        reduxDevTools
    )
);


sagaMiddleware.run(rootSaga);

export default store;