<script setup>
const props = defineProps({
  content: {
    type: Array,
  }
})
</script>
<template>
  <Swiper
  :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :slides-per-view="1"
    :space-between="10"
    :loop="true"
    :autoplay="{
      delay: 10000,
      disableOnInteraction: true,
    }"
  >
    <swiper-slide v-for="item in props.content">
      <slot :content="item"></slot>
    </swiper-slide>
  </Swiper>
</template>