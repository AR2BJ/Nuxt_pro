// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: "2024-08-02",
  app: {
    baseURL: "/nuxt-github-pages/", // baseURL: '/<repository>/'
    buildAssetsDir: "assets"
  },
});
