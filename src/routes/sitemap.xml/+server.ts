// import { allPosts } from "$content-collections";
// import type { RequestHandler } from "@sveltejs/kit";

// export const GET: RequestHandler = async () => {
//   const routes: { url: string; priority: number }[] = [{ url: "https://www.lubiah.com", priority: 1 }];
//   let xml = "";
//   allPosts.forEach(post => routes.push({ url: `https://www.lubiah.com/blog/${post.slug}`, priority: 1 }));

//   routes.forEach(route => {
//     xml += `
//     <url>
//         <loc>${route.url}</loc>
//         <changefreq>weekly</changefreq>
//         <priority>${route.priority}</priority>
//     </url>
//     `;
//   });
//   let sitemap = `
//     <?xml version="1.0" encoding="UTF-8"?>
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//     ${xml}
//     </urlset>
//     `;
//   return new Response(sitemap.trim(), {
//     headers: {
//       "Content-Type": "application/xml; charset=utf-8",
//     },
//   });
// };
