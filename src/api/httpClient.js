import axios from 'axios';

// default config
axios.defaults.timeout = 15000;
axios.defaults.headers['Accept'] = 'application/json'; // eslint-disable-line dot-notation

axios.interceptors.response.use((res) => {
    if (res.status !== 200) {
        return {
            errCode: res.status,
        };
    }
    return res.data;
},  (err) => {
     // 对响应错误做点什么
    return Promise.reject(err);
});

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
