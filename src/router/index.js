import Vue from 'vue';
import Router from 'vue-router';
import Search from '@/pages/search';
import Articles from '@/pages/articles';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Search',
            component: Search,
        },
        {
            path: '/search',
            name: 'Search',
            component: Search,
        },
        {
            path: '/articles',
            name: 'Articles',
            component: Articles,
        },
    ],
});
