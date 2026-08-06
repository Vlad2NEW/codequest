<script setup>

import { ref } from 'vue'
import { storeToRefs } from 'pinia'

import { useUserStore } from '../stores/userStore'
import { useCourseStore } from '../stores/courseStore'


const userStore = useUserStore()
const courseStore = useCourseStore()


const { user } = storeToRefs(userStore)

const {
    courses,
    completedCourses,
    averageProgress
} = storeToRefs(courseStore)


const name = ref(user.value.name)


function save() {

    userStore.updateUser({

        name: name.value,

        avatar: name.value
            .charAt(0)
            .toUpperCase()

    })

}

</script>


<template>

    <div class="profile">


        <div class="user-card">

            <div class="avatar">
                {{ user.avatar }}
            </div>


            <div>

                <h1>
                    {{ user.name }}
                </h1>

                <p>
                    З нами з:
                    {{ user.joined }}
                </p>

            </div>

        </div>



        <div class="form">

            <input v-model="name" placeholder="Ім'я">


            <button @click="save">
                Зберегти
            </button>

        </div>



        <div class="stats">


            <div class="card">

                <h2>
                    {{ courses.length }}
                </h2>

                <p>
                    Курсів
                </p>

            </div>


            <div class="card">

                <h2>
                    {{ completedCourses.length }}
                </h2>

                <p>
                    Завершено
                </p>

            </div>


            <div class="card">

                <h2>
                    {{ averageProgress }}%
                </h2>

                <p>
                    Прогрес
                </p>

            </div>


        </div>


    </div>

</template>


<style scoped>
.profile {

    max-width: 700px;

}


.user-card {

    display: flex;

    align-items: center;

    gap: 20px;

    margin-bottom: 30px;

}


.avatar {

    width: 70px;

    height: 70px;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 50%;

    background: #333;

    color: white;

    font-size: 32px;

}



.form {

    display: flex;

    gap: 15px;

    margin-bottom: 30px;

}


input {

    padding: 10px;

    border-radius: 8px;

    border: 1px solid #ddd;

}


button {

    padding: 10px 20px;

    border: none;

    border-radius: 8px;

    cursor: pointer;

}


.stats {

    display: flex;

    gap: 20px;

}


.card {

    padding: 20px;

    border: 1px solid #ddd;

    border-radius: 12px;

    text-align: center;

    width: 150px;

}
</style>