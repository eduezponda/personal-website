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
    <main className="max-w-3xl mx-auto px-margin-desktop py-xl">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-body-md text-secondary hover:text-on-surface transition-colors mb-lg"
      >
        <ArrowLeft size={14} /> Blog
      </Link>

      <header className="mb-xl">
        <div className="flex flex-wrap items-center gap-sm mb-md">
          <time className="text-label-sm text-secondary uppercase">{post.date}</time>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-label-sm text-on-surface-variant border border-outline-variant rounded px-xs py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-hero-lg-mobile md:text-hero-lg text-on-surface">
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="mt-md text-body-lg text-secondary leading-relaxed">
            {post.excerpt}
          </p>
        )}
      </header>

      <article
        className="blog-article prose prose-lg max-w-none
        prose-headings:text-on-surface prose-headings:font-bold prose-headings:tracking-tight
        prose-h2:mt-12 prose-h2:mb-5
        prose-h3:mt-8 prose-h3:mb-3
        prose-p:text-secondary prose-p:leading-[1.85]
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
        prose-strong:text-on-surface prose-strong:font-semibold
        prose-code:text-primary prose-code:bg-surface-container-high prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm
        prose-pre:bg-surface-container-high prose-pre:border prose-pre:border-outline-variant prose-pre:rounded-lg prose-pre:p-6
        prose-blockquote:border-l-4 prose-blockquote:pl-5 prose-blockquote:text-secondary prose-blockquote:font-normal
        prose-li:text-secondary prose-li:leading-[1.85]
        prose-img:rounded-lg prose-img:my-10
        prose-hr:border-outline-variant"
      >
        <MDXRemote source={post.content} />
      </article>
    </main>
  );
}
