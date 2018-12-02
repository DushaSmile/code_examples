// Redux
import { combineReducers } from 'redux';

// Redux-Form
import { reducer as formReducer } from 'redux-form';

// Reducers
import userReducer from './userReducer';
import transactionsReducer from './transactionsReducer';

export default combineReducers({
    user: userReducer,
    transactions: transactionsReducer,
    form: formReducer
});