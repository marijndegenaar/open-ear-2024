<template lang="pug">
    #header
    .logo-big.fixed.top-0.left-0.w-full.lg_w-3x12.p-4.lg_p-8
        prismic-image(:field="homepageData.data.logo_main")
        
    prismic-image(:field="homepageData.data.bg_desktop").background.hidden.md_block
    prismic-image(:field="homepageData.data.bg_mobile").background.block.md_hidden

    .information.fixed.bottom-8.left-8.text-white.text-xl {{ homepageData.data.information }}
    .gradient.bg-gradient-to-t.from-purple.to-transparent

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


</style>