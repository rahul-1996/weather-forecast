import axios from 'axios' ; 
import API_KEY from '../config';

export const FETCH_WEATHER = 'FETCH_WEATHER' ; 

export default function fetchWeather(city) {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}`;
    const request = axios.get(url) ;  
//Axios returns a promise.
//Promise does not actually contain any of our data.
//But we are returning the promise as the payload.
//But on the reducer instead of the promise on the payload, we have the actual response.
//Redux Promise sees the incoming action and specifically sees the payload property.
// If the payload is a promise, redux promise stops the action entirely.
//Once the request finishes, it dispatches a new action of the same type but with a payload
//of the resolved request.
//So basically it waits unit the promise resolves and then sends that to the reducer.
//So promise makes sure we only have to work with data, not promises

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}