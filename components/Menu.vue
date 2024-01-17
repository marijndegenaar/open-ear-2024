<template lang="pug">
#menu.fixed.z-20.top-0.right-0.cursor-pointer.w-full
    .pill(@click="isOpen = !isOpen" :class="slug").fixed.top-0.right-0.w-12.h-4.rounded-xl.m-2.hover_bg-green.hover_w-16.transition-all.hidden.md_block.z-30
    .pill(@click="isOpen = !isOpen" :class="slug").fixed.top-0.right-0.w-8.h-8.rounded-2xl.m-2.md_hidden
    .menu(v-if="isOpen" v-auto-animate).text-center.z-30
        nuxt-link.menu-item.w-full.rounded-2xl.p-4.text-normal.hover_p-6.hover_text-xl.transition-all(v-for="item in menu" :key="item.slug" :to="item.slug" @click="isOpen = !isOpen") {{ item.name }}

</template>
<script setup>
import autoAnimate from "@formkit/auto-animate"

const menu = [
    {name: "home", slug: "/"},
    {name: "news", slug: "news"},
    {name: "line-up", slug: "artists"},
    {name: "transport", slug: "transport"},
    {name: "accomodation", slug: "accomodation"},
    {name: "FAQ", slug: "faq"},
    {name: "Tickets", slug: "tickets"},
]

const isOpen = ref(false);

//get current route
const route = ref(useRoute().path);
//get slug from route
const slug = ref(route.value.split("/")[1]);

watchEffect(() => {
    //update slug when route changes
    slug.value = useRoute().path.split("/")[1];
});

</script>
<style lang="sass" scoped>
.pill
    background: #FE8D66
    &.news
        background: #6463F4
    &.artists  
        background: #FE8D66
    &.transport  
        background: #6463F4
    &.accomodation  
        background: #FE8D66
    &.faq  
        background: #6463F4

.menu 
    .menu-item
        display: block
        &:first-child
            background: linear-gradient(to top, #FE8D66 0%, #fff 100%)
            color: #0AFF88
        &:nth-child(2)
            background: linear-gradient(to top, #EBF188 0%, #fff 100%)
            color: #6463F4
        &:nth-child(3)
            background: linear-gradient(to top, #6463F4 0%, #fff 100%)
            color: #FED7FF
        &:nth-child(4)
            background: linear-gradient(to top, #FED7FF 0%, #fff 100%)
            color: #FE8D66
        &:nth-child(5)
            background: linear-gradient(to top, #0AFF88 0%, #fff 100%)
            color: #6463F4
        &:nth-child(6)
            background: linear-gradient(to top, #FE8D66 0%, #fff 100%)
            color: #0AFF88
        &:nth-child(7)
            background: linear-gradient(to top, #EBF188 0%, #fff 100%)
            color: #6463F4

</style>