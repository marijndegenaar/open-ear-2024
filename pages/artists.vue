<template lang="pug">
	#artists-wrap
		.w-full.flex.justify-end.p-20
			img.w-1x3.self-end(src="~/assets/images/lineup.svg" alt="Line Up")
		MasonryWall(:items='artistsData' :ssr-columns='1' :gap='16').p-4
			template(#default='{ item, index }')
				.artists-item(@click="toggleOpen(item)")
					.inner.p2.bg-gradient-to-b.from-purple.to-white.text-orange.rounded-xxl(:class="{ open: item.isOpen }")
						header.relative
							.shadow
							h2.text-l.artists-title.absolute.bottom-6.left-6 {{ item.data.artist_name[0].text }}
							img.featured.rounded-xxl.lg_w-full.mt-8(:src="item.data.featured_image.url" :class="{ open: item.isOpen }")
							//- img.rounded-lg.lg_w-full.mt-8(:src="item.data.featured_image.url")
						.opener(v-if="item.isOpen").p-4
							PrismicRichText.content.px-2(:field="item.data.description").pt-1
							ul.links.p-4.mt-4
								li(v-for="link in item.data.links").pb-2
									a(:href="link.url.url" target="{{ link.url.target }}") {{ link.link_label }}
	.background.bg-gradient-to-t.from-white.to-purple
					
</template>

<script setup>
const { client } = usePrismic()

const artistsData = ref([]);

watchEffect(async () => {
  const data = await client.getAllByType("artists");
  artistsData.value = data.map(artist => ({ ...artist, isOpen: false }));
});

const toggleOpen = (artistItem) => {
  artistItem.isOpen = !artistItem.isOpen;
};
</script>

<style lang="sass">
.rounded-xxl
	border-radius: 3rem
.shadow
	background: linear-gradient(to bottom, #6463F4 0%, transparent 40%)
	width: 100%
	height: 100%
	position: absolute
	left: 0
	top: 0
	border-radius: 3rem
	opacity: .7
	transition: all 0.4s

.background
	min-height: 100vh
	width: 100vw
	position: fixed
	z-index: -1
	top: 0
.inner:hover .featured
	aspect-ratio: 16/8
.inner.open .shadow
	opacity: .2
	// background: linear-gradient(to top, #6463F4 0%, transparent 40%)
.featured
	transition: all 0.2s
	aspect-ratio: 16/7
	object-fit: cover
	cursor: pointer
	&.open
		aspect-ratio: 1/1
		&:hover
			aspect-ratio: 90/85
			
	&:hover
		aspect-ratio: 16/8

.content p
	padding-bottom: 0.5rem

</style>