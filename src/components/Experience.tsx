import { motion } from 'motion/react';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';
import { experiences, profile } from '@/data/content';

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Sticky Left Header */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="font-mono text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              02 / Journey
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Where I've made an impact.
            </h2>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground">
              From enterprise platforms to technology that helps protect human rights, here's a
              look at the teams I've worked with and the problems I've helped solve.
            </p>
            <div className="mt-6">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 font-mono text-xs font-semibold text-foreground transition-colors hover:border-primary/60"
              >
                Explore GitHub
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Right Timeline */}
          <div className="relative space-y-12 pl-6 sm:pl-8">
            {/* Vertical Line */}
            <div
              aria-hidden="true"
              className="absolute top-3 bottom-3 left-[19px] w-px bg-gradient-to-b from-primary via-border to-transparent sm:left-[23px]"
            />

            {experiences.map((exp, idx) => (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="relative pl-8 sm:pl-10"
              >
                {/* Company Logo Node */}
                <div className="absolute top-0 -left-6 flex size-10 items-center justify-center overflow-hidden rounded-xl border border-border bg-card shadow-sm sm:-left-8 sm:size-12">
                  {exp.logo ? (
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="size-full object-cover"
                    />
                  ) : (
                    <Briefcase className="size-4 text-primary" />
                  )}
                </div>

                {/* Company Header */}
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-foreground">
                      {exp.company}
                    </h3>
                    {exp.team && (
                      <div className="mt-0.5 font-mono text-xs text-muted-foreground">
                        {exp.team}
                      </div>
                    )}
                  </div>
                  <span className="rounded-md bg-primary/10 px-2.5 py-1 font-mono text-xs font-semibold text-primary">
                    {exp.duration()}
                  </span>
                </div>

                {exp.intro && (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {exp.intro}
                  </p>
                )}

                {/* Positions */}
                <div className="mt-6 space-y-6 border-l border-border pl-5">
                  {exp.positions.map((pos) => (
                    <div key={`${exp.company}-${pos.title}`} className="relative">
                      <span
                        aria-hidden="true"
                        className="absolute top-2 -left-[24px] size-2 rounded-full bg-primary ring-4 ring-background"
                      />
                      <h4 className="text-base font-semibold text-foreground">
                        {pos.title}
                      </h4>
                      <div className="mt-1 flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                        <Calendar className="size-3" />
                        <span>{pos.period}</span>
                      </div>
                      <div className="mt-2.5 space-y-2 text-sm leading-relaxed text-muted-foreground">
                        {pos.desc.split('\n\n').map((para, pIdx) => (
                          <p key={pIdx}>{para}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
