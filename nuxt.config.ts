// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@sidebase/nuxt-auth'
  ],
  vue: {  
    compilerOptions: {
      isCustomElement: (tag) => tag.includes('-'),
    },
  }
})
