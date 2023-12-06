const API = "https://api.spoonacular.com";

export const get = (path) => {
  const apiKey = "06c72c72f57643c78a666296fcacf2ce"; //api de mi user gre

  return fetch(API + path, {
    headers: {
      "x-api-key": apiKey,
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((results) => results.json());
}