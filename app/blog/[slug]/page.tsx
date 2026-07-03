import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllPosts, getPost } from "@/lib/blog";
import { BlogArticle } from "@/features/BlogArticle";
import { RelatedPostsCarousel } from "@/features/RelatedPostsCarousel";

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

  const morePosts = getAllPosts().filter((p) => p.slug !== slug);

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
        {/* Date and reading time — own line, muted */}
        <div className="flex items-center gap-sm mb-sm flex-wrap">
          <time className="text-label-sm text-secondary uppercase tracking-widest">
            {post.date}
          </time>
          <span className="text-label-sm text-secondary uppercase tracking-widest">
            {post.readingTime} min read
          </span>
        </div>

        {/* Title — reuses the site's hero type scale, not one-off pixel values */}
        <h1 className="text-hero-lg-mobile md:text-hero-sidebar text-on-surface mb-lg">
          {post.title}
        </h1>

        {/* Tags — pill style */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-xs mb-lg">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="text-label-sm text-secondary bg-surface-container px-sm py-xs rounded-full border border-outline-variant hover:border-outline hover:text-on-surface transition-colors"
              >
                {tag}
              </Link>
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

      <BlogArticle content={post.content} />

      {/* More from the blog */}
      {morePosts.length > 0 && (
        <section className="mt-xl">
          <div className="bg-surface-container-low border border-outline-variant rounded-lg p-lg md:p-xl">
            <span className="block text-label-sm text-primary uppercase tracking-widest mb-xs">
              Continue Reading
            </span>
            <h2 className="text-title-lg text-on-surface mb-lg">
              More from the Blog
            </h2>
            <RelatedPostsCarousel posts={morePosts} />
          </div>
        </section>
      )}
    </main>
  );
}
