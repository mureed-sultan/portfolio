// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/sanity'],
  sanity: {
    projectId: '49mdbw6t',
    apiVersion: '2021-10-18',
  }
})
