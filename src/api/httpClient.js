import axios from 'axios';

// default config
axios.defaults.timeout = 15000;
axios.defaults.headers['Accept'] = 'application/json'; // eslint-disable-line dot-notation

const httpClient = {
    get(path, requestConfig) {
        const request = {
            params: requestConfig,
        };
        return axios.get(path, request);
    },
    post(path, requestConfig, options) {
        return axios.post(path, requestConfig, options);
    },
};

export default httpClient;
