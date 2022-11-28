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
  app: {
    head: {
      charset: "utf-16",
      title: "NowCoder",
      meta: [{ name: "description", content: "NowCoder Clone" }],
    },
  },
});
