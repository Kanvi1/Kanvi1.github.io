import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, ExternalLink, ShieldAlert, X } from 'lucide-react';
import { projects, type Project, type ProjectCategory } from '@/data/content';

type Filter = 'all' | ProjectCategory;

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'web', label: 'Web / API' },
  { id: 'mobile', label: 'Mobile / AR' },
  { id: 'design', label: 'UI & Design' },
];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = projects.filter((p) =>
    filter === 'all' ? true : p.category.includes(filter)
  );

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selected]);

  return (
    <section id="projects" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header + Filter Bar */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="font-mono text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              03 / Portfolio
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Things I've brought to life.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              A mix of useful tools, creative experiments, and ideas that made it out of my head
              and into the real world.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter projects"
            className="inline-flex flex-wrap gap-1 rounded-xl border border-border bg-card p-1"
          >
            {FILTERS.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  role="tab"
                  aria-selected={active}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  className={`relative rounded-lg px-3.5 py-1.5 font-mono text-xs font-medium transition-colors ${
                    active ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="projectFilterPill"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      className="absolute inset-0 rounded-lg bg-primary"
                    />
                  )}
                  <span className="relative z-10">{f.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                onClick={() => setSelected(project)}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/50"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {project.impact && (
                    <span className="absolute top-3 left-3 rounded-md bg-background/85 px-2.5 py-1 font-mono text-[11px] font-semibold text-primary backdrop-blur-md">
                      {project.impact}
                    </span>
                  )}
                  <span className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-0.5 font-mono text-xs text-primary">{project.subtitle}</p>
                    <p className="mt-2 text-sm font-medium text-foreground/90">
                      {project.oneLiner}
                    </p>
                    <p className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {project.desc}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-border">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.96, y: 16, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 16, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
            >
              <div className="relative aspect-[16/9] w-full bg-secondary">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="size-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label="Close project details"
                  className="absolute top-3 right-3 flex size-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-black/80"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-2xl font-bold text-foreground">{selected.title}</h3>
                  {selected.impact && (
                    <span className="rounded-md bg-primary/10 px-2.5 py-1 font-mono text-xs font-semibold text-primary">
                      {selected.impact}
                    </span>
                  )}
                </div>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{selected.subtitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {selected.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {selected.restricted && (
                  <div className="mt-5 flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3.5 text-xs leading-relaxed text-muted-foreground">
                    <ShieldAlert className="mt-0.5 size-4 shrink-0 text-amber-500" />
                    <span>
                      This one's behind closed doors 🔒 - the code is private, but I'm happy to
                      talk through the architecture and design.
                    </span>
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-3">
                  {selected.link && (
                    <a
                      href={selected.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      View Live <ExternalLink className="size-3.5" />
                    </a>
                  )}
                  {selected.github && (
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:border-primary/50"
                    >
                      View on GitHub <ExternalLink className="size-3.5" />
                    </a>
                  )}
                  {selected.figma && (
                    <a
                      href={selected.figma}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:border-primary/50"
                    >
                      View Prototype <ExternalLink className="size-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
