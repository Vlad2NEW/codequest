<script setup>
import { useRoute } from 'vue-router'
import { getCourseById } from '../services/courses'

const route = useRoute()

const courseId = route.params.id
const course = getCourseById(courseId)
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