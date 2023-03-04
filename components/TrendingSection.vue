<script setup>
const isLoading = ref(false);
const { data } = await getTopAnime();

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
  <div v-if="isLoading"></div>
  <Section id="recommendation" v-else>
    <template #title>
      <h1 class="uppercase text-lg font-medium text-white">Trending Now</h1>
    </template>
    <template #body>
      <div class="flex flex-wrap gap-y-11 gap-x-7">
        <CardAnimeCard
          v-for="content in data.data"
          :content="content"
        />
      </div>
    </template>
  </Section>
</template>