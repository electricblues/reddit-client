import "./App.css";
import { SearchFilter } from "../SearchFilter/SearchFilter";
import { Logo } from "../Logo/Logo";
import { ArticleList } from "../ArticleList/ArticleList";

export const App = () => {
  return (
    <div className="App">
      <Logo />
      <SearchFilter />
      <ArticleList />
    </div>
  );
};
