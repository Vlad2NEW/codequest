<script setup>
import ProgressBar from '../common/ProgressBar.vue';

defineProps({
    course: Object
})
</script>

<template>
    <RouterLink :to="`/courses/${course.id}`" class="card">
        <h3>{{ course.title }}</h3>
        <p>{{ course.level }}</p>
        <ProgressBar :progress="course.progress" />

    </RouterLink>
</template>

<style scoped>
.card {
    display: block;

    padding: 20px;

    border: 1px solid #ddd;
    border-radius: 12px;

    width: 250px;

    text-decoration: none;
    color: inherit;
}
.card:hover {
    transform: translateY(-3px);
    transition: transform 0.2s;
}
</style>