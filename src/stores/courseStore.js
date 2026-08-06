import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

import { courses as initialCourses } from '../services/courses'
import {
    saveCourses,
    getStoredCourses
} from '../services/storage'



export const useCourseStore = defineStore(
    'course',
    () => {


        const courses = ref(

            getStoredCourses()
            ||
            initialCourses

        )





        const completedCourses = computed(() => {


            return courses.value.filter(

                course =>
                    course.progress === 100

            )


        })





        const averageProgress = computed(() => {


            if (!courses.value.length) {

                return 0

            }



            const total =
                courses.value.reduce(

                    (sum, course) =>

                        sum +
                        (course.progress || 0),

                    0

                )



            return Math.round(

                total /
                courses.value.length

            )


        })







        function addCourse(course) {


            courses.value.push({

                id: Date.now(),

                title: course.title,

                description: course.description,

                level: course.level

            })



            saveCourses(
                courses.value
            )


        }







        function updateCourse(id, data) {


            const course =
                courses.value.find(

                    course =>
                        course.id === id

                )



            if (course) {


                Object.assign(

                    course,

                    data

                )


                saveCourses(
                    courses.value
                )

            }


        }







        function deleteCourse(id) {


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

            completedCourses,

            averageProgress,

            addCourse,

            updateCourse,

            deleteCourse


        }


    })