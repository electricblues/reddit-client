import { useState, useEffect } from "react";

import { ArticlePreview } from "../ArticlePreview/ArticlePreview";
import { getPopularPosts } from "../../fetches";

import "./ArticleList.scss";

export const ArticleList = ({ searchTerm }) => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    getPopularPosts().then((res) => {
      setArticles(res.data.children.map((el) => el.data));
    });
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(
        articles.filter((article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, articles]);

  return (
    <div className="article-list">
      {filteredArticles.map((article, index) => (
        <ArticlePreview key={`article-${index}`} article={article} />
      ))}
    </div>
  );
};
