import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useUserStore = defineStore('user', () => {

    const user = ref(
        JSON.parse(
            localStorage.getItem('user')
        ) || {
            name: 'Student',
            avatar: 'S',
            joined: new Date().toLocaleDateString()
        }
    )


    function updateUser(data) {

        user.value = {
            ...user.value,
            ...data
        }


        localStorage.setItem(
            'user',
            JSON.stringify(user.value)
        )

    }


    return {
        user,
        updateUser
    }

})