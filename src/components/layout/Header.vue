<template>
    <header>
        <Logo />

        <RouterLink to="/profile">
            Profile
        </RouterLink>

        <button class="theme-btn" @click="themeStore.toggleTheme">
            🌙
        </button>
    </header>
</template>

<script setup>
import Logo from "../common/Logo.vue"
import { useThemeStore } from '../../stores/themeStore'

const themeStore = useThemeStore()

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