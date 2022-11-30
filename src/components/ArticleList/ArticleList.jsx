import { useState, useEffect } from "react";

import { ArticlePreview } from "../ArticlePreview/ArticlePreview";
import { getPopularPosts } from "../../util";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getPopularPosts().then((res) => {
      setArticles(res.data.children);
    });
  }, []);

  return (
    <div className="article-list">
      <div>
        {articles.map((article, index) => (
          <ArticlePreview key={`article-${index}`} article={article.data} />
        ))}
      </div>
    </div>
  );
};
