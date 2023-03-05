<script setup>
const route = useRoute();
const { data, pending } = await useFetch(`https://api.jikan.moe/v4/anime/${route.params.id}`);
useHead({
  title: data.value.data.title,
  meta: [
    { property: 'og:title', content: data.value.data.title },
    { property: 'og:description', content: data.value.data.synopsis },
    { property: 'og:site:name', content: 'Nuxinime' },
    { property: 'og:image:type', content: 'image/jpg' },
    { property: 'og:image', content: data.value.data.images.jpg.image_url },
  ]
})
// const handleGetDetailAnime = async () => {
//   isLoading.value = true;
//   try {
//     const { data } = await getDetailAnime(route.params.id);
//     content.value = data.value.data
//     useHead({
//       title: data.value.title,
//       meta: [
//         { property: 'og:image', content: data.value.image }
//       ]
//     })
//   } catch (error) {
    
//   } finally {
//     isLoading.value = false;
//   }
// }

const handleShare = async() => {
  const shareValue = {
    title: data.value.data.title,
    text: `Watch ${data.value.data.title} on Nuxinime`,
    url: route.fullPath
  }
  try {
    if (navigator.canShare(shareValue)) {
      await navigator.share(shareValue)
    } else {
      console.warn('this browser doesnt support share API');
    }
  } catch (error) {
    console.log(error);
  }
}


// onMounted(() => {
//   handleGetDetailAnime();
// })
</script>
<template>
<div v-if="pending"></div>
<div class="text-white text-lg" v-else>
  <section class="flex w-full mt-5">
    <picture class="w-1/5">
      <img :src="data.data.images.webp.image_url" alt="" class="rounded-md">
    </picture>
    <article class="w-4/5 text-neutral-300">
      <h1 class="text-xl font-bold text-neutral-50">{{ data.data.title }}</h1>
      <div class="flex items-center gap-x-1 mt-1">
        <div class="px-1.5 bg-emerald-500 text-sm text-neutral-50 rounded-full" v-for="(genre, index) in data.data.genres">{{ genre.name }}</div>
      </div>
      <div class="flex gap-x-3 items-center mt-10">
        <Button class="flex items-center gap-x-2 text-sm rounded-full">
          <Icon name="cil:media-play" />
          <span>Watch Trailer</span>
        </Button>
        <Button class="flex items-center gap-x-2 text-sm rounded-full">
          <Icon name="cil:heart" />
          <span>Add To Favorite</span>
        </Button>
        <Button class="flex items-center gap-x-2 text-sm rounded-full" @click="handleShare">
          <Icon name="cil:share-boxed" />
          <span>Share</span>
        </Button>
      </div>
      <p class="mt-5 text-base leading-relaxed">{{ data.data.synopsis }}</p>
    </article>
  </section>
  <div class="flex mt-12">
    <aside class="w-1/5 h-screen">
      <nav class="flex flex-col gap-5">
        <NuxtLink class="border-l-4 border-blue-500 pl-3 py-1">
          Videos
        </NuxtLink>
        <NuxtLink class="border-l-4 border-blue-500 pl-3 py-1">
          Reviews
        </NuxtLink>
        <NuxtLink class="border-l-4 border-blue-500 pl-3 py-1">
          Character
        </NuxtLink>
      </nav>
    </aside>
    <div class="w-4/5">
      <DetailEpisodes :id="route.params.id" />
    </div>
  </div>
</div>
</template>