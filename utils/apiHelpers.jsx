export function filterAPIPut(id, updateDoc, value) {
    fetch(`/api/filter/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        [updateDoc]: value
      }),
    })
}
