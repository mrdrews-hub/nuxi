<script setup>
const isLoading = ref(false)
const contents = ref([])

const handleGetAnimeRecommendation = async () => {
  isLoading.value = true
  try {
    const { data } = await getTopAnime();
    contents.value = data.value.data.slice(0,3);
  } catch (error) {
    
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  handleGetAnimeRecommendation();
})
</script>
<template>
  <section id="jumbotron" class="mt-8 w-full">
    <div v-if="isLoading">
    <h1>asdasd</h1>
    </div>
    <Carousel
      v-else
      :content="contents"
      v-slot="{ content }"
    >
      <div class="relative">
        <picture class="relative w-full">
          <img :src="content.images.webp.large_image_url" alt="" class="mx-auto h-[560px] w-full object-cover">
          <div class="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-black"></div>
        </picture>
        <article class="absolute bottom-5 left-5 max-w-[50%]">
          <h1 class="font-bold text-white text-3xl mb-3">{{ content.title }}</h1>
          <Button>
            Watch Now
          </Button>
        </article>
      </div>
    </Carousel>
  </section>
</template>