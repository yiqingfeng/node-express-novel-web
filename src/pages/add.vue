<template>
    <div class="p-add">
        <el-tabs type="border-card" v-model="activeTab">
            <el-tab-pane label="添加书籍" name="1">
                <el-form :model="form" label-width="80px">
                    <el-form-item label="书籍名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="作者">
                        <el-input v-model="form.author"></el-input>
                    </el-form-item>
                    <el-form-item label="类型">
                        <el-radio-group v-model="form.type">
                            <el-radio label="1">线上品牌商赞助</el-radio>
                            <el-radio label="2">线下场地免费</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="添加类型" name="2">
                <el-form :model="type" label-width="80px">
                    <el-form-item required label="类型名称">
                        <el-input v-model="type.name" maxlength="20"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="addType">立即添加</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
        </el-tabs>


    </div>
</template>

<script>
    import ApiService from '../api/apiService';

    export default {
        data() {
            return {
                activeTab: '1',
                form: {
                    name: '',
                    author: '',
                    type: '',
                },
                type: {
                    name: '',
                },
            };
        },
        methods: {
            addType() {
                const name = this.type.name;
                ApiService.addBookType({
                    name,
                }).then((res) => {
                    console.log(res);
                }).catch((err) => {
                    console.log(err);
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
