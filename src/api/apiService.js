import http from './httpClient';

const baseUrl = '/novel';

const apiService = {
    // 添加书籍类型
    addBookType(requestConfig) {
        return http.post('/data/booktype/add', requestConfig);
    },
    // 获取书籍来源
    getBookSources() {
        return http.get(`${baseUrl}/data/getAllBookSources`);
        // return new Promise((resolve) => {
        //     resolve([
        //         {
        //             id: 2,
        //             name: 'test',
        //         },
        //         {
        //             id: 3,
        //             name: '12312312',
        //         },
        //     ]);
        // });
    },
    // 添加书籍信息
    addBook(data) {
        return http.post(`${baseUrl}/data/addBook`, data);
    },
    // 获取书籍列表
    getBookList(data) {
        return http.get(`${baseUrl}/data/getBooks`, data);
        // return new Promise((resolve) => {
        //     resolve({
        //         errCode: 0,
        //         data: [
        //             {
        //                 id: 2,
        //                 name: 'test',
        //                 author: 'daiq',
        //                 url: 'http://www.fs.com/',
        //                 source: '起点文学',
        //                 update_time: 1521917576597,
        //                 remark: '测试',
        //             },
        //             {
        //                 id: 3,
        //                 name: '12312312',
        //                 author: 'daiq',
        //                 url: 'http://www.fs.com/',
        //                 source: '起点文学',
        //                 update_time: 1521917576597,
        //             },
        //         ],
        //     });
        // });
    },
};

export default apiService;
