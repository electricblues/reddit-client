import { useState } from "react";
import { SearchFilter } from "../SearchFilter/SearchFilter";
import { Logo } from "../Logo/Logo";
import { ArticleList } from "../ArticleList/ArticleList";

import "./App.scss";

export const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="app">
      <Logo />
      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ArticleList searchTerm={searchTerm} />
    </div>
  );
};
