<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/stores/auth'  // adjust path if needed
import type { User } from '~/types/user'       // your User interface

const router = useRouter()
const authStore = useAuthStore()

const username = ref('')
const role = ref<'admin' | 'captain' | 'user'>('user')
const error = ref('')

function handleLogin() {
  if (!username.value.trim()) {
    error.value = 'Please enter your username'
    return
  }

  const user: User = {
    name: username.value.trim(),
    role: role.value,
  }

  authStore.login(user)

  // Redirect based on role
  if (user.role === 'admin') {
    router.push('/admin')
  } else if (user.role === 'captain') {
    router.push('/captain/dashboard')
  } else {
    router.push('/user/dashboard')
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
    <h1 class="text-4xl font-bold mb-6">Login to Tournament Manager</h1>

    <div class="w-full max-w-sm bg-white p-6 rounded-lg shadow">
      <div class="mb-4">
        <label for="username" class="block mb-1 font-semibold">Username</label>
        <input id="username" v-model="username" type="text" placeholder="Enter username" class="w-full px-3 py-2 border rounded" />
      </div>

      <div class="mb-6">
        <label for="role" class="block mb-1 font-semibold">Role</label>
        <select id="role" v-model="role" class="w-full px-3 py-2 border rounded">
          <option value="admin">Admin</option>
          <option value="captain">Team Captain</option>
          <option value="user">User</option>
        </select>
      </div>

      <div v-if="error" class="mb-4 text-red-600 font-semibold">{{ error }}</div>

      <button @click="handleLogin" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        Login
      </button>
    </div>
  </div>
</template>
