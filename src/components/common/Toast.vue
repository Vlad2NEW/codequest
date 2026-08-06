<script setup>
defineProps({
    message: String
})
</script>


<template>
    <div class="toast">
        {{ message }}
    </div>
</template>


<style scoped>

.toast {

    position: fixed;

    right: 30px;
    bottom: 30px;

    padding: 15px 25px;

    background: #333;

    color: white;

    border-radius: 10px;

    box-shadow: 0 5px 15px rgba(0,0,0,0.2);

}

</style>