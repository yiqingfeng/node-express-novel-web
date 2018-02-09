<template>
    <nav :class="{'p-menu': true, 'unfold': unfold}">
        <ul class="nav-list">
            <li v-for="(menu, index) in menus" :key="index">
                <router-link class="nav-item" :to="menu.path">
                    <el-icon class="menu-icon" :name="menu.icon"></el-icon>
                    <span class="nav-title">{{menu.title}}</span>
                </router-link>
            </li>
        </ul>
        <div class="nav-toggle">
            <a href="javascript:;" class="nav-icon" @click="toggle">
                <el-icon name="menu"></el-icon>
            </a>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                unfold: false,
                menus: [
                    {
                        title: '搜索',
                        icon: 'search',
                        path: '/search',
                    },
                    {
                        title: '书籍',
                        icon: 'tickets',
                        path: '/articles',
                    },
                ],
            };
        },
        methods: {
            toggle() {
                this.unfold = !this.unfold;
            },
        },
    };
</script>

<style lang="less">
    .p-menu {
        position: relative;
        width: 200px;
        height: 100%;
        background-color: #2d3037;
        transition: .4s ease-in .1s;
        &.unfold {
            width: 60px;
            // transition: .4s step-end .1s;
            .nav-title {
                display: none;
            }
            // .nav-toggle {
            //     text-align: center;
            // }
        }
        .nav-list {
            list-style-type: none;
        }
        .nav-item {
            display: flex;
            padding: 10px 10px 10px 20px;
            line-height: 20px;
            color: #fff;
            text-decoration: none;
            &:hover,
            &.router-link-active {
                color: #fff;
                background-color: #454e57;
            }
        }
        .menu-icon {
            width: 20px;
            padding-top: 2px;
        }
        .nav-title {
            margin-left: 10px;
            font-size: 12px;
        }
        .nav-toggle {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 40px;
            background-color: #21262c;
            text-align: right;
        }
        .nav-icon {
            line-height: 40px;
            color: #5f7281;
            text-align: center;
            i {
                width: 40px;
            }
        }
    }
</style>
