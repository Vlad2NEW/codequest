import {createRouter, createWebHistory} from 'vue-router';

import HomeView from '../views/HomeView.vue';
import CoursesView from '../views/CoursesView.vue';
import ProfileView from '../views/ProfileView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            component: HomeView
        },
        {
            path: '/courses',
            component: CoursesView
        },
        {
            path:'/profile',
            component: ProfileView
        },
        {
            path:'/404',
            component: NotFoundView
        }
    ]
})

export default router;