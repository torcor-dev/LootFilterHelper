export function filterAPIPut(key, value, filterId) {
  fetch(`/api/filter/${filterId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      [key]: value
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
