<script lang="ts">
    import "../css/app.tailwind.css";
    import { dev } from "$app/environment";
    let { children } = $props();
</script>

{@render children()}

{#if !dev}
    <a
        title="Privacy-friendly Web Analytics"
        href="https://clicky.com/101498747"
        ><img
            alt="Clicky"
            src="//static.getclicky.com/media/links/badge.gif"
        /></a
    >
    <script async data-id="101498747" src="//static.getclicky.com/js"></script>
    <noscript
        ><p>
            <img
                alt="Clicky"
                width="1"
                height="1"
                src="//in.getclicky.com/101498747ns.gif"
            />
        </p></noscript
    >
{/if}
