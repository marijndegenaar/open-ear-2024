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

const handleScroll = () => {
    const logoBig = document.querySelector('.logo-big');
    const scrollY = window.scrollY;
    const blurValue = Math.min(scrollY / 100, 3); // Adjust the division value to control the blur intensity
    logoBig.style.filter = `blur(${blurValue}px)`;
}

if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
}



</script>

<style lang="sass" scoped>
.logo-big  
    z-index: -1

</style>