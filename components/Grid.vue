<template lang="pug">
    pre {{ data }}
    pre {{ postType }}
    MasonryWall(:items='data' :ssr-columns='1' :gap='16')
        template(#default='{ item, index }')
            //- .artists-item(@click="toggleOpen(item)")
            //-     .inner.p2.bg-gradient-to-t.from-purp.to-white.text-orange.rounded-xl
            //-         h2.text-xl.p-2.artists-title {{ item.data.artist_name[0].text }}
            //-         .opener(v-if="item.isOpen")
            //-             PrismicRichText.content.px-2(:field="item.data.description")
            //-             ul.links.p-4
            //-                 h2.pb-2 LINKS
            //-                 li(v-for="link in item.data.links").pb-2.list-disc.list-inside
            //-                     a(:href="link.url.url" :target="link.url.target") {{ link.link_label }}
            //-         img.rounded-lg.lg_w-full.mt-8(:src="item.data.featured_image.url")
</template>

<script>

export default {
    props: {
        postType: String,
    },
    setup(props) {
        const { client } = usePrismic();
        const data = ref([]);
        let fetchedData = null;
        console.log('postType:', props.postType);


        watchEffect(async () => {
            try {
                // Fetch data and handle loading/error states if necessary
                fetchedData = await client.getAllByType(props.postType);
                data.value = fetchedData.map(item => ({ ...item, isOpen: false }));
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error state
            }
        });

        const toggleOpen = (item) => {
            // Toggle the isOpen property of the item
            // Note: Directly modifying the item is okay in this context
            item.isOpen = !item.isOpen;
        };

        console.log(data.value);

        return {
            data,
            fetchedData,
            toggleOpen,
        };
    },
};
</script>