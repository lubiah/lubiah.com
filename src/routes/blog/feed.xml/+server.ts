// import { allPosts } from "$content-collections";
// import { encodeHtml } from "$lib/utils";
// import type { RequestHandler } from "@sveltejs/kit";
// import { render } from 'svelte/server';


// export const GET: RequestHandler = async () => {
//   const posts = await Promise.all(allPosts.map(async(post)=>{
//     const component = await import(`../[slug=post]/content/${post.slug}/index.md`);
//     const content = render(component.default).body;
//     return {...post, content};
//   }));
//   return new Response(
//     `<?xml version="1.0" encoding="UTF-8" ?>
//         <rss version="2.0">
//             <channel>
//                 <title>Lubiah • Personal website of Lucretius Biah</title>
//                 <description>My thoughts and notes on various topics</description>
//                 <link>https://www.lubiah.com</link>
//                 ${
//       posts.map((article) => {
//         return `<item>
//                         <title>${article.title}</title>
//                         <link>https://www.lubiah.com/garden/${article.slug}</link>
//                         <description>${encodeHtml(article.content)}</description>
//                         <category>${article.tags?.join(" ")}</category>
//                     </item>
//                     `;
//       })
//     }
//             </channel>
//         </rss>
//         `,
//   );
// };
