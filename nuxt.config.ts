// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    'primeicons/primeicons.css'
  ],

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true }
})
