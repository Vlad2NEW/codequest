<template>
    <header>
        <Logo />

        <RouterLink to="/profile">
            Profile
        </RouterLink>

        <button class="theme-btn" @click="themeStore.toggleTheme">
            🌙
        </button>


        <button v-if="authStore.isAuth" @click="logout">

            Вийти

        </button>


        <RouterLink v-else to="/login">

            Увійти

        </RouterLink>
    </header>
</template>

<script setup>
import Logo from "../common/Logo.vue"
import { useThemeStore } from '../../stores/themeStore'
import { useAuthStore } from '../../stores/authStore'
import { useRouter } from 'vue-router'

const router = useRouter()

const authStore = useAuthStore()

const themeStore = useThemeStore()

function logout() {

    authStore.logout()

    router.push('/login')

}

</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 15px 30px;
    border-bottom: 1px solid #ddd;
}

.theme-btn {

    padding: 8px 15px;

    border: none;

    border-radius: 8px;

    cursor: pointer;

    font-size: 20px;

}
</style>