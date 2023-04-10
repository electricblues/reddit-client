import React from "react";
import { timeSince } from "../../util";

import "./RedditComment.scss";

export const RedditComment = ({ comment }) => {
  const { author, body, created_utc, ups, replies } = comment.data;

  const commentTimeSince = timeSince(new Date(created_utc * 1000));

  return (
    <div className="comment">
      {commentTimeSince ? (
        <>
          <div className="comment-metadata">
            <span className="comment-author">{author}</span>
            <span className="comment-time">{commentTimeSince} ago</span>
            <span className="comment-ups">Upvotes: {ups}</span>
          </div>
          <div className="comment-body">{body}</div>
          {replies && (
            <div className="comment-replies">
              {replies.data.children.map((reply) => (
                <RedditComment key={reply.data.id} comment={reply} />
              ))}
            </div>
          )}
        </>
      ) : (
        <div>& {comment.data.count} more comment(s)</div>
      )}
    </div>
  );
};
