"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { PostMeta } from "@/lib/blog";
import { RelatedPostCard } from "@/features/RelatedPostCard";

const GAP = 24; // matches --spacing-md
const MIN_ITEM_WIDTH = 200;

export function RelatedPostsCarousel({ posts }: { posts: PostMeta[] }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [{ itemWidth, padding }, setDims] = useState({ itemWidth: 280, padding: 130 });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // Measure the real frame width so the centered item and the padding that
  // reveals exactly half of each neighbor stay in sync at any viewport size.
  // (CSS percentage width/padding on the same scrolling element resolve
  // against different boxes, so this can't be done with Tailwind classes alone.)
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const measure = () => {
      const frame = wrapper.clientWidth;
      const nextItemWidth = Math.max(MIN_ITEM_WIDTH, frame / 2 - GAP);
      setDims({ itemWidth: nextItemWidth, padding: (frame - nextItemWidth) / 2 });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

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
  }, [updateScrollState, itemWidth]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: (itemWidth + GAP) * direction, behavior: "smooth" });
  };

  return (
    <div className="pb-lg md:pb-xl">
      <div ref={wrapperRef} className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
          style={{ gap: GAP, paddingLeft: padding, paddingRight: padding }}
        >
          {posts.map((post) => (
            <div
              key={post.slug}
              data-carousel-item
              className="snap-center shrink-0"
              style={{ width: itemWidth }}
            >
              <RelatedPostCard post={post} />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          disabled={!canScrollPrev}
          aria-label="Previous post"
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant shadow-sm hover:border-primary-container hover:text-primary transition-colors disabled:opacity-0 disabled:pointer-events-none"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          disabled={!canScrollNext}
          aria-label="Next post"
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant shadow-sm hover:border-primary-container hover:text-primary transition-colors disabled:opacity-0 disabled:pointer-events-none"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
