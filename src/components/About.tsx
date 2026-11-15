import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Mark, MarkerText } from '@/components/kokonutui/marker-text';
import { profile } from '@/data/content';

export default function About() {
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % profile.photos.length);
    }, 10000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Bio + Crossfading Portrait */}
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
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                A little about me
              </h2>
              <p className="mt-1 font-serif text-xl font-medium italic text-primary sm:text-2xl">
                (beyond the code)
              </p>
            </motion.div>

            <MarkerText className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p className="font-medium text-foreground">Hey, I'm Vishal! 👋</p>
              <p>
                I'm a software engineer who loves turning complex problems into thoughtful
                solutions that make a difference.
              </p>
              <p>
                Currently, I'm at{' '}
                <strong className="font-semibold text-foreground">Amazon</strong>, building
                technology that{' '}
                <Mark type="underline" color="#ff5005">
                  helps protect human rights across its global supply chain
                </Mark>
                . It's the kind of work that reminds me why I love engineering - creating things
                that matter beyond the screen.
              </p>
              <p>
                I've always enjoyed both sides of software:{' '}
                <Mark type="highlight" color="rgba(255, 80, 5, 0.22)">
                  the engineering that makes things tick and the design that makes them a joy to
                  use.
                </Mark>{' '}
                From backend systems to polished interfaces, I love bringing ideas to life.
              </p>
              <p>
                When I'm not staring at a screen, you'll probably find me snowboarding (with varying
                degrees of grace), exploring hiking trails, or getting lost in a video game.
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

          {/* Rotating Portraits (untagged) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="mx-auto w-full max-w-sm"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
              <AnimatePresence mode="wait">
                <motion.img
                  key={photoIndex}
                  src={profile.photos[photoIndex]}
                  alt={profile.name}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.55 }}
                  className="absolute inset-0 size-full object-cover"
                />
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
