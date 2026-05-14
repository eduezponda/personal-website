import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog — Eduardo Ezponda",
  description: "DS tutorials, value investing notes, and career reflections.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-5xl mx-auto px-6 pt-28 pb-20">
      <div className="mb-12">
        <p className="text-label text-accent mb-3">Writing</p>
        <h1 className="text-section-title text-on-surface mb-4">Blog</h1>
        <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
          DS tutorials, value investing notes, career reflections, and
          project deep-dives.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="border border-dashed border-outline-variant rounded-lg p-12 text-center">
          <p className="text-label text-outline mb-2">No posts yet</p>
          <p className="text-sm text-on-surface-variant">First post coming soon.</p>
        </div>
      ) : (
        <div className="flex flex-col divide-y divide-outline-variant">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group py-6 flex flex-col gap-2 hover:bg-surface-low -mx-4 px-4 rounded transition-colors"
            >
              <div className="flex items-center gap-3">
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
              <h2 className="text-base font-semibold text-on-surface group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="text-sm text-on-surface-variant leading-relaxed max-w-2xl">
                  {post.excerpt}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
