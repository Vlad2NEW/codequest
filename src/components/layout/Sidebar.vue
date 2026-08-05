<template>
    <aside>
        <nav>
            <RouterLink v-for="item in menuItems" :key="item.path" :to="item.path"
                :class="{ active: isActive(item.path) }">
                {{ item.title }}
            </RouterLink>
        </nav>
    </aside>
</template>

<script setup>
import { useRoute } from 'vue-router';

const menuItems = [
    {
        title: "Головна",
        path: "/"
    },
    {
        title: "Курси",
        path: "/courses"
    },
    {
        title: "Профіль",
        path: "/profile"
    }
];

const route = useRoute();

function isActive(path) {
    return path === route.path;
}
</script>

<style scoped>
aside {
    width: 220px;
    min-height: calc(100vh - 70px);
    padding: 20px;

    border-right: 1px solid #ddd;
}

nav {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

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