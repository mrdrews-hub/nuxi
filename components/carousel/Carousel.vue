<script setup>
const props = defineProps({
  content: {
    type: Array,
  },
  perViews: {
    type: Number,
    default: 1,
  },
  gap: {
    type: Number,
    default: 1,
  },
  loop: {
    type: Boolean,
    default: true
  },
  breakpoints: Object,
})
</script>
<template>
  <Swiper
  :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :slides-per-view="1"
    :space-between="props.gap"
    :loop="props.loop"
    :breakpoints="props.breakpoints"
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