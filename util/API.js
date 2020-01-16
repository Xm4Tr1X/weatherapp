const axios = require('axios');
const OAuth = require('./OAuth');
const url = 'https://weather-ydn-yql.media.yahoo.com';
const method = 'GET';

const axiosConfig = (params) => {
    const OAuthDetails = OAuth(method, url + '/forecastrss', params);
    return {
        method,
        url: url + '/forecastrss',

        headers: {
            'Authorization': OAuthDetails.authHeader,
            'X-Yahoo-App-Id': OAuthDetails.appId
        },
        params: {
            ...params
        },
        validateStatus: (status) => {
            return status < 400;
        }
    }
};


module.exports = async (params) => {
    try {
        console.log('axios params =>', axiosConfig(params))
        const response = await axios(axiosConfig(params));
        console.log('Response =>', response.data);
        return response.data;
    } catch (e) {
        console.error(e.message);
        if(e.response){
            console.log(e.response.data);
        }
        return 0
    }
};