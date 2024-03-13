const APIkey = "48977cf7dc854fb9b482f8802b0b39ee";
const URL =
  "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=" +
  APIkey;

 fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(response.status);
    return response.articles.length;
  })
  .then((length) => console.log(length))
  .catch(console.log("Error"));


