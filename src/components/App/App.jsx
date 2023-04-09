import { SearchFilter } from "../SearchFilter/SearchFilter";
import { Logo } from "../Logo/Logo";
import { ArticleList } from "../ArticleList/ArticleList";

import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <Logo />
      <SearchFilter />
      <ArticleList />
    </div>
  );
};
