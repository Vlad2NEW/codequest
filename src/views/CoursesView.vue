<template>
    <h1>Курси</h1>

    
    <div class="courses">
        <CourseCard v-for="course in courses" :key="course.id" :course="course" />
    </div>

</template>

<script setup>
import CourseCard from '../components/courses/CourseCard.vue'
import { courses } from '../services/courses'
</script>

<style scoped>
.courses {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
</style>