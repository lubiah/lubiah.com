<script lang="ts">
    import PencilIcon from "virtual:icons/stash/pencil-writing-light";
    import CalendarIcon from "~icons/material-symbols/calendar-month-outline-rounded";
    import ClockIcon from "~icons/heroicons/clock";

    import type { PageProps } from "./$types";

    const { data }: PageProps = $props();
</script>

<main class="md:mt-30">
    <div>
        <h1 class="flex gap-x-1 mt-0"><PencilIcon /> Writings.</h1>
        <p class="text-gray-800 mt-2">
            Thoughts and notes on code, life and everything in between
        </p>
    </div>
    <div class="mt-20">
        <ul>
            {#each data.posts as post}
                {@const date = post.date?.toLocaleString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
                <li class="py-6 border-t border-gray-300">
                    <article>
                        <a class="no-underline" href="/blog/{post.slug}">
                            <div
                                class="font-mono text-sm text-gray-700 flex gap-x-4"
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
                            <p class="mt-1 text-gray-700 line-clamp-3">
                                {post.description}
                            </p>
                        </a>
                    </article>
                </li>
            {/each}
        </ul>
    </div>
</main>
