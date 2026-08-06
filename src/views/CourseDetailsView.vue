<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCourseStore } from '../stores/courseStore'
import ProgressBar from '../components/common/ProgressBar.vue'
import { useToastStore } from '../stores/toastStore'

const toast = useToastStore()

const route = useRoute()
const router = useRouter()
const courseStore = useCourseStore()

const course = computed(() =>
    courseStore.courses.find(
        course => course.id === Number(route.params.id)
    )
)

const reset = () => {
    if (course.value) {
        courseStore.resetProgress(course.value.id)

        toast.show('Прогрес скинуто')
    }
}


const increaseProgress = () => {
    if (course.value) {
        courseStore.updateProgress(
            course.value.id,
            course.value.progress + 10
        )

        toast.show('Прогрес оновлено')
    }
}


const removeCourse = () => {

    if (course.value) {

        const confirmDelete = confirm(
            'Видалити цей курс?'
        )

        if (!confirmDelete) {
            return
        }


        courseStore.deleteCourse(course.value.id)

        toast.show('Курс видалено')

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

            <button @click="router.push(`/courses/${course.id}/edit`)">
                Редагувати
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