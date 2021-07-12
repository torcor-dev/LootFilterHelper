export function filterAPIPut(key, value, filter, filterFuncs) {
  console.log(filter._id, "Old?")
  fetch(`/api/filter/${filter._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      [key]: value
    }),
  })
    .then(response => response.json())
    .then((response) => {
      if(response.newFilterId) {
        filterFuncs.setId(response.newFilterId._id)
      }
    })
}
