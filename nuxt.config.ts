// https://nuxt.com/docs/api/configuration/nuxt-config
import ElementPlus from "unplugin-element-plus/vite";
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  css: ["element-plus/dist/index.css"],
  build: {
    transpile: ["element-plus/es"],
  },
  vite: {
    plugins: [ElementPlus()],
  },
});