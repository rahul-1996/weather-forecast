import API_KEY from '../../config';

export const FETCH_WEATHER = 'FETCH_WEATHER' ; 

export function fetchWeather() {
    return {
        type: FETCH_WEATHER
    };
}