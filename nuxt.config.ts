// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig:{
    public:{
      apiUrl: 'https://nuxt-api.dev.codelines.io',
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@sidebase/nuxt-auth'
  ],
  vue: {  
    compilerOptions: {
      isCustomElement: (tag) => tag.includes('-'),
    },
  },
  build:{
    transpile: ['vue-toastification'],
  }
})
