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

const reset = () => {
    if (course.value) {
        courseStore.resetProgress(course.value.id)
    }
}

const increaseProgress = () => {
    if (course.value) {
        courseStore.updateProgress(
            course.value.id,
            course.value.progress + 10
        )
    }
}

const removeCourse = () => {
    if (course.value) {
        courseStore.deleteCourse(course.value.id)

        router.push('/courses')
    }
}
</script>

<template>
    <div v-if="course">
        <h1>{{ course.title }}</h1>

        <p>Level: {{ course.level }}</p>

        <ProgressBar :progress="course.progress" />

        <p>{{ course.description }}</p>

        <div class="actions">
            <button @click="increaseProgress">
                +10%
            </button>

            <button @click="reset">
                Скинути прогрес
            </button>

            <button @click="removeCourse">
                Видалити курс
            </button>
        </div>

    </div>

    <div v-else>
        <h1>Course not found</h1>
    </div>
</template>

<style scoped>
.actions {
    display: flex;
    gap: 20px;
    margin-top: 20px;
}

button {
    padding: 10px 20px;

    border: none;
    border-radius: 8px;

    cursor: pointer;
}

button:hover {
    opacity: 0.6;
}
</style>