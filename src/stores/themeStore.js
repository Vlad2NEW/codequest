import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useThemeStore = defineStore('theme', () => {

    const dark = ref(
        localStorage.getItem('theme') === 'dark'
    )


    function applyTheme() {

        document.body.classList.toggle(
            'dark',
            dark.value
        )

    }


    function toggleTheme() {

        dark.value = !dark.value

        localStorage.setItem(
            'theme',
            dark.value ? 'dark' : 'light'
        )

        applyTheme()

    }


    return {
        dark,
        toggleTheme,
        applyTheme
    }

})