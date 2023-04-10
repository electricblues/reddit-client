import { useState, useEffect } from "react";

import { RedditComment } from "../RedditComments/RedditComment";
import { getPostAndComments } from "../../fetches";
import { ArticlePreviewContent } from "../ArticlePreviewContent/ArticlePreviewContent";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Button } from "@mui/material";

export const ArticleModal = (props) => {
  const { article, open, onClose } = props;

  const { permalink } = article;

  const [comments, setComments] = useState([]);

  useEffect(() => {
    getPostAndComments(permalink).then((res) => {
      setComments(res[1].data.children.slice(0, 5));
    });
  }, []);

  return (
    <Dialog
      maxWidth={"lg"}
      fullWidth={false}
      onClose={onClose}
      style={{ margin: 0 }}
      open={open}
    >
      {/* <DialogTitle>
        <Button onClick={onClose}>Close</Button>
      </DialogTitle> */}

      <ArticlePreviewContent
        key={permalink}
        fullPost={true}
        article={article}
        onClick={() => {}}
      />

      {comments.map((comment, index) => (
        <RedditComment
          key={`${permalink}-comment-${index}`}
          comment={comment}
        />
      ))}
      <div style={{ height: "100vh" }}> </div>
    </Dialog>
  );
};
