import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy logic
      const scrollPosition = window.scrollY + 150;
      for (const item of navItems) {
        const id = item.href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          zIndex: 1000,
          transition: 'all 0.3s ease',
          borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
          backgroundColor: scrolled ? 'var(--glass-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: '1200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '4.5rem',
            transition: 'all 0.3s ease',
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            className="hoverable"
            style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              fontFamily: 'var(--font-sans)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              letterSpacing: '-0.03em',
            }}
          >
            VK<span style={{ color: 'var(--accent)' }}>.</span>
          </a>

          {/* Desktop Nav Items */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
            }}
          >
            <ul
              style={{
                display: 'flex',
                listStyle: 'none',
                gap: '1.5rem',
                margin: 0,
                padding: 0,
              }}
              className="desktop-menu"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="hoverable"
                      style={{
                        fontSize: '0.92rem',
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 600,
                        color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                        position: 'relative',
                        padding: '0.25rem 0',
                        textDecoration: 'none',
                        transition: 'color var(--transition-fast)',
                      }}
                    >
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="activeIndicator"
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '2px',
                            backgroundColor: 'var(--accent)',
                          }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="hoverable"
              style={{
                background: 'transparent',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.25rem',
                height: '2.25rem',
                backgroundColor: 'var(--bg-secondary)',
                transition: 'all var(--transition-fast)',
              }}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hoverable mobile-menu-toggle"
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                display: 'none', // Managed in CSS via media queries
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.5rem',
                height: '2.5rem',
              }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '5.5rem',
              left: '1rem',
              right: '1rem',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: '0px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
              zIndex: 999,
              padding: '1.5rem',
            }}
            className="mobile-menu-drawer"
          >
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                listStyle: 'none',
                gap: '1rem',
                margin: 0,
                padding: 0,
              }}
            >
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      display: 'block',
                      padding: '0.75rem 1rem',
                      fontWeight: 600,
                      color: activeSection === item.href.substring(1) ? 'var(--accent)' : 'var(--text-primary)',
                      backgroundColor: activeSection === item.href.substring(1) ? 'var(--accent-glow)' : 'transparent',
                      borderLeft: activeSection === item.href.substring(1) ? '2px solid var(--accent)' : 'none',
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .desktop-menu a {
          text-decoration: none !important;
        }
        .desktop-menu a:hover {
          text-decoration: none !important;
        }
        @media (max-width: 900px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
