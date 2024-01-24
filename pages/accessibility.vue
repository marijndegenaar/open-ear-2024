<template lang="pug">
  #accessibility.w-full.flex.flex-wrap.mb-32.p-2.lg_p-8
    header.w-full.flex.justify-end.p-20.lg_p-24.mb-24.lg_mb-0
      img.w-full.lg_w-2x5(src="~/assets/images/accessibility.svg" alt="accessibility")

    MasonryWall(:items='infoData' :ssr-columns='1' :gap='16').w-full
      template(#default='{ item, index }')
        .info-item( @click="toggleOpen(item)")
          .inner.p-2.bg-gradient-to-t.from-transparent.to-yellow.rounded-xxl.p-4.hover_pb-6.cursor-pointer.transition-all
            h2.text-purple {{ item.title }}
            header(v-auto-animate).text-purple
              PrismicRichText.content(:field="item.entry_content" v-if="item.isOpen").pt-2    
    //- PrismicImage.w-full(:field="accomData.map").m-4.rounded-xxl
    .background.bg-gradient-to-t.from-transparent.to-yellow
</template>

<script setup>
// const { client } = usePrismic()
// // get content from 'homepage'
// const { data: accomData } = await useAsyncData("transport", () =>
//   client.getSingle("transport")
// );

import autoAnimate from "@formkit/auto-animate"
const { client } = usePrismic()

const infoData = ref([]);
const accessData = ref([]);
watchEffect(async () => {
  const data = await client.getSingle("accessibility");
  
  accessData.value = data.data;
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
  z-index: -9
  position: fixed
  width: 100vw
  height: 100vh
  object-fit: cover
  top: 0  
  left: 0
.ticket-link, .prices 
  transition: all 0.2s 
.ticket-link:hover .prices
  opacity: 0

</style>