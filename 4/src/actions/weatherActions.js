import {
    GET_WEATHER_REQUEST,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_FAILURE,

    DELETE_WEATHER
} from './types';

// Begin GET AJAX
export const getWeather = (data, kind) => ({
    type: GET_WEATHER_REQUEST,
    kind: kind,
    data: data
});

// AJAX Success
export const getWeatherSuccess = response => ({
    type: GET_WEATHER_SUCCESS,
    response: response
});

// AJAX Failure
export const getWeatherFailure = error => ({
    type: GET_WEATHER_FAILURE,
    error: error
});


// Delete weather info
export const deleteWeather = id => ({
    type: DELETE_WEATHER,
    id: id
});
