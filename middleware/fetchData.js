import { fetchWeatherDataPending, fetchWeatherDataSuccess, fetchWeatherDataFailed } from "../store/actions"
import {db} from '../App';

export const initWeatherData = () => {
    return function(dispatch) {
        dispatch(fetchWeatherDataPending())
        db.ref('/weather').once('value', function (snapshot) {
            dispatch(fetchWeatherDataSuccess(snapshot.val()));
        }),
        function(error) {
            dispatch(fetchWeatherDataFailed(error))
        };
    }
};