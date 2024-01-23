<template lang="pug">
#faq-wrap.w-full.p-4.mb-32
  .w-full.flex.justify-center.lg_justify-end.px-24.py-20.mb-28.lg_mb-0
      img.w-4x5.lg_w-3x12(src="~/assets/images/faq-title.svg" alt="FAQ")
  MasonryWall(:items='faqData' :ssr-columns='1' :gap='16')
    template(#default='{ item, index }')
      .faq-item
        .inner.p-2.bg-gradient-to-t.from-transparent.to-orange.text-purple.rounded-xxl.hover_pb-6.cursor-pointer.transition-all(@click="toggleOpen(item)")
          header(v-auto-animate)
            h2.p-2.news-title {{ item.question }}
            PrismicRichText.content.text-l.p-2.news-title(:field="item.answer_rich" v-if="item.isOpen")
.background.bg-gradient-to-t.from-transparent.to-orange

</template>

<script setup>
import autoAnimate from "@formkit/auto-animate"
const { client } = usePrismic()


// get data from singleton 'faq', make it reactive
const faqData = ref([]);
watchEffect(async () => {
  const data = await client.getSingle("faq");
  faqData.value = data.data.faq.map(faq => ({ ...faq, isOpen: false }));
});

const toggleOpen = (faqItem) => {
  faqItem.isOpen = !faqItem.isOpen;
  console.log(faqItem.isOpen);
};

</script>

<style lang="sass" scoped>
.background
  min-height: 100vh
  width: 100vw
  position: fixed
  z-index: -1
  top: 0

img.featured
  transition: all 0.2s
  aspect-ratio: 16/7
  object-fit: cover
  cursor: pointer
  &.open
    aspect-ratio: 4/3
    &:hover
      aspect-ratio: 4/3
  &:hover
    aspect-ratio: 16/8

.content p
  padding-bottom: 0.5rem



.collapse-enter-active 
  animation: collapse reverse 500ms ease

.collapse-leave-active 
  animation: collapse 500ms ease

@keyframes collapse 
  from 
    max-height: 200px
  to 
    max-height: 0px

</style>  