export const getPopularPosts = () =>
  fetch(`https://api.reddit.com/r/popular.json?limit=5`).then((res) =>
    res.json()
  );
