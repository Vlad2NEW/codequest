import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useAuthStore } from './authStore'


export const useProgressStore = defineStore('progress', () => {


    const authStore = useAuthStore()


    const progressList = ref(
        JSON.parse(
            localStorage.getItem('progress')
        ) || []
    )



    function saveProgress() {

        localStorage.setItem(
            'progress',
            JSON.stringify(progressList.value)
        )

    }





    function getProgress(courseId) {


        if (!authStore.user) {

            return 0

        }



        const item = progressList.value.find(

            progress =>

                progress.userId === authStore.user.id &&

                progress.courseId === courseId

        )



        return item
            ? item.progress
            : 0

    }





    function updateProgress(courseId, value) {


        if (!authStore.user) {

            return

        }



        let item = progressList.value.find(

            progress =>

                progress.userId === authStore.user.id &&

                progress.courseId === courseId

        )



        if (!item) {


            item = {

                userId: authStore.user.id,

                courseId,

                progress: 0

            }


            progressList.value.push(item)

        }





        item.progress = Math.min(

            Math.max(value, 0),

            100

        )



        saveProgress()

    }







    function resetProgress(courseId) {


        updateProgress(
            courseId,
            0
        )

    }





    const completedCourses = computed(() => {


        if (!authStore.user) {

            return []

        }



        return progressList.value.filter(

            item =>

                item.userId === authStore.user.id &&

                item.progress === 100

        )


    })





    function clearProgress() {


        progressList.value = []


        localStorage.removeItem(
            'progress'
        )


    }





    return {


        progressList,

        getProgress,

        updateProgress,

        resetProgress,

        completedCourses,

        clearProgress


    }


})