<template>
    <div class="p-articles">
        <el-table
            class="articles"
            stripe
            border
            height="250"
            :data="tableData">
            <el-table-column
                prop="date"
                label="日期"
                sortable
                width="180"
            ></el-table-column>
            <el-table-column
                prop="name"
                label="书名"
                sortable
            ></el-table-column>
            <el-table-column
                prop="author"
                label="作者"
                sortable
            ></el-table-column>
            <el-table-column
                prop="date"
                label="类型"
                sortable
            ></el-table-column>
            <el-table-column
                prop="date"
                label="备注"
                sortable
            ></el-table-column>
        </el-table>
        <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [],
            };
        },
    };
</script>

<style lang="less">
    .p-articles {
        padding: 20px;
        .articles {
            width: 100%;
        }
    }
</style>
