<script lang="ts">
    import EmailIcon from "virtual:icons/fluent/mail-32-regular";
    import BlueskyLogo from "virtual:icons/logos/bluesky";
    import GithubLogo from "virtual:icons/octicon/mark-github-24";
    import PeerlistLogo from "virtual:icons/simple-icons/peerlist";
</script>

<section
    class="pt-30 pb-30 text-gray-50 bg-no-repeat bg-cover px-4 md:px-[unset]"
    style="background-image: url(./images/hero-background.svg);"
>
    <div class="max-w-(--max-body-width) mx-auto">
        <div class="max-w-[760px]">
            <h1 class="text-display-1 mb-6">
                Making software accessible, secure and built to last.
            </h1>
            <p class="mb-6">
                I build software that's accessible to everyone, secure from the
                ground up, and reliable when it matters. I enjoy tackling
                challenging problems and sharing what I learn along the way.
                Whether it's contributing to open-source projects or writing
                about the solutions I discover, I'm driven by the belief that
                good code should make a difference.
            </p>
            <div class="flex gap-x-3">
                {#each [GithubLogo, BlueskyLogo, PeerlistLogo, EmailIcon] as Icon}
                    <span
                        class="bg-white rounded-full p-2 hover:outline-4 outline-gray-500 transition-all group hover:scale-110"
                    >
                        <Icon color="black" />
                    </span>
                {/each}
            </div>
        </div>
    </div>
</section>
<div>
    <style lang="postcss">
        body {
            max-width: unset;
        }
    </style>
</div>
