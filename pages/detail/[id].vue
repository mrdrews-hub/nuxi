<script setup>
import { useHead } from '#app';
const isLoading = ref(false);
const route = useRoute();
const { data } = await useFetch(`https://api.jikan.moe/v4/anime/${route.params.id}`);
useHead({
  title: data.value.data.title,
  meta: [
    { property: 'og:title', content: data.value.data.title },
    { property: 'og:description', content: data.value.data.synopsis },
    { property: 'og:site:name', content: 'Animeku' },
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


// onMounted(() => {
//   handleGetDetailAnime();
// })
</script>
<template>
<div class="text-white text-lg">
  {{ $route.params.id }}
  {{ data }}
</div>
</template>