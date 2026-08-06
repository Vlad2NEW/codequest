<script setup>
import { storeToRefs } from 'pinia'
import { useCourseStore } from '../stores/courseStore'

const courseStore = useCourseStore()

const {
    courses,
    completedCourses,
    averageProgress
} = storeToRefs(courseStore)
</script>

<template>
    <div>
        <h1>Профіль</h1>

        <div class="stats">
            <div class="stat-card">
                <h3>{{ courses.length }}</h3>
                <p>Курсів</p>
            </div>

            <div class="stat-card">
                <h3>{{ completedCourses.length }}</h3>
                <p>Завершено</p>
            </div>

            <div class="stat-card">
                <h3>{{ averageProgress }}%</h3>
                <p>Прогрес</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.stats {
    display: flex;
    gap: 20px;
    margin-top: 30px;
}

.stat-card {
    width: 180px;
    padding: 25px;

    border: 1px solid #ddd;
    border-radius: 12px;

    text-align: center;

    transition: transform 0.2s, box-shadow 0.2s;
}

.stat-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.stat-card h3 {
    margin: 0;

    font-size: 32px;
}

.stat-card p {
    margin-top: 10px;

    color: #666;
}
</style>