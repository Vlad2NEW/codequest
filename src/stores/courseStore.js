import { defineStore } from 'pinia'
import { courses } from '../services/courses'
import { saveCourses, getStoredCourses } from '../services/storage'

export const useCourseStore = defineStore('course', {
    state: () => ({
        courses: getStoredCourses() || courses
    }),

    getters: {
        completedCourses(state) {
            return state.courses.filter(course => course.progress === 100)
        },

        averageProgress(state) {
            if (!state.courses.length) {
                return 0
            }

            const total = state.courses.reduce(
                (sum, course) => sum + course.progress,
                0
            )

            return Math.round(total / state.courses.length)
        }
    },

    actions: {
        updateProgress(id, progress) {
            const course = this.courses.find(course => course.id === id)

            if (course) {
                course.progress = Math.min(Math.max(progress, 0), 100)

                saveCourses(this.courses)
            }
        }
    },

    
})

