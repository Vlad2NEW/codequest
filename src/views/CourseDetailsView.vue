<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCourseStore } from '../stores/courseStore'
import ProgressBar from '../components/common/ProgressBar.vue'

const route = useRoute()
const courseStore = useCourseStore()

const course = computed(() =>
    courseStore.courses.find(
        course => course.id === Number(route.params.id)
    )
)
</script>

<template>
    <div v-if="course">
        <h1>{{ course.title }}</h1>

        <p>Level: {{ course.level }}</p>

        <ProgressBar :progress="course.progress" />

        <p>{{ course.description }}</p>
    </div>

    <div v-else>
        <h1>Course not found</h1>
    </div>

    <button @click="courseStore.updateProgress(course.id, course.progress + 10)">
    +10%
</button>
</template>