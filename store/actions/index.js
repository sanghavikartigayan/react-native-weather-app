import * as actionTypes from '../../constants/index';

export function fetchWeatherDataPending() {
    return {
        type: actionTypes.FETCH_WEATHER_DATA_PENDING
    }
}

export function fetchWeatherDataSuccess(data) {
    return {
        type: actionTypes.FETCH_WEATHER_DATA_SUCCESS,
        payload: data
    }
}

export function fetchWeatherDataFailed(error) {
    return {
        type: actionTypes.FETCH_WEATHER_DATA_FAILED,
        payload: error
    }
}