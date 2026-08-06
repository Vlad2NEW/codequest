import { defineStore } from 'pinia'
import { ref, computed } from 'vue'


export const useAuthStore = defineStore('auth', () => {


    const users = ref(
        JSON.parse(
            localStorage.getItem('users')
        ) || []
    )


    const user = ref(
        JSON.parse(
            localStorage.getItem('auth')
        ) || null
    )


    const isAuth = computed(() => !!user.value)



    function register(
        name,
        email,
        password
    ) {


        const exists = users.value.find(
            item => item.email === email
        )


        if (exists) {

            return {

                success: false,

                message: 'Такий email вже зареєстрований'

            }

        }



        const newUser = {

            id: Date.now(),

            name,

            email,

            password,

            joined: new Date()
                .toLocaleDateString(),

            avatar: name
                .charAt(0)
                .toUpperCase()

        }



        users.value.push(newUser)



        localStorage.setItem(
            'users',
            JSON.stringify(users.value)
        )



        return {

            success: true

        }

    }





    function login(
        email,
        password
    ) {


        const foundUser = users.value.find(
            item =>
                item.email === email &&
                item.password === password
        )



        if (!foundUser) {

            return {

                success:false,

                message:'Невірний email або пароль'

            }

        }



        user.value = foundUser



        localStorage.setItem(
            'auth',
            JSON.stringify(foundUser)
        )



        return {

            success:true

        }

    }





    function updateUser(data) {


        user.value = {

            ...user.value,

            ...data

        }



        localStorage.setItem(
            'auth',
            JSON.stringify(user.value)
        )



        const index = users.value.findIndex(
            item => item.id === user.value.id
        )



        if(index !== -1){

            users.value[index] = user.value


            localStorage.setItem(
                'users',
                JSON.stringify(users.value)
            )

        }


    }





    function logout() {


        user.value = null


        localStorage.removeItem(
            'auth'
        )

    }





    return {

        users,

        user,

        isAuth,

        register,

        login,

        updateUser,

        logout

    }


})