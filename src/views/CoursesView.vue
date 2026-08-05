<template>
    <h1>Курси</h1>

    
    <div class="courses">
        <CourseCard v-for="course in courses" :key="course.id" :course="course" />
    </div>

</template>

<script setup>
import CourseCard from '../components/courses/CourseCard.vue'

const courses = [
    {
        id: 1,
        title: "Vue.js",
        level: "Beginner",
        progress: 40
    },
    {
        id: 2,
        title: "JavaScript",
        level: "Advanced",
        progress: 70
    }
]
</script>

<style scoped>
.courses {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
</style>