<template>
    <div class="p-articles">
        <el-table
            class="articles"
            stripe
            border
            height="250"
            empty-text="errMsg"
            v-loading="!readyData"
            :data="tableData">
            <el-table-column
                prop="name"
                label="书名"
                sortable>
            </el-table-column>
            <el-table-column
                prop="author"
                label="作者"
                sortable>
            </el-table-column>
            <el-table-column
                prop="url"
                label="目录地址">
            </el-table-column>
            <el-table-column
                prop="source"
                label="所属来源"
                sortable>
            </el-table-column>
            <el-table-column
                prop="update_time"
                label="日期"
                sortable
                width="180">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.update_time | formateDate }}</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="remark"
                label="备注"
                sortable>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import ApiService from '../api/apiService';

    export default {
        data() {
            return {
                readyData: false,
                errCode: 0,
                errMsg: '暂无数据',
                tableData: null,
            };
        },
        mounted() {
            ApiService.getBookList()
                .then((res) => {
                    this.readyData = true;
                    if (res.errCode === 0) {
                        if (!res.data || !res.data.length) {
                            this.errMsg = '暂无数据';
                            return;
                        }
                        this.tableData = res.data;
                    } else {
                        this.errMsg = res.errMsg;
                    }
                })
                .catch(() => {
                    this.$notify.error({
                        title: '网络错误',
                        message: '请先检查您的网络，稍后重试！',
                    });
                });
        },
        filters: {
            formateDate(timestamp) {
                const date = new Date(timestamp);
                let months = date.getMonth() + 1;
                let days = date.getDate();
                months = months < 10 ? `0${months}` : months;
                days = days < 10 ? `0${days}` : days;
                return `${date.getFullYear()}-${months}-${days}`;
            },
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
