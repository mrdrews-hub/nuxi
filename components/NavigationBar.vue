<script setup>
const isShow = ref(false);
const pages = ref([
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Discover',
    url: '/discover',
  },
  {
    name: 'About',
    url: '/about',
  },
])
const toggleShowNav = () => {
  isShow.value = !isShow.value
}

</script>
<template>
    <nav class="bg-transparent sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Workflow logo" />
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline gap-x-4">
                <NuxtLink
                  v-for="nav in pages"
                  :active-class="'bg-gray-900'"
                  class="px-3 py-2 rounded-md text-sm font-medium text-white focus:outline-none focus:text-white"
                  :key="nav.name"
                  :to="nav.url"
                >
                  {{ nav.name }}
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            @click="toggleShowNav"
            >
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    <div class="md:hidden" v-show="isShow">
      <div class="px-2 pt-2 pb-3">
        <NuxtLink
        v-for="nav in pages"
        :active-class="'bg-gray-900'"
        class="px-3 py-2 rounded-md text-sm font-medium text-white focus:outline-none focus:text-white"
        :key="nav.name"
        :to="nav.url"
      >
        {{ nav.name }}
      </NuxtLink>
      </div>
    </div>
    </nav>
</template>