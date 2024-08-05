<template>
  <div :class="cardClass">
    <h2 class="text-xl font-bold">{{ title }}</h2>
    <p>{{ formattedDate }}</p>
    <button @click="reStyle" class="mt-2 p-2 bg-blue-500 text-white rounded">Toggle Style</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  title: String,
  date: String,
  reStyle: Function
})

const cardClass = ref('bg-white p-4 rounded shadow')

const formattedDate = computed(() => {
  return new Date(props.date).toLocaleDateString()
})
</script>

<style scoped>
</style>
