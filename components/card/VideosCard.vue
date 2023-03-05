<script setup>
const props = defineProps({
  content: Object
})
onMounted(() => {
  console.log(props.content);
})
</script>
<template>
<div class="w-[300px]">
    <div class="relative">
      <div class="absolute inset-0 flex justify-center items-center bg-black/40 opacity-0 hover:opacity-100 transition-all">
        <div class="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
          <Icon name="cil:media-play" />
        </div>
      </div>
      <img :src="content.images.jpg.image_url" alt="" class="w-[300px]">
    </div>
    <article class="w-full">
      <h1 class="font-bold">{{ content.episode }}</h1>
      <p class="truncate">{{ content.title }}</p>
    </article>
</div>
</template>