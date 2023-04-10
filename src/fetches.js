export const getPopularPosts = () =>
  fetch(`https://api.reddit.com/r/popular.json?limit=10`).then((res) =>
    res.json()
  );

export const getPostAndComments = (permalink) =>
  fetch(`https://api.reddit.com${permalink}.json`).then((res) => res.json());

export const getPost = (permalink) =>
  fetch(`https://api.reddit.com${permalink}.json`)
    .then((res) => res.json())
    .then((data) => data[0].data.children[0].data);
