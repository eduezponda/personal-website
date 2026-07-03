import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PostMeta } from "@/lib/blog";

export function RelatedPostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col justify-between gap-md bg-surface-container-lowest border border-outline-variant rounded-lg p-md hover:border-primary-container hover:-translate-y-0.5 transition-all"
    >
      <div>
        <div className="flex items-center gap-sm mb-xs flex-wrap">
          <span className="text-label-sm text-secondary uppercase tracking-widest">
            {post.date}
          </span>
          <span className="text-label-sm text-secondary uppercase tracking-widest">
            {post.readingTime} min read
          </span>
        </div>
        <h3 className="text-title-md text-on-surface group-hover:text-primary transition-colors leading-snug">
          {post.title}
        </h3>
      </div>
      <div className="flex items-center gap-xs text-label-sm text-primary uppercase tracking-widest">
        Read post
        <ArrowRight
          size={14}
          className="group-hover:translate-x-1 transition-transform duration-300"
        />
      </div>
    </Link>
  );
}
