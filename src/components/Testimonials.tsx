import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Mark, MarkerText } from '@/components/kokonutui/marker-text';
import { testimonials } from '@/data/content';

function HighlightedQuote({ quote, highlight }: { quote: string; highlight: string }) {
  const idx = quote.indexOf(highlight);
  if (idx === -1) return <>{quote}</>;
  const before = quote.slice(0, idx);
  const after = quote.slice(idx + highlight.length);
  return (
    <>
      {before}
      <Mark
        type="underline"
        color="#ff5005"
        strokeWidth={3}
        className="font-semibold text-primary"
      >
        {highlight}
      </Mark>
      {after}
    </>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const count = testimonials.length;

  const goTo = (nextIdx: number, dir: number) => {
    setDirection(dir);
    setIndex((nextIdx + count) % count);
  };

  useEffect(() => {
    if (paused) return;
    const timer = window.setTimeout(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % count);
    }, 12000);
    return () => window.clearTimeout(timer);
  }, [paused, count, index]);

  const current = testimonials[index];

  return (
    <section id="testimonials" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header + Controls */}
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <div className="font-mono text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              06 / Endorsements
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Don't just take my word for it.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              I've been lucky to work with some incredibly talented people along the way. Here's
              what a few of them had to say about working with me.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-muted-foreground">
              0{index + 1} / 0{count}
            </span>
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => goTo(index - 1, -1)}
              className="flex size-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:border-primary/60"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => goTo(index + 1, 1)}
              className="flex size-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:border-primary/60"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        {/* Large Testimonial Slider */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12 lg:p-16"
        >
          <Quote className="mb-6 size-8 text-primary/70 sm:size-10" />

          <div className="min-h-[220px] sm:min-h-[200px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.blockquote
                key={current.author}
                custom={direction}
                initial={{ opacity: 0, x: direction * 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -28 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col justify-between gap-8"
              >
                <MarkerText
                  show
                  className="text-xl leading-relaxed font-normal text-foreground sm:text-2xl lg:text-3xl lg:leading-relaxed"
                >
                  <HighlightedQuote quote={current.quote} highlight={current.highlight} />
                </MarkerText>

                <footer className="border-t border-border pt-6">
                  <div className="text-base font-bold text-foreground sm:text-lg">
                    {current.author}
                  </div>
                  <div className="mt-0.5 font-mono text-xs text-muted-foreground sm:text-sm">
                    {current.role}
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Dot Indicators */}
          <div className="mt-8 flex items-center gap-2">
            {testimonials.map((t, i) => {
              const active = i === index;
              return (
                <button
                  key={t.author}
                  type="button"
                  aria-label={`Show testimonial from ${t.author}`}
                  onClick={() => goTo(i, i > index ? 1 : -1)}
                  className={`h-1.5 rounded-full transition-all ${
                    active
                      ? 'w-8 bg-primary'
                      : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60'
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
