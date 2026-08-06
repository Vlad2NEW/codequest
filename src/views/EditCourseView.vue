<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCourseStore } from '../stores/courseStore'

const route = useRoute()
const router = useRouter()

const courseStore = useCourseStore()

const course = computed(() =>
    courseStore.courses.find(
        course => course.id === Number(route.params.id)
    )
)

const title = ref('')
const level = ref('Beginner')
const description = ref('')


watch(
    course,
    (value) => {
        if (value) {
            title.value = value.title
            level.value = value.level
            description.value = value.description
        }
    },
    { immediate: true }
)


function save() {
    if (!course.value) {
        return
    }

    courseStore.updateCourse(
        course.value.id,
        {
            title: title.value,
            level: level.value,
            description: description.value
        }
    )

    router.push(`/courses/${course.value.id}`)
}
</script>


<template>
    <div v-if="course">

        <h1>Редагувати курс</h1>

        <form class="form" @submit.prevent="save">

            <input
                v-model="title"
                type="text"
                placeholder="Назва курсу"
            >


            <select v-model="level">

                <option value="Beginner">
                    Beginner
                </option>

                <option value="Advanced">
                    Advanced
                </option>

            </select>


            <textarea
                v-model="description"
                placeholder="Опис курсу"
            ></textarea>


            <div class="actions">

                <button>
                    Зберегти
                </button>


                <button
                    type="button"
                    @click="router.back()"
                >
                    Назад
                </button>

            </div>

        </form>

    </div>


    <div v-else>
        <h1>Course not found</h1>
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


.actions {
    display: flex;
    gap: 15px;
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