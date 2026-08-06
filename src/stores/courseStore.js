import { defineStore } from 'pinia'
import { courses } from '../services/courses'

export const useCourseStore = defineStore('course', {
    state: () => ({
        courses: courses
    }),

    getters: {
        completedCourses(state) {
            return state.courses.filter(course => course.progress === 100)
        }
    },

    actions: {
        updateProgress(id, progress) {
            const course = this.courses.find(course => course.id === id)

            if (course) {
                course.progress = Math.min(Math.max(progress, 0), 100)
            }
        }
    }
})