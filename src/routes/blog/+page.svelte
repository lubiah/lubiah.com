<script lang="ts">
    import PencilIcon from "virtual:icons/stash/pencil-writing-light";
    import CalendarIcon from "~icons/material-symbols/calendar-month-outline-rounded";
    import ClockIcon from "~icons/heroicons/clock";
    import type { PageProps } from "./$types";
    import Head from "svelte-seo";
    import TagsSelector from "./components/TagsSelector";

    const seo = {
        title: "My Blog • Lubiah",
        description:
            "Thoughts and notes on code, life and everything in between",
    };
    const { data }: PageProps = $props();
</script>

<Head
    title={seo.title}
    description={seo.description}
    keywords="Lucretius Blog, Biah blog, software developer blog"
    canonical="https://www.lubiah.com/blog"
    openGraph={{
        title: seo.title,
        description: seo.description,
    }}
    twitter={{
        title: seo.title,
        description: seo.description,
    }}
/>
<main class="px-4 md:px-0 md:mt-30">
    <div>
        <h1 class="flex gap-x-1 mt-0"><PencilIcon /> Writings.</h1>
        <p class="text-gray-800 mt-2">
            Thoughts and notes on code, life and everything in between
        </p>
    </div>
    <div class="mt-20">
        <TagsSelector />
        <ul class="mt-10">
            {#each data.posts as post}
                {@const date = post.date?.toLocaleString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
                <li>
                    <a
                        class="no-underline py-6 border-t border-gray-300 hover:bg-gray-100 block"
                        href="/blog/{post.slug}"
                    >
                        <article>
                            <div
                                class="font-mono text-sm text-gray-700 flex gap-x-2"
                            >
                                <span class="flex gap-x-1">
                                    <CalendarIcon />
                                    <time datetime={post.date.toISOString()}
                                        >{date}</time
                                    >
                                </span>
                                •
                                <span class="flex gap-x-1">
                                    <ClockIcon />
                                    <span>{post.readingTime.text}</span>
                                </span>
                            </div>
                            <h2 class="text-lg font-medium mt-1">
                                {post.title}
                            </h2>
                            <p class="mt-1 text-gray-700 line-clamp-3 text-sm">
                                {post.description}
                            </p>
                        </article>
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</main>
