<script setup>
import MainLayout from './components/layout/MainLayout.vue';
import { storeToRefs } from 'pinia'
import Toast from './components/common/Toast.vue'
import { useToastStore } from './stores/toastStore'
import { onMounted } from 'vue'
import { useThemeStore } from './stores/themeStore'


const toastStore = useToastStore()

const { message } = storeToRefs(toastStore)

const themeStore = useThemeStore()


onMounted(() => {
    themeStore.applyTheme()
})
</script>

<template>
  <MainLayout>
    <RouterView />
  </MainLayout>

  <Toast v-if="message" :message="message" />
</template>
