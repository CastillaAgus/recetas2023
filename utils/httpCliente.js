const API = "https://api.spoonacular.com";

export const get = (path) => {
  const apiKey = "6d85b7b20a7241678dba8453fc4846a2"; //api de mi user

  return fetch(API + path, {
    headers: {
      "x-api-key": apiKey,
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((results) => results.json());
}