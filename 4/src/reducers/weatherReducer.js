import {
    GET_WEATHER_REQUEST,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_FAILURE,

    DELETE_WEATHER
} from '../actions/types';

// localStorage
import { loadState } from '../util/localStorage';

const localStorageState = loadState();
let initialState;

if (localStorageState !== undefined) {
    initialState = {
        isFetching: false,
        cities: localStorageState
    }
} else {
    initialState = {
        isFetching: false,
        cities: []
    };
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WEATHER_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case GET_WEATHER_SUCCESS:
            // check for duplicated cities id in state
            const duplicateCheck = state.cities.find(city => {
                return city.id === action.response.id
            });
            // if no duplicated found
            if (duplicateCheck === undefined) {
                return {
                    ...state,
                    cities: [ ...state.cities, action.response ],
                    isFetching: false
                };
            } else {
                alert('City already added');
                return state;
            }
        case GET_WEATHER_FAILURE:
            // заглушка на случай ошибки API
            alert(action.error);
            return state;

        case DELETE_WEATHER:
            return {
                ...state,
                cities:
                    state.cities.filter(city =>
                        city.id != action.id
                    )
            };

        default:
            return state;
    }
};

export default weatherReducer;