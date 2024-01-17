import MasonryWall from '@yeger/vue-masonry-wall'
import { createApp } from 'vue'

// const app = createApp()

// app.use(MasonryWall)


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(MasonryWall, {

  })
})
