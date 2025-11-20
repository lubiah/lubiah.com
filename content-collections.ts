import { defineCollection, defineConfig } from "@content-collections/core";
import { readingTime } from "reading-time-estimator";
import vine from "@vinejs/vine";

const posts = defineCollection({
  name: "posts",
  directory: "./src/routes/blog/[slug=post]/content",
  include: "**/*.md",
  parser: "frontmatter",
  schema: vine.compile(
    vine.object({
      title: vine.string().trim().minLength(3),
      date: vine.date(),
      updated: vine.date().optional(),
      content: vine.string(),
      description: vine.string().trim().optional(),
      tags: vine.array(vine.string().trim().minLength(1)).optional(),
    }),
  ),
  transform: async (data) => {
    const { content, ...doc } = data;
    return {
      ...doc,
      slug: doc._meta.directory,
      readingTime: readingTime(content),
    };
  },
});

export default defineConfig({
  collections: [posts],
});
