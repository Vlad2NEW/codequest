import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import CoursesView from '../views/CoursesView.vue';
import ProfileView from '../views/ProfileView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import CourseDetailsView from '../views/CourseDetailsView.vue'
import AddCourseView from '../views/AddCourseView.vue'

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/courses',
            name: 'courses',
            component: CoursesView
        },
        {
            path: '/profile',
            name: 'profile',
            component: ProfileView
        },
        {
            path: '/courses/:id',
            name: 'course-details',
            component: CourseDetailsView
        },
        {
            path: '/add-course',
            name: 'add-course',
            component: AddCourseView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundView
        }
    ]
})

export default router;