<script lang="ts">
	import type { PageProps } from "./$types";
	import Head from "svelte-seo";

	const { data }: PageProps = $props();
	const { post } = data;

	const SEO = {
		title: `${post.title} • Lubiah`,
		description: post.description,
		canonical: `https://www.lubiah.com/blog/${post.slug}`,
	};
</script>

<Head
	title={SEO.title}
	description={SEO.description}
	canonical={SEO.canonical}
	twitter={{
		title: SEO.title,
		description: SEO.description,
		site: "@lubiah_",
		creator: "@lubiah_",
	}}
	openGraph={{
		title: SEO.title,
		url: SEO.canonical,
		description: SEO.description,
		site_name: "Lubiah",
		article: {
			published_time: new Date(post.date ?? "").toDateString(),
			author: ["Lucretius Biah"],
			tag: post.tags,
		},
		profile: {
			first_name: "Lucretius",
			last_name: "Biah",
			gender: "male",
		},
	}}
	jsonLd={{
		"@type": "Article",
		about: SEO.description,
		dateCreated: `${new Date(post.date ?? new Date()).toISOString()}`,
		datePublished: `${new Date(post.date ?? new Date()).toISOString()}`,
		headline: `${post.title}`,
		url: `${SEO.canonical}`,
		author: {
			"@type": "Person",
			name: "Lucretius Biah",
			url: "https://www.lubiah.com",
		},
	}}
/>

<main class="mt-10 md:mt-30">
	<div
		class="mb-20 grid grid-cols-[1fr_calc(min(65ch,100%)-32px)_1fr] *:col-start-2"
	>
		<h1 class="mb-2">{post.title}</h1>
		<div class="text-sm font-mono">
			<time datetime={post.date?.toISOString()}
				>Written {post.date?.toLocaleString("en-GB", {
					year: "numeric",
					month: "long",
					day: "numeric",
				})}</time
			>
			<span>•</span>
			<!-- TODO: Show updated article date -->
			<!-- TODO: Show reading time -->
		</div>
	</div>
	<div id="post-content"><post.Component /></div>
</main>

<style lang="postcss">
	@reference "tailwindcss";

	#post-content {
		@apply grid grid-cols-[1fr_calc(min(65ch,100%)-32px)_1fr];

		& > :global(*) {
			@apply col-start-2;
		}
	}
</style>
