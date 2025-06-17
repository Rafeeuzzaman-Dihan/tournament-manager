import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from '~/interfaces/User'

export const useAuthStore = defineStore('auth', () => {

    const user = ref<User | null>(null)

    function login(u: User) {
        user.value = u
    }
    function logout() {
        user.value = null
    }

    const isLoggedIn = computed(() => user.value !== null)
    const userRole = computed(() => user.value?.role)

    return {
        user,
        login,
        logout,
        isLoggedIn,
        userRole
    }
})