<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCourseStore } from '../stores/courseStore'

const courseStore = useCourseStore()
const router = useRouter()

const title = ref('')
const level = ref('Beginner')
const description = ref('')


function addCourse() {
    if (!title.value.trim()) {
        return
    }

    courseStore.addCourse({
        title: title.value,
        level: level.value,
        description: description.value
    })

    title.value = ''
    level.value = 'Beginner'
    description.value = ''

    router.push('/courses')
}
</script>

<template>
    <div>
        <h1>Додати курс</h1>

        <form class="form" @submit.prevent="addCourse">

            <input v-model="title" type="text" placeholder="Назва курсу">

            <select v-model="level">
                <option value="Beginner">
                    Beginner
                </option>

                <option value="Advanced">
                    Advanced
                </option>
            </select>

            <textarea v-model="description" placeholder="Опис курсу"></textarea>

            <button>
                Додати курс
            </button>

        </form>
    </div>
</template>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    gap: 20px;

    width: 350px;

    padding: 25px;

    border: 1px solid #ddd;
    border-radius: 12px;
}


input,
select,
textarea {
    padding: 12px 15px;

    border: 1px solid #ddd;
    border-radius: 8px;

    font-size: 16px;

    font-family: inherit;
}


textarea {
    min-height: 120px;

    resize: vertical;
}


input:focus,
select:focus,
textarea:focus {
    outline: none;

    border-color: #333;
}


button {
    padding: 12px 20px;

    border: none;
    border-radius: 8px;

    background: #333;
    color: white;

    cursor: pointer;

    transition: opacity 0.2s;
}


button:hover {
    opacity: 0.8;
}
</style>