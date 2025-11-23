import { allPosts } from "$content-collections";
import { getTags } from ".";

export const load = async () => {
  return {
    posts: allPosts.sort((a, b) => b.date.getTime() - a.date.getTime()),
    tags: getTags(),
  };
};
