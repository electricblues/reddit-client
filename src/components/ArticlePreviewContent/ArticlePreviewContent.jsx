import { useState, useEffect, useRef } from "react";
import { Chars, timeSince } from "../../util";
import { getPostAndComments } from "../../fetches";

import "./ArticlePreview.scss";

export const ArticlePreviewContent = (props) => {
  const { article, onClick, mysteryProp, fullPost } = props;
  const {
    title,
    num_comments,
    thumbnail,
    subreddit_name_prefixed,
    author,
    created,
    ups,
    selftext,
  } = article;

  const [fullImage, setFullImage] = useState("");

  const media = {
    type: article.post_hint === "hosted:video" ? "video" : null,
    videoUrl:
      article.post_hint === "hosted:video"
        ? article.media.reddit_video.fallback_url
        : null,
  };

  useEffect(() => {
    if (fullPost) {
      getPostAndComments(article.permalink).then((data) => {
        const post = data[0].data.children[0].data;
        const imageUrl = post.preview?.images[0]?.source?.url;

        if (imageUrl) {
          const fixedImageUrl = imageUrl.replace(/&amp;/g, "&");
          setFullImage(fixedImageUrl);
        }
      });
    }
  }, [fullPost, article]);

  return (
    <div
      className={`article-preview${!fullPost ? " enable-hover" : ""}`}
      style={fullPost ? { backgroundColor: "whitesmoke" } : {}}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      <div>{mysteryProp}</div>
      <SideBar ups={ups} />
      <TopBar
        author={author}
        subreddit={subreddit_name_prefixed}
        created={created}
      />
      {fullPost ? (
        <FullContent
          title={title}
          image={fullImage}
          media={media}
          description={selftext}
        />
      ) : (
        <Content title={title} thumbnail={thumbnail} />
      )}
      <BottomBar num_comments={num_comments} />
    </div>
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

const FullContent = ({ title, image, description, media }) => {
  const isVideo = media && media.type === "video";
  const videoRef = useRef(null);
  useEffect(() => {
    if (isVideo && videoRef.current) {
      videoRef.current.muted = false;
    }
  }, [isVideo]);

  return (
    <div className="content">
      <h2>{title}</h2>
      {isVideo ? (
        <video
          ref={videoRef}
          src={media.videoUrl}
          controls
          className="content-video"
          preload="metadata"
        />
      ) : (
        image.includes("http") && (
          <div className="image-container">
            <img src={image} alt="pic" />
          </div>
        )
      )}

      <p>{description}</p>
    </div>
  );
};

const BottomBar = ({ num_comments }) => (
  <div className="bottomBar">
    <span>{num_comments} comments</span>
  </div>
);
