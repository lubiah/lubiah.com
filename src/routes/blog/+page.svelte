<script lang="ts">
    import type { PageProps } from "./$types";
    const { data }: PageProps = $props();
</script>

<ul style="list-style-type:disc">
    {#each data.posts as post}
        <li><a style="display: block;color: var(--color-orange-700);padding: 6px 0" href="/blog/{post.slug}">{post.title}</a></li>
    {/each}
</ul>
