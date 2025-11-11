import { allPosts } from "$content-collections";

export const load = async ({ params }) => {
  const { slug } = params;
  const postMeta = allPosts.find(post => post.slug === slug);
  const { default: component, metadata: frontmatter} = await import(`./content/${slug}/index.md`);
 
  return {
    post: {...postMeta,Component: component,frontmatter}
  }
};
