import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Mark, MarkerText } from '@/components/kokonutui/marker-text';
import { profile } from '@/data/content';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Bio + Single Clean Portrait */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45 }}
            >
              <div className="font-mono text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                01 / Biography
              </div>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
                Engineering with{' '}
                <span className="font-serif font-medium italic text-primary">clarity</span>
              </h2>
            </motion.div>

            <MarkerText className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                I’m a Software Development Engineer at{' '}
                <strong className="font-semibold text-foreground">Amazon</strong> with over 4 years
                of full-stack engineering experience. My work centers on architecting{' '}
                <Mark type="underline" color="#ff5005">
                  global supplier auditing portals
                </Mark>{' '}
                and high-throughput data pipelines using Java, Spring Boot, Node.js, and AWS.
              </p>
              <p>
                With a Master’s degree in Computer Science from{' '}
                <strong className="font-semibold text-foreground">
                  Arizona State University
                </strong>
                , I focus on combining{' '}
                <Mark type="highlight" color="rgba(255, 80, 5, 0.22)">
                  backend engineering precision with clean UI design
                </Mark>{' '}
                to solve human risk, sustainability, and compliance challenges at scale.
              </p>
            </MarkerText>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {[
                { label: 'LinkedIn', href: profile.socials.linkedin },
                { label: 'GitHub', href: profile.socials.github },
                { label: 'LeetCode', href: profile.socials.leetcode },
                { label: 'Instagram', href: profile.socials.instagram },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3.5 py-2 font-mono text-xs font-medium text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
                >
                  {social.label}
                  <ExternalLink className="size-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Single Portrait (untagged, ready for sticker/doodle update) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="mx-auto w-full max-w-sm"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
              <img
                src={profile.photos[0]}
                alt={profile.name}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
