import {
    GET_SETTINGS_SUCCESS,
    GET_SETTINGS_FAILURE,
    SET_SETTINGS_SUCCESS,
    SET_SETTINGS_FAILURE
} from '../actions/types';

const settingsReducer = (state = { finishedLoading: false }, action) => {
    switch(action.type) {
        case GET_SETTINGS_SUCCESS:
            return {
                ...state,
                finishedLoading: true,
                values: action.payload
            };
        case GET_SETTINGS_FAILURE:
            alert('error');
            return state;
        case SET_SETTINGS_SUCCESS:
            return {
                ...state,
                values: {
                    ...state.values,
                    [action.payload.name] : action.payload.value
                }
            };
        case SET_SETTINGS_FAILURE:
            return state;
        default:
            return state;
    }
};

export default settingsReducer;