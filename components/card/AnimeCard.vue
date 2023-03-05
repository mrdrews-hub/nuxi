<script setup>
const props = defineProps({
  content: Object,
  loading: {
    type: Boolean,
    default: false,
  }
})
</script>
<template>
  <div class="relative w-[250px] h-[320px] hover:cursor-pointer rounded-md">
    <div class="absolute inset-0 bg-slate-400 animate-pulse" v-if="props.loading"></div>
    <NuxtLink :to="`/detail/${props.content.mal_id}`" v-else>
      <img :src="props.content.images.webp.image_url" alt="" class="object-fill w-full h-full">
    </NuxtLink>
  </div>
</template>