<template>
    <h1>Курси</h1>


    <input type="text" v-model="search" placeholder="Пошук курсу..." class="course-search">

    <div class="filters">
        <button v-for="level in levels" :key="level" @click="selectedLevel = level"
            :class="{ active: selectedLevel === level }">
            {{ level }}
        </button>
    </div>

    <div v-if="filteredCourses.length" class="courses">
        <CourseCard v-for="course in filteredCourses" :key="course.id" :course="course" />
    </div>

    <p v-else>
        Курси не знайдено
    </p>

</template>

<script setup>
import CourseCard from '../components/courses/CourseCard.vue'
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'

import { useCourseStore } from '../stores/courseStore'

const courseStore = useCourseStore()

const { courses } = storeToRefs(courseStore)

const search = ref('')
const selectedLevel = ref('All')
const levels = [
    'All',
    'Beginner',
    'Advanced'
]

const filteredCourses = computed(() => {
    return courses.value.filter(course => {

        const matchesSearch =
            course.title
                .toLowerCase()
                .includes(search.value.toLowerCase())

        const matchesLevel =
            selectedLevel.value === 'All' ||
            course.level === selectedLevel.value

        return matchesSearch && matchesLevel
    })
})
</script>

<style scoped>
.courses {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.course-search {
    padding: 10px 15px;
    width: 300px;

    border: 1px solid #ddd;
    border-radius: 8px;

    margin-bottom: 30px;
}

.course-search:focus {
    outline: none;
    border-color: #333;
}

.filters {
    display: flex;
    gap: 10px;

    margin-bottom: 30px;
}

.filters button {
    padding: 8px 15px;

    border: 1px solid #ddd;
    border-radius: 8px;

    cursor: pointer;
}

.filters .active {
    background: #333;
    color: white;
}
</style>