import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Eduardo Ezponda`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="max-w-[680px] mx-auto px-5 py-xl">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-label-sm text-secondary hover:text-on-surface transition-colors uppercase tracking-widest mb-xl"
      >
        <ArrowLeft size={12} /> Blog
      </Link>

      <header className="mb-xl">
        {/* Date — own line, muted */}
        <time className="block text-label-sm text-secondary uppercase tracking-widest mb-sm">
          {post.date}
        </time>

        {/* Title — lighter weight than hero */}
        <h1 className="text-[28px] leading-[1.2] font-bold tracking-tight text-on-surface mb-lg md:text-[40px]">
          {post.title}
        </h1>

        {/* Tags — pill style */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-xs mb-lg">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-label-sm text-secondary bg-surface-container px-sm py-xs rounded-full border border-outline-variant"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Excerpt — separated by divider */}
        {post.excerpt && (
          <>
            <div className="w-full h-px bg-outline-variant/50 mb-lg" />
            <p className="text-[16px] md:text-[18px] text-secondary leading-[1.7]">
              {post.excerpt}
            </p>
          </>
        )}
      </header>

      {/* Section divider */}
      <div className="w-full h-px bg-outline-variant/40 mb-xl" />

      <article
        className="blog-article prose md:prose-lg max-w-none
        prose-headings:text-on-surface prose-headings:font-bold prose-headings:tracking-tight
        prose-h2:mt-12 prose-h2:mb-5
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
        <MDXRemote source={post.content} />
      </article>
    </main>
  );
}
