<template>
  <div :class="['p-4 border rounded shadow', themeClass]">
    <h2 class="text-xl font-bold">{{ title }}</h2>
    <p>{{ formattedDate }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  date: String,
  theme: String
})

const themeClass = computed(() => {
  return props.theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'
})

const formattedDate = computed(() => {
  return new Date(props.date).toLocaleDateString()
})
</script>
