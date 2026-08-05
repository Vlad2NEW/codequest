<script setup>
import { useRoute } from 'vue-router';
defineProps({
    item: Object
})

const route = useRoute();

function isActive(path) {
    return path === route.path;
}
</script>

<template>
    <RouterLink :class="{ active: isActive(item.path) }" :to="item.path">{{ item.title }}</RouterLink>
</template>

<style scoped>
a {
    padding: 10px 15px;

    text-decoration: none;
    border-radius: 8px;

    transition: background-color 0.2s;
}

a:hover {
    background-color: #f0f0f0;
}

.active {
    font-weight: bold;
}
</style>