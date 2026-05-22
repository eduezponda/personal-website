import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog | Eduardo Ezponda",
  description: "Notes on data science, value investing, and building things.",
};

const categories = ["Engineering", "DS", "Value Investing", "Career"];

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-7xl mx-auto px-margin-desktop py-xl">
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
          {posts.length === 0 ? (
            <div className="border-t border-outline-variant py-lg text-center">
              <p className="text-body-md text-secondary">
                No posts yet. First post coming soon.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-0 border-t border-outline-variant">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group py-lg border-b border-outline-variant hover:bg-surface-container-low transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-md px-base">
                    <div className="flex-1">
                      <div className="flex items-center gap-sm mb-xs">
                        <span className="text-label-sm text-secondary uppercase tracking-widest">
                          {post.date}
                        </span>
                        {post.tags[0] && (
                          <span className="bg-surface-container-highest text-on-surface-variant px-xs py-0.5 rounded text-label-sm uppercase">
                            {post.tags[0]}
                          </span>
                        )}
                      </div>
                      <h2 className="text-title-lg text-on-surface group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                    </div>
                    <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                      <span className="material-symbols-outlined text-primary">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="md:col-span-4 space-y-lg">
          <div className="bg-surface-container-lowest border border-outline-variant p-md rounded-lg">
            <h3 className="text-title-md mb-sm">Categories</h3>
            <div className="flex flex-wrap gap-xs">
              {categories.map((cat, i) => (
                <span
                  key={cat}
                  className={`px-sm py-base text-label-sm rounded-full ${
                    i === categories.length - 1
                      ? "bg-primary text-on-primary"
                      : "bg-surface-container text-on-surface-variant"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Follow CTA */}
      <section className="mt-xl">
        <div className="bg-surface-container-lowest border border-outline-variant p-lg md:p-xl rounded-lg flex flex-col md:flex-row items-center justify-between gap-lg">
          <div className="flex items-baseline gap-x-md">
            <h3 className="text-title-lg text-on-surface shrink-0">
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
