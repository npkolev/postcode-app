import initialState from "../InitialState";
import axios from 'axios';
import * as types from '../Types'


//SEARCH POSTCODE
export const searchPostcodeResponse = payload => {
    return {
        type: types.SEARCH_POSTCODE,
        payload: {
            data: payload.data.result,
        }
    }
}

export const searchNearestPostcodeResponse = payload => {
    return {
        type: types.SEARCH_NEAREST_POSTCODES,
        payload: {
            data: payload.data.result,
        }
    }
}

export const autocompletePostcodeResponse = payload => {
    return {
        type: types.AUTOCOMPLETE_POSTCODE,
        payload: {
            data: payload.data.result,
        }
    }
}

export const searchPostcode = (data, history) => {
    return dispatch => {
        return axios.get('http://api.postcodes.io/postcodes/'+`${data}`)
            .then(response => {
                dispatch(searchPostcodeResponse(response));
                history.push(`/search/${data}`)
            })
            .catch(error => {
                console.log(error.response);
            });
    }

}

export const searchNearestPostcodes = data => {
    return dispatch => {
        return axios.get('http://api.postcodes.io/postcodes/'+`${data}`+'/nearest')
            .then(response => {
                dispatch(searchNearestPostcodeResponse(response));
            })
            .catch(error => {
                console.log(error.response);
            });
    }

}

export const autocompletePostcode = data => {
    return dispatch => {
        return axios.get('http://api.postcodes.io/postcodes/'+`${data}`+'/autocomplete')
            .then(response => {
                dispatch(autocompletePostcodeResponse(response));
            })
            .catch(error => {
                console.log(error.response);
            });
    }

}
