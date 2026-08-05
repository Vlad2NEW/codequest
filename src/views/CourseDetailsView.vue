<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const courseId = route.params.id

const courses = [
    {
        id: 1,
        title: "Vue.js",
        level: "Beginner",
        progress: 40,
        description: "Vue 3, компоненти, router"
    },
    {
        id: 2,
        title: "JavaScript",
        level: "Advanced",
        progress: 70,
        description: "JS advanced concepts"
    }
]

const course = courses.find(course => course.id === Number(courseId))
</script>

<template>
    <div v-if="course">
        <h1>{{ course.title }}</h1>
        <p>Level: {{ course.level }}</p>
        <p>{{ course.description }}</p>
    </div>

    <div v-else>
        <h1>Course not found</h1>
    </div>
</template>