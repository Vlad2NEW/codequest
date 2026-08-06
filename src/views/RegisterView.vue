<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useAuthStore } from '../stores/authStore'


const router = useRouter()

const authStore = useAuthStore()


const name = ref('')
const email = ref('')
const password = ref('')

const error = ref('')



function register() {


    if (
        !name.value ||
        !email.value ||
        !password.value
    ) {

        error.value = 'Заповніть всі поля'

        return

    }



    const result = authStore.register(
        name.value,
        email.value,
        password.value
    )



    if (!result.success) {

        error.value = result.message

        return

    }



    router.push('/login')


}


</script>


<template>


    <div class="auth">


        <h1>
            Реєстрація
        </h1>



        <p v-if="error">
            {{ error }}
        </p>



        <input v-model="name" placeholder="Ім'я" />



        <input v-model="email" placeholder="Email" />



        <input v-model="password" type="password" placeholder="Пароль" />



        <button @click="register">
            Створити акаунт
        </button>



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

    border: none;

    background: #333;

    color: white;

    cursor: pointer;

}
</style>