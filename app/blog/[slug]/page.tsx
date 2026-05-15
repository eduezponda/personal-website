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
    title: `${post.title} — Eduardo Ezponda`,
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
        className="prose prose-sm max-w-none
        prose-headings:text-on-surface prose-headings:font-semibold
        prose-p:text-secondary prose-p:leading-relaxed
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
        prose-code:text-primary prose-code:bg-surface-container prose-code:rounded prose-code:px-1
        prose-pre:bg-surface-container prose-pre:border prose-pre:border-outline-variant
        prose-strong:text-on-surface
        prose-li:text-secondary
        prose-hr:border-outline-variant"
      >
        <MDXRemote source={post.content} />
      </article>
    </main>
  );
}
