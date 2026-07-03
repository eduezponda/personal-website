import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

export function BlogArticle({ content }: { content: string }) {
  return (
    <article
      className="blog-article prose md:prose-lg max-w-none
      prose-headings:text-on-surface prose-headings:font-bold prose-headings:tracking-tight
      prose-h2:mt-12 prose-h2:mb-5 prose-h2:pl-4 prose-h2:border-l-[3px] prose-h2:border-primary-container
      prose-h3:mt-8 prose-h3:mb-3
      prose-p:text-secondary prose-p:leading-[1.7]
      prose-a:text-primary prose-a:no-underline hover:prose-a:underline
      prose-strong:text-on-surface prose-strong:font-semibold
      prose-code:text-primary prose-code:bg-surface-container-high prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm
      prose-pre:bg-surface-container-high prose-pre:border prose-pre:border-outline-variant prose-pre:rounded-lg prose-pre:p-6
      prose-blockquote:border-l-4 prose-blockquote:pl-5 prose-blockquote:text-secondary prose-blockquote:font-normal
      prose-li:text-secondary prose-li:leading-[1.7]
      prose-img:rounded-lg prose-img:my-10
      prose-hr:border-outline-variant"
    >
      <MDXRemote
        source={content}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
      />
    </article>
  );
}
