import * as actionTypes from '../../constants/index';

const initialState = {
    data: [],
    error: false,
    loading: false,
    message: ''
};

export default function fetchDataReducer(state=initialState, action) {
    switch(action.type) {
        case actionTypes.FETCH_WEATHER_DATA_PENDING: 
            return {
                ...state,
                loading: true,
                error: false
            };
        case actionTypes.FETCH_WEATHER_DATA_SUCCESS:
            console.log('in reducer', action.payload);
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false
            };
        case actionTypes.FETCH_WEATHER_DATA_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
                message: action.payload
            };
        default:
            return state;
    }
}