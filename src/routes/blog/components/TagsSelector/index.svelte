<script lang="ts">
    import { getTags } from "../..";
    import ChevronLeftIcon from "virtual:icons/heroicons/chevron-left-20-solid";
    import ChevronRightIcon from "virtual:icons/heroicons/chevron-right-20-solid";
    const tags = getTags();
</script>

<div class="flex justify-between gap-x-4">
    <button class="border border-gray-300 p-1 rounded"
        ><ChevronLeftIcon /></button
    >
    <ul class="flex gap-x-4 text-sm overflow-x-auto">
        {#each tags as tag}
            <li class="px-2.5 py-1 border border-gray-300 rounded">
                <a class="no-underline" href="/blog/tags/{tag.slug}"
                    >{tag.name}</a
                >
            </li>
        {/each}
    </ul>
    <button class="border border-gray-300 p-1 rounded"
        ><ChevronRightIcon /></button
    >
</div>

<style lang="postcss">
    ul {
        &::-webkit-scrollbar {
            width: 0;
            height: 0;
        }
    }
</style>
