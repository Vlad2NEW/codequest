<script setup>
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
</script>

<template>
    <Header />

    <div class="layout">
        <Sidebar />

        <main>
            <slot />
        </main>
    </div>
</template>

<style scoped>
.layout {
    display: flex;
}

main {
    flex: 1;
    padding: 20px;
}
</style>