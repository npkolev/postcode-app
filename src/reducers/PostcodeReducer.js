import initialState from "../InitialState";
import * as types from '../Types'

export default function createReducer(state = initialState, action) {
    switch(action.type) {
        case types.SEARCH_POSTCODE:
            console.log(action.payload)
            return Object.assign({}, state, {
                data: action.payload
            });
        case types.SEARCH_NEAREST_POSTCODES:
            console.log(action.payload)
            return Object.assign({}, state, {
                nearest: action.payload
            });
        case types.AUTOCOMPLETE_POSTCODE:
            console.log(action.payload)
            return Object.assign({}, state, {
                autocomplete: action.payload
            });
        default:
            return state;
    }
}

