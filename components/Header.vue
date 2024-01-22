<template lang="pug">
#header
    .logo-big.fixed.top-0.left-0.w-full.lg_w-3x12.p-4.lg_p-8
        prismic-image(:field="homepageData.data.logo_main")
  
</template>
  
<script setup>
const { client } = usePrismic()
// get content from 'homepage'
const { data: homepageData } = await useAsyncData("homepage", () =>
client.getSingle("homepage")
);
</script>

<style lang="sass" scoped>


</style>