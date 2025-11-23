import { allPosts } from "$content-collections";

export const getTags = () =>
  allPosts.reduce(
    (acc, post) => {
      post.tags?.forEach((tag) => {
        if (!acc.find((t) => t.name === tag))
          acc.push({ name: tag, slug: tag });
      });
      return acc;
    },
    [] as { name: string; slug: string }[],
  );
