<script setup>
const props = defineProps({
  id: {
    type: String,
    default: 'sectionId'
  },
  title: {
    type: String,
    default: 'Section Title'
  }
})
</script>
<template>
  <section :id="props.id">
    <div class="border-l-4 border-sky-600 px-2 flex items-center mb-4">
      <slot name="title"></slot>
    </div>
    <slot name="body"></slot>
  </section>
</template>