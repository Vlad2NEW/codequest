<script setup>

import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useCourseStore } from '../stores/courseStore'
import { useProgressStore } from '../stores/progressStore'

import ProgressBar from '../components/common/ProgressBar.vue'


const route = useRoute()
const router = useRouter()


const courseStore = useCourseStore()
const progressStore = useProgressStore()



const course = computed(() =>

    courseStore.courses.find(

        course =>

            course.id === Number(route.params.id)

    )

)



const progress = computed(() => {


    if (!course.value) {

        return 0

    }


    return progressStore.getProgress(
        course.value.id
    )

})





function increaseProgress() {


    if (course.value) {


        progressStore.updateProgress(

            course.value.id,

            progress.value + 10

        )

    }

}





function reset() {


    if (course.value) {


        progressStore.resetProgress(

            course.value.id

        )

    }

}





function removeCourse() {


    if (course.value) {


        courseStore.deleteCourse(

            course.value.id

        )


        router.push('/courses')

    }

}





function editCourse() {


    router.push(

        `/courses/${course.value.id}/edit`

    )

}


</script>



<template>


    <div v-if="course" class="course-details">


        <h1>
            {{ course.title }}
        </h1>



        <p class="level">

            Рівень:
            {{ course.level }}

        </p>




        <ProgressBar :progress="progress" />




        <p class="description">

            {{ course.description }}

        </p>




        <div class="actions">


            <button @click="increaseProgress">

                +10%

            </button>




            <button @click="reset">

                Скинути прогрес

            </button>




            <button @click="editCourse">

                Редагувати

            </button>




            <button class="delete" @click="removeCourse">

                Видалити

            </button>



        </div>


    </div>



    <div v-else>

        <h1>
            Course not found
        </h1>

    </div>


</template>




<style scoped>
.course-details {

    max-width: 700px;

}



.level {

    color: #666;

}



.description {

    margin-top: 25px;

    line-height: 1.6;

}



.actions {


    display: flex;

    gap: 15px;

    margin-top: 30px;

    flex-wrap: wrap;


}



button {


    padding: 12px 20px;

    border: none;

    border-radius: 8px;

    cursor: pointer;

    background: #333;

    color: white;


}



button:hover {

    opacity: 0.8;

}



.delete {

    background: #c0392b;

}
</style>