export function getSounds(categoryId) {
  return fetch(`/api/sounds/${categoryId}`, {
    method: "GET", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
}
