<script lang="ts">
    import type { PageProps } from "./$types";
    const { data }: PageProps = $props();
</script>

<div>
    {#each data.posts as post}
        <a style="display: block;color: var(--color-orange-700);" href="/blog/{post.slug}">{post.title}</a>
    {/each}
</div>
