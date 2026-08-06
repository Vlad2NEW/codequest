<script setup>
import { storeToRefs } from 'pinia'
import { useCourseStore } from '../stores/courseStore'

const courseStore = useCourseStore()

const {
    courses,
    completedCourses,
    averageProgress
} = storeToRefs(courseStore)


const recentCourses = courses.value.slice(-3).reverse()

</script>


<template>

    <div class="dashboard">

        <h1>
            CodeQuest Dashboard
        </h1>


        <div class="stats">

            <div class="card">

                <h2>
                    {{ courses.length }}
                </h2>

                <p>
                    Всього курсів
                </p>

            </div>


            <div class="card">

                <h2>
                    {{ completedCourses.length }}
                </h2>

                <p>
                    Завершено
                </p>

            </div>


            <div class="card">

                <h2>
                    {{ averageProgress }}%
                </h2>

                <p>
                    Середній прогрес
                </p>

            </div>


        </div>



        <h2>
            Останні курси
        </h2>


        <div class="courses">

            <RouterLink v-for="course in recentCourses" :key="course.id" :to="`/courses/${course.id}`" class="course">

                <h3>
                    {{ course.title }}
                </h3>


                <p>
                    {{ course.level }}
                </p>


                <p>
                    Прогрес:
                    {{ course.progress }}%
                </p>


            </RouterLink>

        </div>


    </div>

</template>



<style scoped>
.dashboard {

    padding: 20px;

}


.stats {

    display: flex;

    gap: 20px;

    margin: 30px 0;

}



.card {

    width: 200px;

    padding: 25px;

    border-radius: 12px;

    border: 1px solid #ddd;

    text-align: center;

}



.card h2 {

    margin: 0;

    font-size: 36px;

}



.card p {

    margin-top: 10px;

}



.courses {

    display: flex;

    flex-wrap: wrap;

    gap: 20px;

}



.course {

    width: 220px;

    padding: 20px;

    border: 1px solid #ddd;

    border-radius: 12px;

    text-decoration: none;

    color: inherit;

}



.course:hover {

    transform: translateY(-3px);

}
</style>