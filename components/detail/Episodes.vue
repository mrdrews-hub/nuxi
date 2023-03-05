<script setup>
const props = defineProps({
  id: [String,Number],
})
const datas = reactive({
  loading: false,
  epsiodes: []
})
const handleFetchEpisodes = async () => {
  datas.loading = true
  try {
    const { data } = await  useFetch(`https://api.jikan.moe/v4/anime/${props.id}/videos/episodes`)
    datas.epsiodes = data.value.data;
  } catch (error) {
    
  } finally {
    datas.loading = false;
  }
}

onMounted(() => {
  handleFetchEpisodes();
})
</script>
<template>
<Section id="episodes">
  <template #body>
    <div v-if="datas.loading"></div>
    <div class="flex items-center gap-x-4 gap-y-5 flex-wrap" v-else>
      <CardVideosCard
        v-for="content in datas.epsiodes"
        :content="content"
      />
    </div>
  </template>
</Section>
</template>