<template>
    <div id="app">
        <p-header class="p-head" title="属于你自己的个人书库"></p-header>
        <article class="p-content">
            <aside class="p-aside">
                <p-menus></p-menus>
            </aside>
            <section class="p-section">
                <router-view />
            </section>
        </article>
    </div>
</template>

<script>
    import PHeader from './components/header';
    import PMenus from './components/menus';

    export default {
        name: 'App',
        components: {
            PHeader,
            PMenus,
        },
    };
</script>

<style lang="less">
    @import url("./assets/styles/common.less");
    @height: 50px;

    html,
    body,
    #app {
        height: 100%;
    }
    .p-head {
        position: absolute;
        box-sizing: border-box;
        top: 0;
        left: 0;
        width: 100%;
        height: @height;
    }
    .p-content {
        box-sizing: border-box;
        height: 100%;
        padding-top: @height;
    }
    .p-aside {
        float: left;
        height: 100%;
    }
    .p-section {
        height: 100%;
        overflow: hidden;
    }
</style>
