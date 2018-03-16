import http from './httpClient';

const apiService = {
    // 添加书籍类型
    addBookType(requestConfig) {
        return http.post('/data/booktype/add', requestConfig);
    },
};

export default apiService;
