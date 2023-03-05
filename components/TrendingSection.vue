<script setup>
const isLoading = ref(false);
const { data, pending } = await getTopAnime();
// const data = ref(false)

const handleGetAnimeRecommendation = async () => {
  isLoading.value = true
  try {
    const { data } = await getTopAnime();
    contents.value = data.value.data.slice(0,20);
  } catch (error) {
    
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  // handleGetAnimeRecommendation();
})
</script>
<template>
  <Section id="recommendation">
    <template #title>
      <h1 class="uppercase text-lg font-medium text-white">Trending Now</h1>
    </template>
    <template #body>
      <div class="flex flex-wrap gap-y-11 gap-x-7">
        <template v-if="pending">
          <CardAnimeCard
            v-for="i in 9"
            :key="i"
            loading
          />
        </template>

        <template v-else>
          <Carousel
            :content="data.data"
            :perViews="1"
            :loop="false"
            :gap="10"
            :breakpoints="{
              640: {
                slidesPerView: 5,
                spaceBetween: 30
              }
            }"
            v-slot="{ content }"
          >
            <CardAnimeCard
              :content="content"
            />
          </Carousel>
        </template>
      </div>
    </template>
  </Section>
</template>