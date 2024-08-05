import { ref } from 'vue'

export default function useFetch(url) {
  const data = ref(null)

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      data.value = json
    })
    .catch((err) => {
      console.error('Fetch error:', err)
    })

  return { data }
}
