<template lang="pug">
  Menu
  #home
    //- .logo-big.fixed.top-8.left-8.w-10x12.lg_w-3x12
    //-   prismic-image(:field="homepageData.data.logo_main")
    //- .logo-small.fixed.lg_bottom-8.top-4.left-4.lg_right-8.w-1x4.lg_w-1x12
    //-   prismic-image(:field="homepageData.data.logo_small")
    
    //- .information.fixed.bottom-8.left-8.text-white.text-xl
    //-   | {{ homepageData.data.information }}
    
    //- .gradient.bg-gradient-to-t.from-purple.to-transparent

        
    //- prismic-image(:field="homepageData.data.bg_desktop").background.hidden.md_block
    //- prismic-image(:field="homepageData.data.bg_mobile").background.block.md_hidden


  //- video(autoplay muted loop playsinline).w-full.h-screen.object-cover.hidden.md_block
  //-   source(src='assets/video/OE_landing.mp4' type='video/mp4')

  //- video(autoplay muted loop playsinline).w-full.h-screen.object-cover.md_hidden
  //-   source(src='assets/video/OE_banner_mob2.mp4' type='video/mp4')


</template>

<script setup>
const { client } = usePrismic()
// get content from 'homepage'
const { data: homepageData } = await useAsyncData("homepage", () =>
  client.getSingle("homepage")
);
</script>

<style lang="sass" scoped>
.gradient
  position: fixed
  bottom: 0
  left: 0
  width: 100vw
  height: 15vh
  z-index: -9
.background
  z-index: -10
  position: fixed
  width: 100vw
  height: 100vh
  object-fit: cover
.ticket-link, .prices 
  transition: all 0.2s 
.ticket-link:hover .prices
  opacity: 0

</style>