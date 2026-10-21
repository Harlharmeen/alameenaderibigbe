'use client';

import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

interface TestimonialsSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSlider({
  testimonials,
}: TestimonialsSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (el) {
        el.removeEventListener('scroll', checkScroll);
      }
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.querySelector('article')?.clientWidth || 400;
    const scrollAmount = direction === 'left' ? -(cardWidth + 24) : cardWidth + 24;

    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative">
      {/* Navigator Controls Header */}
      <div className="mb-8 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[color:var(--muted)]">
          Swipe or navigate · {testimonials.length} reviews
        </p>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--card)] text-[color:var(--fg)] transition hover:border-[color:var(--fg)] hover:bg-[color:var(--bg)] disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--card)] text-[color:var(--fg)] transition hover:border-[color:var(--fg)] hover:bg-[color:var(--bg)] disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel */}
      <div
        ref={scrollRef}
        className="hide-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 pt-1"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {testimonials.map((testimonial, idx) => (
          <article
            key={testimonial.name}
            className="testimonial-card flex w-[85vw] max-w-[480px] flex-shrink-0 snap-start flex-col justify-between border border-[color:var(--line)] bg-[color:var(--card)] p-8 transition-transform duration-300 hover:-translate-y-1 sm:w-[460px] md:p-10"
          >
            <div>
              <div className="mb-6 flex items-center justify-between text-[color:var(--accent)]">
                <Quote size={28} className="opacity-70" />
                <span className="mono text-xs text-[color:var(--muted)]">
                  0{idx + 1} / 0{testimonials.length}
                </span>
              </div>
              <blockquote className="text-lg font-medium leading-relaxed tracking-[-0.02em] md:text-xl">
                “{testimonial.quote}”
              </blockquote>
            </div>

            <div className="mt-8 border-t border-[color:var(--line)] pt-5">
              <p className="text-sm font-bold tracking-tight text-[color:var(--fg)]">
                {testimonial.name}
              </p>
              <p className="mt-1 text-xs text-[color:var(--muted)]">
                {testimonial.role}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
