import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/card"; // Correct the path for Card

function App() {
  const [articles, setArticles] = useState([]);
  const APIkey = "48977cf7dc854fb9b482f8802b0b39ee";
  const URL =
    "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=" +
    APIkey;

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        let cnt = 1;
        let articleList = [];

        for (let j = 0; j < 20; j++) {
          if (data.articles[j].urlToImage != null) {
            articleList.push({
              heading: cnt,
              title: data.articles[j].title,
              url: data.articles[j].urlToImage,
            });
            cnt++;
          }
        }

        setArticles(articleList);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <>
      {articles.map((article, index) => (
        <Card
          key={index}
          title={article.title}
          url={article.url}
        />
      ))}
    </>
  );
}

export default App;
