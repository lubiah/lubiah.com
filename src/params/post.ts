import { allPosts } from "$content-collections";
import type { ParamMatcher } from "@sveltejs/kit";

export const match = ((param: string) => Boolean(allPosts.find(post => post.slug === param))) satisfies ParamMatcher;
