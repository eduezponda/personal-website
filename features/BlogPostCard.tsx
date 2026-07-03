import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PostMeta } from "@/lib/blog";

export function BlogPostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block py-lg border-b border-outline-variant hover:bg-surface-container-low transition-colors"
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-md px-base">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-sm mb-xs flex-wrap">
            <span className="text-label-sm text-secondary uppercase tracking-widest">
              {post.date}
            </span>
            <span className="text-label-sm text-secondary uppercase tracking-widest">
              {post.readingTime} min read
            </span>
            {post.tags[0] && (
              <span className="bg-surface-container-highest text-on-surface-variant px-xs py-0.5 rounded text-label-sm uppercase">
                {post.tags[0]}
              </span>
            )}
          </div>
          <h2 className="text-title-lg text-on-surface group-hover:text-primary transition-colors mb-xs">
            {post.title}
          </h2>
          {post.excerpt && (
            <p className="text-body-md text-secondary leading-relaxed line-clamp-2 max-w-2xl">
              {post.excerpt}
            </p>
          )}
        </div>
        <div className="flex items-center self-start md:self-center shrink-0 pt-1">
          <ArrowRight
            size={18}
            className="text-primary group-hover:translate-x-1 transition-transform duration-300"
          />
        </div>
      </div>
    </Link>
  );
}
