"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { PostMeta } from "@/lib/blog";
import { RelatedPostCard } from "@/features/RelatedPostCard";

export function RelatedPostsCarousel({ posts }: { posts: PostMeta[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollPrev(el.scrollLeft > 4);
    setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-carousel-item]");
    const distance = (card?.offsetWidth ?? 300) + 16;
    el.scrollBy({ left: distance * direction, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex justify-end gap-xs mb-sm">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          disabled={!canScrollPrev}
          aria-label="Previous post"
          className="p-xs rounded-full border border-outline-variant text-on-surface-variant hover:border-primary-container hover:text-primary transition-colors disabled:opacity-30 disabled:pointer-events-none"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          disabled={!canScrollNext}
          aria-label="Next post"
          className="p-xs rounded-full border border-outline-variant text-on-surface-variant hover:border-primary-container hover:text-primary transition-colors disabled:opacity-30 disabled:pointer-events-none"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-md overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide pb-xs"
      >
        {posts.map((post) => (
          <div
            key={post.slug}
            data-carousel-item
            className="snap-start shrink-0 w-[220px] sm:w-[300px]"
          >
            <RelatedPostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
