import { useState, useEffect } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const roles = ["Full-Stack Developer", "Designer", "Problem Solver"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && displayText === currentRole) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '6rem',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: '800px',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              color: 'var(--accent)',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              marginBottom: '1rem',
            }}
          >
            👋 Hello there, I am
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontSize: 'clamp(3.5rem, 10vw, 6.5rem)',
              fontWeight: 800,
              fontFamily: 'var(--font-sans)',
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              marginBottom: '2rem',
            }}
          >
            Vishal <span style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontWeight: 400,
            }}>Kanwar</span>
          </motion.h1>

          {/* Typing Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontSize: 'clamp(1rem, 3vw, 1.25rem)',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-secondary)',
              height: '2.5rem',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            <span>I'm a&nbsp;</span>
            <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{displayText}</span>
            <span
              style={{
                display: 'inline-block',
                width: '2px',
                height: '1.1em',
                backgroundColor: 'var(--accent)',
                marginLeft: '6px',
                animation: 'blink 0.8s infinite',
              }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              fontSize: '1.15rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
              maxWidth: '600px',
            }}
          >
            A results-driven Computer Science graduate and Full-Stack Software Engineer with 
            over 3 years of experience crafting robust, scalable, and premium web solutions. 
            Focused on building high-performance architectures and engaging user interfaces.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <a href="#projects" className="btn btn-primary hoverable">
              Explore Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary hoverable">
              Get in Touch <Mail size={18} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--text-muted)',
          fontSize: '0.85rem',
          cursor: 'pointer',
          zIndex: 10,
        }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="hoverable"
      >
        <span>Scroll Down</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
