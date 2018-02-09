<template>
    <div class="p-search">
        <div class="article-search">
            <el-input placeholder="请输入书名" prefix-icon="el-icon-search" v-model="name">
                <el-button slot="append">开始搜索</el-button>
            </el-input>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
            };
        },
    };
</script>

<style lang="less">
    .p-search {
        .article-search {
            width: 460px;
            margin: 40px auto;
        }
    }
</style>
