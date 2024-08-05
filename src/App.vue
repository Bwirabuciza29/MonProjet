<template>
  <div class="flex flex-col min-h-screen">
    <MyNavbar />
    <main class="flex-grow p-4">
      <div class="grid gap-4">
        <MyCard
          v-for="(card, index) in cards"
          :key="index"
          :title="card.title"
          :date="card.date"
          :theme="theme"
        />
      </div>
      <button class="mt-4 py-2 px-4 bg-blue-500 text-white rounded" @click="reStyle">
        Toggle Theme
      </button>
    </main>
    <MyFooter />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MyNavbar from './components/MyNavbar.vue'
import MyFooter from './components/MyFooter.vue'
import MyCard from './components/MyCard.vue'
import useFetch from './composables/useFetch'

const theme = ref('light')

const reStyle = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

const { data } = useFetch('https://cmsresourcematters.witoxr.studio/items/publications')
const cards = ref([])

onMounted(() => {
  if (data.value) {
    cards.value = data.value.map((item) => ({
      title: item.title,
      date: item.date
    }))
  }
})
</script>
