export function filterAPIPut(key, value, filterId, options=null) {
  fetch(`/api/filter/${filterId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      value: {
        [key]: value
      },
      options,
    }),
  })
    .then(response => response.json())
    .then(localStorage.setItem("curFilter", filterId))
}

export function getFilter(filterId) {
  return fetch(`/api/filter/${filterId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(response => response.json())
}
