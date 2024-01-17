<template lang="pug">
.left.fixed.top-8.left-8.text-2xl.md_text-xl.leading-tight.text-purp
    | Open Ear 2024
    br
    | May 31st to June 2nd
    br
    | Sherkin Island, Cork

.right.fixed.top-44.md_top-8.left-8.md_left-auto.md_right-8.text-2xl.md_text-xl.leading-tight.text-purp.z-10
    NuxtLink(to="https://www.eventbrite.co.uk/e/open-ear-24-tickets-776916637577?aff=oddtdtcreator" target="_blank").ticket-link.hover_text-yellow Purchase tickets 
      .prices
        br
        | EARLY BIRD €190 + fee 
        br
        | MID BIRD €210 + fee
        br
        | LATE BIRD €230 + fee

.logo.fixed.bottom-8.right-8.hidden.md_block
    img(src='assets/logos/oe_purple.svg' alt='Open Ear Logo' width='200px')
.logo.fixed.bottom-8.right-8.md_hidden.mobile-logo
    img(src='assets/logos/oe_purple-mob.svg' alt='Open Ear Logo' width='20px')


video(autoplay muted loop playsinline).w-full.h-screen.object-cover.hidden.md_block
  source(src='assets/video/OE_landing.mp4' type='video/mp4')

video(autoplay muted loop playsinline).w-full.h-screen.object-cover.md_hidden
  source(src='assets/video/OE_banner_mob2.mp4' type='video/mp4')


</template>

<script setup>
const { client } = usePrismic()


</script>

<style lang="sass" scoped>
.ticket-link, .prices 
  transition: all 0.2s 
.ticket-link:hover .prices
  opacity: 0

</style>