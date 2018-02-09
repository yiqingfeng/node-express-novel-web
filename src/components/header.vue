<template>
    <div class="p-header">
        <div class="head_left">
            <i class="head_icon"></i>
            <h1 class="head_title">{{title}}</h1>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
        },
    };
</script>

<style lang="less">
    .p-header {
        height: 50px;
        padding: 0 20px;
        color: #666;
        line-height: 50px;
        background-color: #f4f6fc;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
        .head_icon {
            display: inline-block;
            width: 30px;
            height: 30px;
            margin-right: 14px;
            background: url(../assets/images/logo.png) center/contain no-repeat;
            vertical-align: middle;
        }
        .head_title {
            display: inline-block;
            font-size: 14px;
        }
    }
</style>
