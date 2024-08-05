import { ref } from 'vue'

export default function useFetch(url) {
  const data = ref(null)
  const error = ref(null)

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      data.value = json.data 
    })
    .catch((err) => {
      error.value = err
    })

  return { data, error }
}
