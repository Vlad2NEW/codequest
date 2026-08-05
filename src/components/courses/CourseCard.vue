<script setup>
import ProgressBar from '../common/ProgressBar.vue';

defineProps({
    course: Object
})
</script>

<template>
    <div class="card">
        <h3>{{ course.title }}</h3>
        <p>{{ course.level }}</p>
        <ProgressBar :progress="course.progress" />

    </div>
</template>

<style scoped>
.card {
    padding: 20px;

    border: 1px solid #ddd;
    border-radius: 12px;

    width: 250px;
}
</style>