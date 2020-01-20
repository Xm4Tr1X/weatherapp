const signature = require('oauth-signature');
const {appId, consumerKey, consumerSecret} = require('../config');

const nonce = () => Math.random().toString(36).substring(2)
const timeStamp = () => parseInt(new Date().getTime() / 1000).toString();

const OAuth = (method, url, query) => {
    const oauthConfig = {
        'oauth_consumer_key': consumerKey,
        'oauth_nonce': nonce(),
        'oauth_signature_method': 'HMAC-SHA1',
        'oauth_timestamp': timeStamp(),
        'oauth_version': '1.0'
    };
    oauthConfig['oauth_signature'] = signature.generate(method, url, { ...oauthConfig, ...query }, consumerSecret)
    const authHeader = 'OAuth ' + Object.keys(oauthConfig).map((k) => {
        return [k + '="' + oauthConfig[k] + '"'];
    }).join(',');
    return {
        authHeader,
        appId,
        oauthConfig
    }
}

module.exports = OAuth;