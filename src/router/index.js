import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/authStore'

import HomeView from '../views/HomeView.vue';
import CoursesView from '../views/CoursesView.vue';
import ProfileView from '../views/ProfileView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import CourseDetailsView from '../views/CourseDetailsView.vue'
import AddCourseView from '../views/AddCourseView.vue'
import EditCourseView from '../views/EditCourseView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterView
        },
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
            path: '/courses/:id/edit',
            name: 'edit-course',
            component: EditCourseView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundView
        }
    ]
})



router.beforeEach((to) => {


    const authStore = useAuthStore()


    const privatePages = [
        'profile',
        'add-course',
        'edit-course'
    ]


    if (
        privatePages.includes(to.name)
        &&
        !authStore.isAuth
    ) {

        return '/login'

    }


})
export default router;