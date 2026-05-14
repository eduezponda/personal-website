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
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-on-surface transition-colors mb-10"
      >
        <ArrowLeft size={14} /> Blog
      </Link>

      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <time className="text-label text-outline">{post.date}</time>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-label text-on-surface-variant border border-outline-variant rounded px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-section-title text-on-surface">{post.title}</h1>
        {post.excerpt && (
          <p className="mt-4 text-lg text-on-surface-variant leading-relaxed">
            {post.excerpt}
          </p>
        )}
      </header>

      <article className="prose prose-invert prose-sm max-w-none
        prose-headings:text-on-surface prose-headings:font-semibold
        prose-p:text-on-surface-variant prose-p:leading-relaxed
        prose-a:text-accent prose-a:no-underline hover:prose-a:underline
        prose-code:text-accent prose-code:bg-surface-container prose-code:rounded prose-code:px-1
        prose-pre:bg-surface-container prose-pre:border prose-pre:border-outline-variant
        prose-strong:text-on-surface
        prose-li:text-on-surface-variant
        prose-hr:border-outline-variant">
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}
