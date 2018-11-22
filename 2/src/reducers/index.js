import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import settingsReducer from './settingsReducer';

export default combineReducers({
    settings: settingsReducer,
    form: formReducer
});