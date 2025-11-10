
import { defineConfig } from 'mdsx';
import { mdsx as mdsxPreprocess } from 'mdsx';
import remarkGfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';
import rehypeSlug from 'rehype-slug';

// import remarkHeadings from '@sveltinio/remark-headings';
// import remarkDirective from 'remark-directive';


export const mdsxConfig = defineConfig({
    extensions: ['.md'],
    remarkPlugins: [
        remarkGfm,
        [remarkEmoji, { accessible: true }],
    ],
    rehypePlugins: [
        rehypeSlug
    ]
});

export const mdsx = mdsxPreprocess(mdsxConfig);