import { ArrowDown, ArrowRight, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import FlowField from '@/components/kokonutui/flow-field';
import DynamicText from '@/components/kokonutui/dynamic-text';
import { profile, yearsOfExperience } from '@/data/content';

export default function Hero() {
  const totalYears = yearsOfExperience();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 sm:pt-32"
    >
      {/* Kokonut UI Interactive FlowField Canvas */}
      <FlowField
        density={2.0}
        speed={0.9}
        interactive
        className="text-foreground/35 dark:text-foreground/45"
      />

      {/* Radial vignette so typography stays crisp over streamlines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,var(--background)_92%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="max-w-3xl">
          {/* Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-card/80 px-3.5 py-1.5 font-mono text-xs tracking-wider text-muted-foreground uppercase backdrop-blur-md"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            SDE at {profile.company} · Sustainability Tech
          </motion.div>

          {/* Classy, restrained Name */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {profile.firstName} {profile.lastName}
          </motion.h1>

          {/* Dynamic Morphing Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-4 flex flex-wrap items-baseline gap-x-2.5 text-xl font-medium text-muted-foreground sm:text-2xl"
          >
            <span>Architecting</span>
            <DynamicText
              mode="morph"
              words={[...profile.heroWords]}
              interval={2400}
              className="font-semibold text-foreground"
            />
          </motion.div>

          {/* Concise Bio */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Software Development Engineer with {totalYears}+ years of experience building global
            compliance platforms, high-throughput data pipelines, and thoughtful user interfaces.
            M.S. in Computer Science from Arizona State University.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore Work
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/80 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur-md transition-colors hover:border-primary/50"
            >
              <Mail className="size-4" />
              Get in Touch
            </a>
          </motion.div>

          {/* Compact Telemetry Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6"
          >
            <div>
              <div className="font-mono text-2xl font-bold text-foreground">{totalYears}+ yrs</div>
              <div className="mt-0.5 text-xs text-muted-foreground">Production Eng</div>
            </div>
            <div>
              <div className="font-mono text-2xl font-bold text-foreground">2× AWS</div>
              <div className="mt-0.5 text-xs text-muted-foreground">SA &amp; Developer</div>
            </div>
            <div>
              <div className="font-mono text-2xl font-bold text-foreground">4.0 GPA</div>
              <div className="mt-0.5 text-xs text-muted-foreground">M.S. CS @ ASU</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Cue */}
      <motion.button
        type="button"
        aria-label="Scroll to About"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full border border-border bg-card/70 p-2.5 text-muted-foreground backdrop-blur-md transition-colors hover:text-foreground"
      >
        <ArrowDown className="size-4" />
      </motion.button>
    </section>
  );
}
