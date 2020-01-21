import axios from 'axios';

import {BASE_URL} from '../config'

export const fetchInfo = (city) => async dispatch => {
    try{
        const response = await axios.get(BASE_URL + '/weather/' + city)
    } catch(e) {
        if(e.response && e.response.status < 400){
            dispatch({type: 'LOAD_INFO', payload: e.response.data})
        } else {
            console.error('Error occurred', e.message);
        }
    }
};

