import { useState, useEffect } from "react";
import { Chars, timeSince } from "./util";
import { getCommentsForPost } from "../../util";

import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Button } from "@mui/material";

import "./ArticlePreview.scss";

export const ArticlePreview = (props) => {
  const { article } = props;

  const {
    title,
    num_comments,
    thumbnail,
    subreddit_name_prefixed,
    author,
    created,
    ups,
    permalink,
  } = article;

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="article-preview" onClick={handleOpen}>
        <SideBar ups={ups} />
        <TopBar
          author={author}
          subreddit={subreddit_name_prefixed}
          created={created}
        />
        <Content title={title} thumbnail={thumbnail} />
        <BottomBar num_comments={num_comments} />
      </div>

      {/* // TODO: move this inside ArticleModal (to create) */}
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Title</DialogTitle>
        <ModalContent link={permalink} />
        <Button onClick={handleClose}>Close</Button>
      </Dialog>
    </>
  );
};

// TODO: move this inside ArticleModal (to create)
const ModalContent = ({ link }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getCommentsForPost(link).then(
      (res) => {
        setComments(res[1].data.children.slice(0, 5));
      }
      // setComments(data.children.slice(4))
    );
  }, []);

  return (
    <ul>
      {comments.map((comment, index) => (
        <li key={`${link}-comment-${index}`}>{comment.data.body}</li>
      ))}
    </ul>
  );
};

// just to show 'return'
const SideBar = ({ ups }) => {
  return (
    <div className="sidebar">
      <div>
        <div>{Chars.upArrow}</div>
        {ups}
        <div>{Chars.downArrow}</div>
      </div>
    </div>
  );
};

// missing the return keyword, but this function still returns JSX
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

const Content = ({ title, thumbnail }) => (
  <div className="content">
    <div>{title}</div>
    {thumbnail.includes("http") ? <img src={thumbnail} alt="pic" /> : <></>}
  </div>
);

const BottomBar = ({ num_comments }) => (
  <div className="bottomBar">
    <span>{num_comments} comments</span>
  </div>
);
