import { motion } from 'motion/react';
import { Award, Cloud, Code2, Layers, Wrench } from 'lucide-react';
import { certifications, skillGroups } from '@/data/content';

const GROUP_ICONS = [Code2, Cloud, Layers, Wrench];

export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Sticky Left Header */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="font-mono text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              04 / Toolkit
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Skills &amp; Tech
            </h2>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground">
              A practical engineering toolkit spanning backend services, cloud infrastructure,
              data pipelines, and front-end craft.
            </p>

            {/* Certifications Strip */}
            <div className="mt-8 space-y-2.5">
              <div className="font-mono text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                Verified Certifications
              </div>
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-2.5"
                >
                  <div className="flex items-center gap-2.5">
                    <Award className="size-4 shrink-0 text-primary" />
                    <span className="text-xs font-medium text-foreground">{cert.name}</span>
                  </div>
                  <span className="font-mono text-[11px] text-muted-foreground">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Bento Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group, idx) => {
              const Icon = GROUP_ICONS[idx] ?? Code2;
              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
                >
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="size-4" />
                      </div>
                      <h3 className="text-base font-bold tracking-tight text-foreground">
                        {group.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-border bg-secondary/60 px-2.5 py-1 font-mono text-xs text-foreground transition-colors hover:border-primary/50"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
