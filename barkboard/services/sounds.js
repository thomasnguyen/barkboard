export function getSounds(categoryId) {
  return fetch(`/api/sounds/${categoryId}`, {
    method: "GET", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log("fff", data);
      return data;
    });
}
