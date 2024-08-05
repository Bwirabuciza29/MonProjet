import { ref } from 'vue'

export default function useFetch(url) {
  const data = ref(null)
  const error = ref(null)

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      data.value = json.data // assuming the response structure has a "data" field
    })
    .catch((err) => {
      error.value = err
    })

  return { data, error }
}
