export const getPopularPosts = () =>
  fetch(`https://api.reddit.com/r/popular.json?limit=10`).then((res) =>
    res.json()
  );

export const getCommentsForPost = (link) =>
  fetch(`https://api.reddit.com${link}`).then((res) => res.json());
