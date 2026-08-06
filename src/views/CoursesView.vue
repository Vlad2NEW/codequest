<script setup>
import CourseCard from '../components/courses/CourseCard.vue'
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'

import { useCourseStore } from '../stores/courseStore'


const courseStore = useCourseStore()

const { courses } = storeToRefs(courseStore)


const search = ref('')

const selectedLevel = ref('all')

const sort = ref('default')



const filteredCourses = computed(() => {

    let result = [...courses.value]


    // пошук
    if (search.value) {

        result = result.filter(course =>
            course.title
                .toLowerCase()
                .includes(search.value.toLowerCase())
        )

    }


    // фільтр рівня
    if (selectedLevel.value !== 'all') {

        result = result.filter(course =>
            course.level === selectedLevel.value
        )

    }


    // сортування

    if (sort.value === 'progress') {

        result.sort(
            (a, b) => b.progress - a.progress
        )

    }


    if (sort.value === 'title') {

        result.sort(
            (a, b) =>
                a.title.localeCompare(b.title)
        )

    }


    return result

})

</script>


<template>

    <h1>Курси</h1>


    <div class="filters">


        <input v-model="search" type="text" placeholder="Пошук курсу..." class="course-search">


        <select v-model="selectedLevel">

            <option value="all">
                Всі рівні
            </option>

            <option value="Beginner">
                Beginner
            </option>

            <option value="Advanced">
                Advanced
            </option>

        </select>


        <select v-model="sort">

            <option value="default">
                Без сортування
            </option>

            <option value="progress">
                За прогресом
            </option>

            <option value="title">
                За назвою
            </option>

        </select>


    </div>



    <div v-if="filteredCourses.length" class="courses">

        <CourseCard v-for="course in filteredCourses" :key="course.id" :course="course" />

    </div>


    <p v-else>
        Курси не знайдено
    </p>


</template>



<style scoped>
.filters {

    display: flex;

    gap: 15px;

    margin-bottom: 30px;

}


.course-search,
select {

    padding: 10px 15px;

    border: 1px solid #ddd;

    border-radius: 8px;

    font-size: 16px;

}


.course-search {

    width: 300px;

}



.courses {

    display: flex;

    flex-wrap: wrap;

    gap: 20px;

}
</style>