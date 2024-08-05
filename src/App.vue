<template>
  <div>
    <MyNavbar />
    <div class="p-4">
      <div v-if="cards.length === 0">Loading...</div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        <MyCard
          v-for="(card, index) in cards"
          :key="index"
          :title="card.title"
          :date="card.date"
          :isDark="card.isDark"
          :reStyle="() => toggleStyle(index)"
        />
      </div>
    </div>
    <MyFooter />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MyNavbar from './components/MyNavbar.vue'
import MyFooter from './components/MyFooter.vue'
import MyCard from './components/MyCard.vue'

const cards = ref([])

async function fetchPublications() {
  try {
    const response = await fetch('https://cms-resourcematters.witoxr.studio/items/publications')
    const data = await response.json()
    cards.value = data.data.map((publication) => ({
      title: publication.title,
      date: publication.date_created,
      isDark: false
    }))
  } catch (error) {
    console.error('Error fetching publications:', error)
  }
}

function toggleStyle(cardIndex) {
  cards.value[cardIndex].isDark = !cards.value[cardIndex].isDark
}

onMounted(fetchPublications)
</script>
