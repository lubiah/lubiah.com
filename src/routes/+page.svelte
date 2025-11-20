<script lang="ts">
    import EmailIcon from "virtual:icons/fluent/mail-32-regular";
    import BlueskyLogo from "virtual:icons/logos/bluesky";
    import GithubLogo from "virtual:icons/octicon/mark-github-24";
    import PeerlistLogo from "virtual:icons/simple-icons/peerlist";
    import Head from "svelte-seo";

    const seo = {
        title: "My personal space on the internet • Lubiah",
        description:
            "My little space on the internet where I write notes and display my projects",
    };

    const socials = [
        {
            component: GithubLogo,
            url: "https://www.github.com/lubiah",
        },
        {
            component: BlueskyLogo,
            url: "https://bsky.app/profile/lubiah.bsky.social",
        },
        {
            component: PeerlistLogo,
            url: "https://peerlist.io/lubiah",
        },
        {
            component: EmailIcon,
            // TODO use a temporary email
            url: "mailto:lucretiusbiah@protonmail.com",
        },
    ];
</script>

<Head
    title={seo.title}
    description={seo.description}
    applicationName="Lubiah"
    keywords="Lucretius Biah, software developer,Lucretius, Ghanaian developer, python developer ghana"
    twitter={{
        title: seo.title,
        description: seo.description,
    }}
    openGraph={{
        title: seo.title,
        description: seo.description,
    }}
/>

<section
    class="pt-30 pb-30 text-gray-50 bg-no-repeat bg-cover px-4 md:px-[unset]"
    style="background-image: url(./images/hero-background.svg);"
>
    <div class="max-w-(--max-body-width) mx-auto">
        <div class="max-w-[760px]">
            <h1 class="text-display-1 mt-0">
                Making software accessible, secure and built to last.
            </h1>
            <p class="mt-6">
                I build software that's accessible to everyone, secure from the
                ground up, and reliable when it matters. I enjoy tackling
                challenging problems and sharing what I learn along the way.
                Whether it's contributing to open-source projects or writing
                about the solutions I discover, I'm driven by the belief that
                good code should make a difference.
            </p>
            <div class="flex gap-x-3 mt-6">
                {#each socials as social}
                    {@const Icon = social.component}
                    <a
                        rel="external"
                        href={social.url}
                        class="bg-white rounded-full p-2 hover:outline-4 outline-gray-500 transition-all group hover:scale-110"
                    >
                        <Icon color="black" />
                    </a>
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
