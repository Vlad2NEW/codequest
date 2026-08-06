<script setup>

import { ref } from 'vue'
import { storeToRefs } from 'pinia'


import { useAuthStore } from '../stores/authStore'
import { useCourseStore } from '../stores/courseStore'



const authStore = useAuthStore()

const courseStore = useCourseStore()



const { user } = storeToRefs(authStore)



const {
    courses,
    completedCourses,
    averageProgress

} = storeToRefs(courseStore)



const name = ref(
    user.value?.name || ''
)



function saveProfile() {


    if (!name.value.trim()) {

        return

    }



    authStore.updateUser({

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
                {{ user.email }}
            </p>


            <p>
                Зареєстрований:
                {{ user.joined }}
            </p>


        </div>


    </div>




    <div class="edit">


        <input
            v-model="name"
            placeholder="Нове ім'я"
        >


        <button @click="saveProfile">

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

    max-width: 800px;

}



.user-card {

    display:flex;

    align-items:center;

    gap:20px;

    margin-bottom:30px;

}



.avatar {

    width:80px;

    height:80px;

    border-radius:50%;

    background:#333;

    color:white;

    display:flex;

    align-items:center;

    justify-content:center;

    font-size:32px;

}



.edit {

    display:flex;

    gap:15px;

    margin-bottom:40px;

}



input {

    padding:12px 15px;

    border:1px solid #ddd;

    border-radius:8px;

}



button {

    padding:12px 20px;

    border:none;

    border-radius:8px;

    cursor:pointer;

}



.stats {

    display:flex;

    gap:20px;

}



.card {

    width:150px;

    padding:20px;

    border:1px solid #ddd;

    border-radius:12px;

    text-align:center;

}


</style>