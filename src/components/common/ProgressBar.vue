<script setup>
import { computed } from 'vue';
defineProps({
    progress: Number
})

const safeProgress = computed(() =>
    Math.min(Math.max(props.progress, 0), 100)
)
</script>

<template>
    <div class="progress">
        <div class="bar" :style="{ width: progress + '%' }"></div>
    </div>

    <div class="progress-value">
            {{ progress }}%
        </div>
</template>

<style scoped>
.progress {
    width: 100%;
    height: 10px;
    border-radius: 5px;
    background: #eee;
}

.bar {
    height: 100%;
    border-radius: 5px;
    transition: width 0.3s;
    background: #333;
}

.progress-value{
    color: #0fcc12;
    text-align: center;
    margin-top: 5px;
}
</style>