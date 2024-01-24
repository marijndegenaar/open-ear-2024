<template lang="pug">
    #Footer.mt-auto.p-4.lg_p-8.pt-16.bg-gradient-to-t.from-purple.to-transparent.flex.text-white.text-2xs.items-end.flex-wrap
        img.hidden.md_block.w-7x12.information(src="~/assets/images/footer_desktop.svg" alt="Open Ear 2024, 31st May to 2nd June, Sherking Island, Cork")
        img.md_hidden.w-8x12.information(src="~/assets/images/footer_mobile.svg" alt="Open Ear 2024, 31st May to 2nd June, Sherking Island, Cork")
        .spacer.w-1x12.hidden.md_block
        .w-full.lg_w-3x12.flex.text-pink.py-4.lg_py-0
            ul.information.w-2x3.lg_px-4
                li.text-white.pb-2 Contact
                li
                    span General inquiries: 
                    a.text-white.hover_text-green(href="mailto:kenny@openear.ie") kenny@openear.ie
                li 
                    span Press inquiries: 
                    a.text-white.hover_text-green(href="mailto:kenny@openear.ie") kenny@openear.ie
                li
                    span Booking inquiries:
                    a.text-white.hover_text-green(href="mailto:artist@openear.ie") artist@openear.ie    
                    
            ul.follow.w-1x3.px-4
                li.text-white.pb-2 Follow
                li 
                    nuxt-link.hover_text-green(to="http://instagram.com/openearfestival") Instagram
                    br
                    nuxt-link.hover_text-green(to="http://facebook.com/openearfestival") Facebook
                    br 
                    nuxt-link.hover_text-green(to="http://x.com/openearfestival") X 
        img.w-1x3.lg_w-1x12(src="~/assets/images/arts-council-logo.svg" alt="The Arts Council Funding Festivals")
        //- .faq.w-1x12
        //-     h3 
        //-         nuxt-link(to="/faq") FAQ
        
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

li 
    /* margin-bottom: .5rem */
    &:last-child
        margin-bottom: 0

</style>