<script lang="ts">
    import { onMount } from "svelte";
    import { getTags } from "../..";
    import { useDebounce } from "runed";
    import ChevronLeftIcon from "virtual:icons/heroicons/chevron-left-20-solid";
    import ChevronRightIcon from "virtual:icons/heroicons/chevron-right-20-solid";
    const tags = getTags();

    let tagsListElement = $state<Element>();
    let currentScrollPercent = $state<number | undefined>(undefined);
    const scrollablePercent = 30;

    const scrollACertainPercent = (percent: number) => {
        if (percent > 100) percent = 100;
        if (!tagsListElement) return;
        const scrollableWidth =
            tagsListElement.scrollWidth - tagsListElement.clientWidth;
        const percentInPx = (percent / 100) * scrollableWidth;
        tagsListElement.scrollLeft = percentInPx;
    };

    const getCurrentScrollPercent = () => {
        if (!tagsListElement) return;
        return (
            (tagsListElement.scrollLeft /
                (tagsListElement.scrollWidth - tagsListElement.clientWidth)) *
            100
        );
    };

    onMount(() => {});
</script>

<div class="flex justify-between gap-x-4">
    {#if !(currentScrollPercent === 0)}
        <button
            class="border border-gray-300 p-1 rounded"
            onclick={() => {
                currentScrollPercent = getCurrentScrollPercent();
                if (currentScrollPercent === undefined) return;
                scrollACertainPercent(currentScrollPercent - scrollablePercent);
            }}><ChevronLeftIcon /></button
        >
    {/if}
    <ul
        class="flex gap-x-4 text-sm overflow-x-auto scroll-smooth"
        bind:this={tagsListElement}
        onscroll={useDebounce(() => {
            currentScrollPercent = getCurrentScrollPercent();
        }, 200)}
    >
        {#each tags as tag}
            <li class="px-2.5 py-1 border border-gray-300 rounded">
                <a class="no-underline" href="/blog/tags/{tag.slug}"
                    >{tag.name}</a
                >
            </li>
        {/each}
    </ul>
    {#if !(currentScrollPercent === 100)}
        <button
            class="border border-gray-300 p-1 rounded"
            onclick={() => {
                currentScrollPercent = getCurrentScrollPercent();
                if (currentScrollPercent === undefined) return;
                scrollACertainPercent(currentScrollPercent + scrollablePercent);
            }}><ChevronRightIcon /></button
        >
    {/if}
</div>

<style lang="postcss">
    ul {
        &::-webkit-scrollbar {
            width: 0;
            height: 0;
        }
    }
</style>
