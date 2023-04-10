import { useState } from "react";
import { ArticleModal } from "../ArticleModal/ArticleModal";
import { ArticlePreviewContent } from "../ArticlePreviewContent/ArticlePreviewContent";

export const ArticlePreview = (props) => {
  const { article } = props;

  const [open, setOpen] = useState(false);

  return (
    <>
      <ArticlePreviewContent
        fullPost={false}
        article={article}
        onClick={() => setOpen(true)}
      />
      <ArticleModal
        open={open}
        onClose={() => setOpen(false)}
        article={article}
      />
    </>
  );
};
