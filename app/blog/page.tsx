import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { BlogPostCard } from "@/features/BlogPostCard";

export const metadata = {
  title: "Blog | Eduardo Ezponda",
  description: "Notes on data science, value investing, and building things.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag } = await searchParams;
  const posts = getAllPosts();
  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags))).sort();
  const filteredPosts = tag ? posts.filter((post) => post.tags.includes(tag)) : posts;

  return (
    <main className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl">
      {/* Hero */}
      <section className="max-w-3xl mb-xl">
        <h1 className="text-hero-lg text-on-surface mb-sm">Blog</h1>
        <p className="text-body-lg text-secondary">
          Notes on data science, value investing, and building things.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-xl">
        {/* Post list */}
        <div className="md:col-span-8">
          {filteredPosts.length === 0 ? (
            <div className="border-t border-outline-variant py-lg text-center">
              <p className="text-body-md text-secondary">
                {tag
                  ? `No posts tagged "${tag}" yet.`
                  : "No posts yet. First post coming soon."}
              </p>
            </div>
          ) : (
            <div className="flex flex-col border-t border-outline-variant">
              {filteredPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="md:col-span-4 space-y-lg">
          <div className="bg-surface-container-lowest border border-outline-variant p-md rounded-lg">
            <h3 className="text-title-md mb-sm">Browse by Topic</h3>
            <div className="flex flex-wrap gap-xs">
              <Link
                href="/blog"
                className={`px-sm py-base text-label-sm rounded-full transition-colors ${
                  !tag
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                All
              </Link>
              {allTags.map((t) => (
                <Link
                  key={t}
                  href={`/blog?tag=${encodeURIComponent(t)}`}
                  className={`px-sm py-base text-label-sm rounded-full transition-colors ${
                    tag === t
                      ? "bg-primary text-on-primary"
                      : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
                  }`}
                >
                  {t}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Follow CTA */}
      <section className="mt-xl">
        <div className="bg-surface-container-lowest border border-outline-variant p-lg md:p-xl rounded-lg flex flex-col md:flex-row items-center justify-between gap-lg">
          <div className="flex flex-col gap-xs">
            <h3 className="text-title-lg text-on-surface">
              Follow the Journey
            </h3>
            <p className="text-body-lg text-secondary">
              Want to follow along? Reach out on LinkedIn or GitHub.
            </p>
          </div>
          <div className="flex gap-md">
            <a
              href="https://www.linkedin.com/in/eduardo-ezponda-igea-104538230/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-xs text-label-sm text-primary hover:underline"
            >
              <span className="material-symbols-outlined">link</span>
              LinkedIn
            </a>
            <a
              href="https://github.com/eduezponda"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-xs text-label-sm text-primary hover:underline"
            >
              <span className="material-symbols-outlined">code</span>
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
