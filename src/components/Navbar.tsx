import { useEffect, useState } from 'react';
import { MorphicNavbar } from '@/components/kokonutui/morphic-navbar';
import SwitchButton from '@/components/kokonutui/switch-button';

interface NavbarProps {
  theme: 'dark' | 'light';
  onThemeChange: (theme: 'dark' | 'light') => void;
}

const NAV_ITEMS = {
  '#home': { name: 'Home' },
  '#about': { name: 'About' },
  '#experience': { name: 'Experience' },
  '#projects': { name: 'Projects' },
  '#skills': { name: 'Skills' },
  '#achievements': { name: 'Milestones' },
  '#contact': { name: 'Contact' },
};

const SECTION_IDS = Object.keys(NAV_ITEMS).map((h) => h.slice(1));

export default function Navbar({ theme, onThemeChange }: NavbarProps) {
  const [activeHref, setActiveHref] = useState('#home');

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 py-3 sm:px-6 sm:py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
        {/* Monogram */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="pointer-events-auto inline-flex items-center gap-2 rounded-xl border border-border bg-card/80 px-3 py-1.5 font-mono text-xs font-bold tracking-wider text-foreground backdrop-blur-md transition-colors hover:border-primary/50"
        >
          <span className="inline-block size-2 rounded-full bg-primary" />
          VK
        </a>

        {/* Kokonut UI Morphic Navbar */}
        <div className="pointer-events-auto hidden md:block">
          <MorphicNavbar items={NAV_ITEMS} activeHref={activeHref} compact />
        </div>

        {/* Theme Switcher */}
        <div className="pointer-events-auto flex items-center gap-2">
          <SwitchButton
            size="sm"
            showLabel={false}
            theme={theme}
            onThemeChange={onThemeChange}
            className="rounded-xl border border-border bg-card/80 backdrop-blur-md"
          />
        </div>
      </div>

      {/* Compact Mobile Nav */}
      <nav
        aria-label="Mobile navigation"
        className="pointer-events-auto mx-auto mt-2 flex max-w-full items-center gap-1 overflow-x-auto rounded-xl border border-border bg-card/85 p-1 backdrop-blur-md md:hidden"
      >
        {Object.entries(NAV_ITEMS).map(([href, { name }]) => {
          const active = activeHref === href;
          return (
            <a
              key={href}
              href={href}
              onClick={(e) => {
                e.preventDefault();
                setActiveHref(href);
                document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`shrink-0 rounded-lg px-2.5 py-1 text-xs font-medium transition-colors ${
                active
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {name}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
