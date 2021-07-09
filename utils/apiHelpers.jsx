export function filterAPIPut(id, updateDoc, value, filter, setFilter) {
  fetch(`/api/filter/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      [updateDoc]: value
    }),
  })
    .then(response => response.json())
    .then((response) => {
      if(response.newFilterId) {
        const f = {
          ...filter
        }
        f._id = response.newFilterId._id
        setFilter(f)
      }
    })
}
