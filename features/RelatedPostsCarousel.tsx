"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { PostMeta } from "@/lib/blog";
import { RelatedPostCard } from "@/features/RelatedPostCard";

const GAP = 24; // matches --spacing-md
const MIN_ITEM_WIDTH = 200;

export function RelatedPostsCarousel({ posts }: { posts: PostMeta[] }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [{ itemWidth, padding, measured }, setDims] = useState({
    itemWidth: 280,
    padding: 130,
    measured: false,
  });
  const hasCentered = useRef(false);

  // Loop only makes sense with more than one post: prepend a clone of the
  // last post and append a clone of the first post, so navigating past
  // either edge always has a real-looking neighbor to land on.
  const loop = posts.length > 1;
  const extended = loop ? [posts[posts.length - 1], ...posts, posts[0]] : posts;
  const step = itemWidth + GAP;

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
      setDims({
        itemWidth: nextItemWidth,
        padding: (frame - nextItemWidth) / 2,
        measured: true,
      });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  // Start centered on the first real post (the clone sits before it), once
  // the real frame width is known. useLayoutEffect so the clone never
  // flashes on screen before the jump.
  useLayoutEffect(() => {
    if (!loop || !measured || hasCentered.current) return;
    scrollRef.current?.scrollTo({ left: step, behavior: "instant" });
    hasCentered.current = true;
  }, [loop, measured, step]);

  // When a scroll settles with a boundary clone centered, silently jump to
  // the matching real post so the carousel loops without a visible seam.
  useEffect(() => {
    if (!loop) return;
    const el = scrollRef.current;
    if (!el) return;

    const settle = () => {
      // index 0 sits at scrollLeft 0 by construction (the padding already
      // accounts for centering it), so no extra offset here.
      const index = Math.round(el.scrollLeft / step);
      if (index <= 0) {
        el.scrollTo({ left: posts.length * step, behavior: "instant" });
      } else if (index >= extended.length - 1) {
        el.scrollTo({ left: step, behavior: "instant" });
      }
    };

    let timeout: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(settle, 120);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("scrollend", settle);
    return () => {
      clearTimeout(timeout);
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("scrollend", settle);
    };
  }, [loop, step, posts.length, extended.length]);

  const scrollByCard = (direction: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <div className="pb-lg md:pb-xl">
      <div ref={wrapperRef} className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
          style={{ gap: GAP, paddingLeft: padding, paddingRight: padding }}
        >
          {extended.map((post, i) => (
            <div
              key={`${post.slug}-${i}`}
              data-carousel-item
              className="snap-center shrink-0"
              style={{ width: itemWidth }}
            >
              <RelatedPostCard post={post} />
            </div>
          ))}
        </div>

        {loop && (
          <>
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous post"
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant shadow-sm hover:border-primary-container hover:text-primary transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next post"
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-surface-container-lowest border border-outline-variant text-on-surface-variant shadow-sm hover:border-primary-container hover:text-primary transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
