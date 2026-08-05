<template>
    <header>
        <Logo/>

        <RouterLink to="/profile">
            Profile
        </RouterLink>
    </header>
</template>

<script setup>
import Logo from "../common/Logo.vue"
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 15px 30px;
    border-bottom: 1px solid #ddd;
}
</style>