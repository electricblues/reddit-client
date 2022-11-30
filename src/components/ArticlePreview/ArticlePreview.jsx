import "./ArticlePreview.scss";
import { Chars, timeSince } from "./util";

export const ArticlePreview = (props) => {
  const {
    title,
    num_comments,
    thumbnail,
    subreddit_name_prefixed,
    author,
    created,
    ups,
  } = props.article;

  return (
    <div className="article-preview">
      <Sidebar ups={ups} />
      <TopBar
        author={author}
        subreddit={subreddit_name_prefixed}
        created={created}
      />
      <div className="content">
        <div>{title}</div>
        {thumbnail.includes("http") ? <img src={thumbnail} alt="pic" /> : <></>}
      </div>
      <div className="bottomBar">
        <span>{num_comments} comments</span>
      </div>
    </div>
  );
};

const Sidebar = ({ ups }) => (
  <div className="sidebar">
    <div>{Chars.upArrow}</div>
    {ups}
    <div>{Chars.downArrow}</div>
  </div>
);

const TopBar = ({ subreddit, author, created }) => (
  <div className="topBar">
    <span> </span>
    <span>
      <b>{subreddit}</b>{" "}
    </span>
    <span> Posted by u/{author} </span>
    <span>{timeSince(new Date(created * 1000))}</span>
  </div>
);
