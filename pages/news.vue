<template lang="pug">
#news-wrap.w-full.bg-gradient-to-t.from-white.to-yellow
  .w-full.flex.justify-end.p-20
    img.w-full.lg_w-3x12(src="~/assets/images/news.svg" alt="News")
  MasonryWall(:items='newsData' :ssr-columns='1' :gap='8')
    template(#default='{ item, index }')
      .news-item.p-2(@click="toggleOpen(item)")
        .inner.p2.bg-gradient-to-t.from-yellow.to-white.rounded-xxl
          header(v-auto-animate).relative
            h2.text-l.p-2.news-title.text-white.absolute.bottom-2.left-2 {{ item.data.title[0].text }}
            //- Transition(name="collapse")
            img.rounded-xxl.w-full.featured(:src="item.data.featured_image.url" :class="{ open: item.isOpen }").mb-4
            //- img.rounded-lg.w-full.aspect-3x4(:src="item.data.featured_image.url" v-if="item.isOpen").mb-4   
          PrismicRichText.content.px-4.text-purple(:field="item.data.content" v-if="item.isOpen")

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