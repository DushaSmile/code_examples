// API key
import apiKey from './apiKey';

const endpoint_template = `https://api.openweathermap.org/data/2.5/weather?units=metric&APPID=${apiKey}&`;

const getWeatherApi = async (data, kind) => {
    let endpoint_query = endpoint_template;
    switch (kind) {
        case 'coords':
            endpoint_query += `lat=${data.lat}&lon=${data.lon}`;
            break;
        case 'name':
            endpoint_query += `q=${data.city_name}`;
            break;
        default:
            break;
    }
    const response = await fetch(endpoint_query);
    if (response.status === 404) {
        throw await response.statusText;
    }
    return response.json();
};

export default getWeatherApi;