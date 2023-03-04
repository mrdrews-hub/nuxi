<script setup>
const props = defineProps({
  content: Object,
})
</script>
<template>
  <div class="relative w-[250px] h-[320px] hover:cursor-pointer">
    <NuxtLink :to="`/detail/${props.content.mal_id}`">
      <img :src="props.content.images.webp.image_url" alt="" class="object-fill w-full h-full">
    </NuxtLink>
  </div>
</template>