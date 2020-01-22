import axios from 'axios';
import { BASE_URL } from '../config'


export const fetchForm = () => async (dispatch) => {
    try {
        const response = await axios({
            url: BASE_URL + '/cities',
            validateStatus: status => status < 400 
        });
        dispatch({ type: 'LOAD_FORM', payload: response.data });
    } catch (e) {
        if (e.response && e.response.status < 400) {
            dispatch({ type: 'LOAD_FORM', payload: e.response.data })
        } else {
            console.error('Error occurred', e.message);
        }
        

    }
};

