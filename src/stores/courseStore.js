import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

import { saveCourses, getStoredCourses } from '../services/storage'
import { useAuthStore } from './authStore'


export const useCourseStore = defineStore('course', () => {


    const authStore = useAuthStore()



    const courses = ref(
        getStoredCourses() || []
    )



    const userCourses = computed(() => {


        if (!authStore.user) {

            return []

        }


        return courses.value.filter(
            course =>
                course.userId === authStore.user.id
        )

    })



    const completedCourses = computed(() => {


        return userCourses.value.filter(
            course =>
                course.progress === 100
        )


    })



    const averageProgress = computed(() => {


        if (!userCourses.value.length) {

            return 0

        }



        const total = userCourses.value.reduce(

            (sum, course) =>
                sum + course.progress,

            0

        )



        return Math.round(
            total / userCourses.value.length
        )


    })





    function addCourse(course){


        const newCourse = {

            id: Date.now(),

            ...course,

            progress:0,

            userId:authStore.user.id

        }



        courses.value.push(newCourse)


        saveCourses(
            courses.value
        )

    }





    function updateProgress(id, progress){


        const course = courses.value.find(
            item => item.id === id
        )


        if(course){

            course.progress =
                Math.min(
                    Math.max(progress,0),
                    100
                )


            saveCourses(
                courses.value
            )

        }


    }





    function resetProgress(id){


        updateProgress(id,0)


    }





    function deleteCourse(id){


        courses.value =
            courses.value.filter(
                course =>
                    course.id !== id
            )


        saveCourses(
            courses.value
        )

    }





    return {


        courses,

        userCourses,

        completedCourses,

        averageProgress,

        addCourse,

        updateProgress,

        resetProgress,

        deleteCourse


    }


})