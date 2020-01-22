import axios from 'axios';

import { BASE_URL } from '../config'

export const fetchInfo = (cities = []) => async dispatch => {
    try {
        dispatch({ type: 'LOAD_INFO', payload: { loading: true } });
        const response = await axios.get(BASE_URL + '/weather', { params: { cities }, validateStatus: status => status < 400 });
        console.log('Response =>', response.data)
        dispatch({ type: 'FETCH_COMPLETE', payload: response.data });
    } catch (e) {
        console.error('Error occurred', e.message);
    }
};

