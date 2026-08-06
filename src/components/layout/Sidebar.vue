<template>
    <aside>
        <nav>
            <MenuItem :item="item" v-for="item in menuItems" :key="item.path" />
        </nav>
    </aside>
</template>

<script setup>
import MenuItem from '../common/MenuItem.vue';
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
    },
    {
    title: "Додати курс",
    path: "/add-course"
}
];

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
</style>