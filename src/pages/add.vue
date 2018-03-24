<template>
    <div class="p-add">
        <el-tabs type="border-card" v-model="activeTab">
            <el-tab-pane label="添加书籍" name="1">
                <el-form :model="book" ref="book" :rules ="bookRules" label-width="80px">
                    <el-form-item label="书籍名称" prop="name">
                        <el-input v-model="book.name"></el-input>
                    </el-form-item>
                    <el-form-item label="作者" prop="author">
                        <el-input v-model="book.author"></el-input>
                    </el-form-item>
                    <el-form-item label="所属来源">
                        <el-select v-model="book.source" placeholder="请选择">
                            <el-option
                                v-for="item in sources"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="目录地址" prop="url">
                        <el-input v-model="book.url"></el-input>
                    </el-form-item>
                    <el-form-item label="备注">
                        <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="添加备注"
                            v-model="book.remark">
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="addBook">立即添加</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <!-- <el-tab-pane label="添加类型" name="2">
                <el-form :model="type" label-width="80px">
                    <el-form-item required label="类型名称">
                        <el-input v-model="type.name" maxlength="20"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="addType">立即添加</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane> -->
        </el-tabs>


    </div>
</template>

<script>
import ApiService from '../api/apiService';

export default {
    data() {
        return {
            activeTab: '1',
            book: {
                name: '',
                author: '',
                source: '',
                url: '',
                remark: '',
            },
            bookRules: {
                name: [
                    { required: true, message: '请输入书籍名称', trigger: 'blur' },
                    { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' },
                ],
                author: [
                    { required: true, message: '请输入书籍作者', trigger: 'blur' },
                    { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' },
                ],
                url: [
                    { required: true, message: '请输入目录地址', trigger: 'blur' },
                    { max: 100, message: '长度不得超过 100 个字符', trigger: 'blur' },
                ],
            },
            sources: null,
            // type: {
            //     name: '',
            // },
        };
    },
    mounted() {
        ApiService.getBookSources()
            .then((res) => {
                if (res.errCode === 0) {
                    this.sources = res.data;
                    this.book.source = res.data[0].id;
                } else {
                    this.$notify.error({
                        message: res.errMsg,
                    });
                }
            })
            .catch(() => {
                this.$notify.error({
                    title: '网络错误',
                    message: '请先检查您的网络，稍后重试！',
                });
            });
    },
    methods: {
        addBook() {
            const book = this.book;
            this.$refs.book.validate((valid) => { // eslint-disable-line
                if (valid) {
                    ApiService.addBook({
                        name: book.name,
                        author: book.author,
                        url: book.url,
                        source_id: book.source,
                        remark: book.remark,
                    }).then((res) => {
                        if (res.errCode === 0) {
                            this.$notify({
                                title: '添加成功',
                                type: 'success',
                            });
                        } else {
                            this.$notify.error({
                                title: '添加错误',
                                message: res.errMsg,
                            });
                        }
                    }).catch(() => {
                        this.$notify.error({
                            title: '网络错误',
                            message: '请先检查您的网络，稍后重试！',
                        });
                    });
                } else {
                    return false;
                }
            });
        },
    },
};
</script>

<style lang="less">
.p-add {
  padding: 30px;
}
</style>
