import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useToastStore = defineStore('toast', () => {

    const message = ref('')


    function show(text) {

        message.value = text


        setTimeout(() => {

            message.value = ''

        }, 2000)

    }


    return {
        message,
        show
    }

})