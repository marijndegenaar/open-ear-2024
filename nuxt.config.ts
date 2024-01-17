// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  devtools: { enabled: true },
  app: {
      head: {
        title: 'Open Ear Festival 2024',
        charset: 'utf-8',
        viewport: 'width=device-width, minimal-ui initial-scale=1, user-scalable=no',
        link: [{ rel: 'icon', type: 'image/png', href: '/fav.png' }],
      }
  },
  modules: [
      '@nuxtjs/prismic',
      '@nuxtjs/tailwindcss',
      '@formkit/auto-animate/nuxt'
  ],

  prismic: {
      endpoint: 'https://openear.cdn.prismic.io/api/v2',
      toolbar: false,
      preview: false,
    },
  css: [
      "@/assets/fonts/fonts.css",
      "@/assets/sass/main.sass"
  ],
  // route to about.vue page
  router: {
      // extendRoutes(routes, resolve) {
      //     routes.push({
      //         name: 'about',
      //         path: '/about',
      //         component: resolve(__dirname, 'pages/about.vue')
      //     })
      // }
  },  
  clientConfig: {
      routes: [
      // Fallback route for content without language prefix
      {
        type: "page",
        path: "/:uid",
      },
    ],
  },
})
