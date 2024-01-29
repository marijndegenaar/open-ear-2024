<template lang="pug">
#news-wrap.w-full.bg-gradient-to-t.from-transparent.to-yellow.p-2.lg_p-8
  .w-full.flex.justify-end.py-20.px-24.lg_p-22.mb-16.lg_mb-8.fixed.lg_relative
    img.w-full.md_w-3x12.lg_w-2x12(src="~/assets/images/news.svg" alt="News")
  MasonryWall(:items='newsData' :ssr-columns='1' :gap='16').mt-80.lg_mt-0
    template(#default='{ item, index }')
      .news-item(@click="toggleOpen(item)")
        .inner.bg-gradient-to-t.from-yellow.to-transparent.rounded-xxl
          header(v-auto-animate).relative
            h2.text-l.p-2.news-title.text-white.absolute.bottom-2.left-2 {{ item.data.title[0].text }}
            //- Transition(name="collapse")
            img.rounded-xxl.w-full.featured(:src="item.data.featured_image.url" :class="{ open: item.isOpen }")
            //- img.rounded-lg.w-full.aspect-3x4(:src="item.data.featured_image.url" v-if="item.isOpen").mb-4   
          PrismicRichText.content.p-4.text-purple(:field="item.data.content" v-show="item.isOpen")

</template>

<script setup>
import autoAnimate from "@formkit/auto-animate"
const { client } = usePrismic()

const newsData = ref([]);

watchEffect(async () => {
  const data = await client.getAllByType("news");
  newsData.value = data.map(newz => ({ ...newz, isOpen: false }));
});

const toggleOpen = (newsItem) => {
  newsItem.isOpen = !newsItem.isOpen;
  console.log(newsItem);
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