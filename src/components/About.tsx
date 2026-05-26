import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function About() {
  const images = [
    '/images/about-01.png',
    '/images/about-02.png',
    '/images/about-03.png',
    '/images/about-04.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="about" style={{ padding: '10rem 0 6rem 0', position: 'relative' }}>
      <div className="container">
        <div className="section-grid">
          
          {/* Sticky Left Column */}
          <div className="sticky-header">
            <div className="section-subtitle">Biography</div>
            <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '2.5rem' }}>About Me</h2>
            
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4/5',
                maxHeight: '380px',
                borderRadius: '0px',
                overflow: 'hidden',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-secondary)',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt="Vishal Kanwar"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    inset: 0,
                  }}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Flowing Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingTop: '1.5rem' }}>
            <h3
              style={{
                fontSize: '2.25rem',
                fontWeight: 700,
                lineHeight: 1.1,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
              }}
            >
              Hello, I'm{' '}
              <span style={{ color: 'var(--accent)' }}>Vishal Kanwar</span>
            </h3>
            
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
              }}
            >
              I am a results-driven Computer Science graduate with over 3 years of professional full-stack development experience. My expertise lies in architecting robust, scalable web systems using Java, Spring Boot, JavaScript, Node.js, and cloud ecosystems (AWS).
            </p>
            
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
              }}
            >
              With a Master's degree in Computer Science from Arizona State University, I excel at combining engineering precision with modern design aesthetics to resolve complex challenges and deliver high-performance applications.
            </p>

            {/* Social Icons & Contact Link */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                marginTop: '1.5rem',
              }}
            >
              <a
                href="http://www.linkedin.com/in/vishal-kanwar/"
                target="_blank"
                rel="noreferrer"
                className="hoverable social-link-icon"
                aria-label="LinkedIn"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" width="22" height="22">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://github.com/Kanvi1"
                target="_blank"
                rel="noreferrer"
                className="hoverable social-link-icon"
                aria-label="GitHub"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" width="22" height="22">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://leetcode.com/kanvi26/"
                target="_blank"
                rel="noreferrer"
                className="hoverable social-link-icon"
                aria-label="LeetCode"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <svg
                  fill="currentColor"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/vishal18kanwar/"
                target="_blank"
                rel="noreferrer"
                className="hoverable social-link-icon"
                aria-label="Instagram"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" width="22" height="22">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            <div style={{ marginTop: '1rem' }}>
              <a href="#contact" className="btn btn-primary hoverable">
                Let's Work Together <ExternalLink size={15} />
              </a>
            </div>
          </div>
          
        </div>
      </div>

      <style>{`
        .social-link-icon {
          color: var(--text-secondary);
          transition: color var(--transition-fast), transform var(--transition-fast);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .social-link-icon:hover {
          color: var(--accent);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
