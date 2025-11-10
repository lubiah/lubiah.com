---
title: How To Prevent Theme Colour From Flickering In Svelte Or SvelteKit
description: Learn how to prevent your theme colours from flickering when your page loads in your Svelte or SvelteKit website
date: 2021-10-15
tags:
  - svelte
---

<script lang="ts">
    import flickering from "./images/flickering.gif";
    import non_flickering from "./images/non_flickering.gif";
</script>

Ever since I started using Svelte, my theme colours has always been flickering on page load. Finally I found a workaround

At first, I was changing my website’s theme colour inside the `onMount` function but the theme colours were always flickering. The reason was that, the body loads before the `onMount` function sets the theme colour.

<figure>
    <img alt="page with it's theme colours flickering" height="300" width="350" loading="lazy" src="{flickering}"/>
    <figcaption>Here’s a gif showing the problem</figcaption>
</figure>

As you can see, when the page is reloaded, the light theme is first shown, then after the document has finished loading, the `onMount` will then set the theme colour.

The only probable solution is to set the theme colour before the body has even loaded. How do we do that?, we insert a script tag inside the head element and this code will run before the body is loaded. That’s the best way we can prevent the flickering of colours.

Okay, You can write this code in the component in which you use to toggle in-between the themes.

```svelte
<svelte:head>
	<script>
		if (document) {
			let mode = localStorage.theme || 'light';
			if (mode === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.classList.add('dark');
				localStorage.theme = 'dark';
			} else {
				document.documentElement.classList.remove('dark');
				localStorage.theme = 'light';
			}
		}
	</script>
</svelte:head>
```

In order to access the head element, we used the `:svelte:<svelte:head>` component. Then we created the script tag just as we would on our normal HTML pages. The next statements are the important ones, the reason why we used `:js:if (document)` is that, this code first gets evaluated on the server before being rendered on the client, so if you try to access document on the server, it will pop up an error.

I know SvelteKit provides the `{ browser }` constant through the `$app/env` module but mind you, this is not available in the custom script tag we made, you will need to use your own workaround and that’s why we are using document to check.

Then on the next line, we try to retrieve the theme from the `localStorage`, if it’s not set, it defaults to “light” theme;
The next steps are the addition of classes and setting of the theme in the `localStorage`.

<figure>
    <img alt="Demonstration showing that the page is no more flickering" widht="350" height="300" loading="lazy" src={non_flickering}>
    <figcaption>Now, page doesn't flicker anymore</figcaption>
</figure>
