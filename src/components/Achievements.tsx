import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { achievements, type Achievement } from '@/data/content';

type KindFilter = 'all' | Achievement['kind'];

const KIND_FILTERS: { id: KindFilter; label: string }[] = [
  { id: 'all', label: 'All (17)' },
  { id: 'career', label: 'Career' },
  { id: 'cert', label: 'Certs' },
  { id: 'award', label: 'Awards' },
  { id: 'code', label: 'Code' },
  { id: 'education', label: 'Education' },
  { id: 'community', label: 'Community' },
];

export default function Achievements() {
  const [kind, setKind] = useState<KindFilter>('all');
  const railRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  const filtered = achievements.filter((a) => (kind === 'all' ? true : a.kind === kind));

  useEffect(() => {
    const el = railRef.current;
    if (el) el.scrollLeft = 0;
  }, [kind]);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;

    let rafId = 0;
    let last = performance.now();
    const speed = 28; // px per second

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      if (!pausedRef.current && el.scrollWidth > el.clientWidth) {
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 2) {
          el.scrollLeft = 0;
        } else {
          el.scrollLeft += speed * dt;
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [kind]);

  const scrollByCards = (dir: -1 | 1) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 360, behavior: 'smooth' });
  };

  return (
    <section id="achievements" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header + Controls */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="font-mono text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              05 / Milestones
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              A few proud moments.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              A collection of milestones, little victories, and moments that made the journey
              worthwhile. Some took years of hard work. Others took a lot of coffee.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-1.5">
              {KIND_FILTERS.map((f) => {
                const active = kind === f.id;
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setKind(f.id)}
                    className={`rounded-lg border px-3 py-1.5 font-mono text-xs font-medium transition-colors ${
                      active
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border bg-card text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                aria-label="Scroll achievements left"
                onClick={() => scrollByCards(-1)}
                className="flex size-9 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:border-primary/60"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Scroll achievements right"
                onClick={() => scrollByCards(1)}
                className="flex size-9 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:border-primary/60"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scrolling Milestone Rail */}
        <div
          ref={railRef}
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
          onTouchStart={() => {
            pausedRef.current = true;
          }}
          onTouchEnd={() => {
            pausedRef.current = false;
          }}
          className="mt-10 flex gap-6 overflow-x-auto pb-4 [scrollbar-width:thin]"
        >
          {filtered.map((item) => (
            <article
              key={`${item.title}-${item.date}`}
              className="flex w-[280px] shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40 sm:w-[320px]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-secondary/40">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="size-full object-contain"
                />
                <span className="absolute top-3 left-3 rounded-md bg-background/85 px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-wider text-primary uppercase backdrop-blur-md">
                  {item.kind}
                </span>
                <span className="absolute top-3 right-3 rounded-md bg-background/85 px-2.5 py-0.5 font-mono text-[10px] text-foreground backdrop-blur-md">
                  {item.date}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
