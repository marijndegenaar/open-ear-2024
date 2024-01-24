<template lang="pug">
  #accomodation.w-full.flex.flex-wrap.bg-gradient-to-t.from-transparent.to-green.p-2.lg_p-8.mb-32
    .w-full.flex.justify-end.p-20.mb-24.lg_mb-0
      img.w-full.md_w-1x3.lg_w-2x5(src="~/assets/images/accom.svg" alt="Accommodation")

    MasonryWall(:items='infoData' :ssr-columns='1' :gap='16').w-full
      template(#default='{ item, index }')
        .info-item( @click="toggleOpen(item)")
          .inner.bg-gradient-to-t.from-green.to-transparent.rounded-xxl.p-4.hover_pb-8.cursor-pointer.transition-all
            h2.text-purple {{ item.title }}
            header(v-auto-animate).text-purple
              PrismicRichText.content(:field="item.entry_content" v-if="item.isOpen").pt-2    
    PrismicImage.w-full(:field="accomData.map").rounded-xxl.mt-8
      
</template>

<script setup>
// const { client } = usePrismic()
// // get content from 'homepage'
// const { data: accomData } = await useAsyncData("accomodation", () =>
//   client.getSingle("accomodation")
// );

import autoAnimate from "@formkit/auto-animate"
const { client } = usePrismic()

const infoData = ref([]);
const accomData = ref([]);
watchEffect(async () => {
  const data = await client.getSingle("accomodation");
  
  accomData.value = data.data;
  infoData.value = data.data.information_blocks.map(info => ({ ...info, isOpen: false }));
  
});

const toggleOpen = (infoItem) => {
  infoItem.isOpen = !infoItem.isOpen;
  console.log(infoItem.isOpen);
};


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