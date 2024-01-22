<template lang="pug">
    #Footer.mt-auto.p-4.lg_p-8.pt-16.bg-gradient-to-t.from-purple.to-transparent
        img.hidden.md_block.w-7x12.information(src="~/assets/images/footer_desktop.svg" alt="Open Ear 2024, 31st May to 2nd June, Sherking Island, Cork")
        img.md_hidden.w-8x12.information(src="~/assets/images/footer_mobile.svg" alt="Open Ear 2024, 31st May to 2nd June, Sherking Island, Cork")

        
    prismic-image(:field="homepageData.data.bg_desktop").background.hidden.md_block
    prismic-image(:field="homepageData.data.bg_mobile").background.block.md_hidden

    //- .information.fixed.bottom-8.left-8.text-white.text-xl {{ homepageData.data.information }}
    

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
    top: 0
    left: 0


</style>