<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useAuthStore } from '../stores/authStore'


const router = useRouter()

const authStore = useAuthStore()


const email = ref('')
const password = ref('')

const error = ref('')



function login() {


    const result = authStore.login(
        email.value,
        password.value
    )



    if (!result.success) {

        error.value = result.message

        return

    }



    router.push('/')


}


</script>


<template>


    <div class="auth">


        <h1>
            Вхід
        </h1>



        <p v-if="error">
            {{ error }}
        </p>



        <input v-model="email" placeholder="Email" />



        <input v-model="password" type="password" placeholder="Пароль" />



        <button @click="login">
        Увійти
        </button>



        <p>
            Немає акаунта?
            <RouterLink to="/register">
                Реєстрація
            </RouterLink>
        </p>



    </div>


</template>



<style scoped>
.auth {

    width: 350px;

    display: flex;

    flex-direction: column;

    gap: 15px;

}


input,
button {

    padding: 12px;

    border-radius: 8px;

}


input {

    border: 1px solid #ddd;

}


button {

    background: #333;

    color: white;

    border: none;

    cursor: pointer;

}
</style>