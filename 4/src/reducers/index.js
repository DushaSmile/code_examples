// Redux
import { combineReducers } from 'redux';

// Redux-Form
import { reducer as formReducer } from 'redux-form';

// Reducers
import weatherReducer from './weatherReducer';


export default combineReducers({
    weather: weatherReducer,
    form: formReducer
});