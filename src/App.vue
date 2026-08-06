<script setup>
import MainLayout from './components/layout/MainLayout.vue';
import { storeToRefs } from 'pinia'
import Toast from './components/common/Toast.vue'
import { useToastStore } from './stores/toastStore'


const toastStore = useToastStore()

const { message } = storeToRefs(toastStore)

</script>

<template>
  <MainLayout>
    <RouterView />
  </MainLayout>

  <Toast v-if="message" :message="message" />
</template>
