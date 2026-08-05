<template>
    <h1>Курси</h1>


    <input type="text" v-model="search" placeholder="Пошук курсу..." class="course-search">
    <div v-if="filteredCourses.length" class="courses">
        <CourseCard v-for="course in filteredCourses" :key="course.id" :course="course" />
    </div>

    <p v-else>
        Курси не знайдено
    </p>

</template>

<script setup>
import CourseCard from '../components/courses/CourseCard.vue'
import { getCourses } from '../services/courses'
import { ref, computed } from 'vue'

const courses = getCourses()
const search = ref('')

const filteredCourses = computed(() => {
    return courses.filter(course =>
        course.title.toLowerCase().includes(search.value.toLowerCase())
    )
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
</style>