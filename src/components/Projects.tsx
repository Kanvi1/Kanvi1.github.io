import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ShieldAlert } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  tags: string[];
  category: ('web' | 'mobile' | 'design')[];
  link?: string;
  github?: string;
  figma?: string;
  restricted?: boolean;
}

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'design'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const projects: Project[] = [
    {
      title: 'Makershala',
      subtitle: 'STEM Learning Portal',
      desc: 'Launched an online learning platform focused on STEM subjects, designed for kids aged 8 to 16. Handled complete UI design and application development. Provides an interactive environment for exploring interests, developing practical skillsets, and building a foundation in engineering/science.',
      image: '/images/work-001.png',
      tags: ['HTML', 'Bootstrap', 'PHP', 'MySQL'],
      category: ['web'],
      link: 'https://makershala.com/',
    },
    {
      title: 'Epic Ease',
      subtitle: 'User Story Generation Simplified',
      desc: 'Implemented a customized template-driven tool to auto-generate Agile user stories matching strict client guidelines. Streamlined mapping out user flows for the business team, cutting feedback iterations by ~30% and facilitating absolute transparency between business and engineering teams.',
      image: '/images/work-002.png',
      tags: ['Figma', 'Agile', 'Product Design'],
      category: ['design'],
      restricted: true,
    },
    {
      title: 'Bugs Eye',
      subtitle: 'Bug Tracking Application',
      desc: 'A robust 3-tier web application designed to optimize bug resolution tracking. Boosted cross-team collaboration and efficiency by simplifying bug lifecycle tracking, leading to an impressive 80% reduction in re-work across development pipelines.',
      image: '/images/work-003.png',
      tags: ['Java', 'Spring Boot', 'AWS', 'MySQL'],
      category: ['web'],
      restricted: true,
    },
    {
      title: 'STRIDE',
      subtitle: 'AR-Based Training Application',
      desc: 'An Augmented Reality Android training application tailored to Department of Defense (DOD) professionals. Projects interactive 3D models and step-by-step animations in AR for microgrid setup and maintenance, designed for easy scalability into other practical training verticals.',
      image: '/images/work-stride.png',
      tags: ['Unity', 'Blender', 'Figma', 'ARCore', 'C#'],
      category: ['mobile', 'design'],
      figma: 'https://www.figma.com/proto/bC6L11M1CakPeSMTi0xRuQ/STRIDE-AR-Review?page-id=515%3A12670&node-id=515-13192&starting-point-node-id=515%3A13192&mode=design&t=pfoju3aDbx04Bwhv-1',
    },
    {
      title: 'Fit Fusion',
      subtitle: 'Context-Aware Android Application',
      desc: 'A personalized mobile fitness ecosystem syncing real-time health metrics from an Android wearable device. Auto-regulates training sets and workouts dynamically; for example, instructing the user to rest if heart rate spikes, or scaling intensity when exercise parameters are easily cleared.',
      image: '/images/work-fitfusion.png',
      tags: ['Android', 'Java', 'Figma', 'WearOS API'],
      category: ['mobile', 'design'],
      github: 'https://github.com/Kanvi1/Fit-Fusion.git',
      figma: 'https://www.figma.com/proto/VithZUuYLfWB2mREgUjj8r/MC-Project?page-id=0%3A1&type=design&node-id=1-3&viewport=945%2C524%2C0.22&t=MEBXXKkbX6vrU2mY-1&scaling=scale-down&starting-point-node-id=1%3A3&mode=design',
    },
    {
      title: 'LEAPS',
      subtitle: 'Energy Laboratory Website',
      desc: 'Spearheaded the design overhaul of the LEAPS energy laboratory website, creating a sleek, user-friendly, responsive interface. Optimizations in information architecture and visual layouts directly resulted in a 20% increase in course enrollment signups.',
      image: '/images/work-leaps.png',
      tags: ['HTML/CSS/JS', 'WordPress', 'Figma'],
      category: ['web', 'design'],
      link: 'https://leaps.asu.edu/',
    },
    {
      title: 'Energy Symposium',
      subtitle: 'Event Promotion Website',
      desc: 'Led the UI/UX design and engineering of an event promotion portal from concept, pitch, implementation, testing, to final production. Yielded a 50% reservation increase compared to historical promotional methods, delivering a fully operational, beautiful landing page in a few days.',
      image: '/images/work-symposium.png',
      tags: ['HTML/CSS/JS', 'Git', 'Figma', 'Responsive Design'],
      category: ['web', 'design'],
      link: 'https://vishalkanwar.com/LEAPS-SymposiumWebsite/',
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 850);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    return project.category.includes(filter);
  });

  return (
    <section id="projects" style={{ padding: '10rem 0 6rem 0', position: 'relative' }}>
      <div className="container">
        <div className="section-grid">
          
          {/* Sticky Left Column */}
          <div className="sticky-header">
            <div className="section-subtitle">Portfolio</div>
            <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Featured Work</h2>
            
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem', marginBottom: '2rem' }}>
              A selection of my professional engineering work and user interface design prototypes.
            </p>

            {/* Filter Controls: Vertical for desktop, horizontal for mobile */}
            <div
              style={{
                display: 'flex',
                flexDirection: isMobile ? 'row' : 'column',
                alignItems: isMobile ? 'center' : 'flex-start',
                justifyContent: isMobile ? 'flex-start' : 'stretch',
                gap: isMobile ? '1.25rem' : '0.85rem',
                marginTop: isMobile ? '1.5rem' : '2.5rem',
                marginBottom: isMobile ? '2.5rem' : '0',
                flexWrap: 'wrap',
                borderBottom: isMobile ? '1px solid var(--border-color)' : 'none',
                paddingBottom: isMobile ? '1rem' : '0',
              }}
            >
              {(['all', 'web', 'mobile', 'design'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className="hoverable"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: filter === cat ? 'var(--text-primary)' : 'var(--text-muted)',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    transition: 'all var(--transition-fast)',
                    position: 'relative',
                    padding: isMobile ? '0 0 0.5rem 0' : '0.25rem 0',
                  }}
                >
                  {cat === 'all' ? 'All Work' : cat === 'web' ? 'Web / API' : cat === 'mobile' ? 'Mobile / AR' : 'UI & Design'}
                  {filter === cat && (
                    <motion.div
                      layoutId="projectsFilterUnderline"
                      style={{
                        position: 'absolute',
                        bottom: isMobile ? '-1px' : '0',
                        left: 0,
                        right: isMobile ? 0 : 'auto',
                        width: isMobile ? 'auto' : '1.5rem',
                        height: '2px',
                        backgroundColor: 'var(--accent)',
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Flowing Right Column */}
          <div style={{ paddingTop: isMobile ? '0' : '1.5rem' }}>
            {/* Desktop View: Editorial Hover-Reveal List */}
            {!isMobile ? (
              <div 
                style={{ display: 'flex', flexDirection: 'column' }} 
                onMouseMove={handleMouseMove}
              >
                {filteredProjects.map((project, idx) => (
                  <div
                    key={project.title}
                    className="hoverable"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '60px 1fr auto',
                      alignItems: 'center',
                      padding: '2.5rem 0',
                      borderBottom: '1px solid var(--border-color)',
                      transition: 'padding var(--transition-fast)',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Index */}
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      0{idx + 1}.
                    </div>
                    {/* Title */}
                    <div>
                      <h3 style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.02em', display: 'inline-block', marginRight: '1.5rem', color: 'var(--text-primary)' }}>
                        {project.title}
                      </h3>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        {project.subtitle}
                      </span>
                    </div>
                    {/* Tags */}
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      {project.tags.slice(0, 2).map((t) => (
                        <span key={t} className="tag" style={{ fontSize: '0.65rem' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Floating Image Follower */}
                <AnimatePresence>
                  {hoveredIdx !== null && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                      style={{
                        position: 'fixed',
                        left: mousePos.x + 30,
                        top: mousePos.y - 120,
                        width: '320px',
                        height: '200px',
                        pointerEvents: 'none',
                        zIndex: 500,
                        borderRadius: '0px',
                        overflow: 'hidden',
                        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
                        border: '1px solid var(--border-color)',
                      }}
                    >
                      <img
                        src={filteredProjects[hoveredIdx].image}
                        alt={filteredProjects[hoveredIdx].title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              /* Mobile View: High-End Minimalist Cards */
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '2rem',
                }}
              >
                {filteredProjects.map((project) => (
                  <div
                    key={project.title}
                    className="glass-card hoverable"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: 0,
                      overflow: 'hidden',
                      cursor: 'pointer',
                    }}
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Image */}
                    <div style={{ width: '100%', height: '220px', overflow: 'hidden' }}>
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    {/* Content */}
                    <div style={{ padding: '1.75rem' }}>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                        {project.title}
                      </h3>
                      <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontWeight: 600, display: 'block', marginBottom: '1rem' }}>
                        {project.subtitle}
                      </span>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {project.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(5, 7, 10, 0.85)',
              backdropFilter: 'blur(8px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem 1rem',
            }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                width: '100%',
                maxWidth: '650px',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--glass-border)',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Header */}
              <div style={{ position: 'relative', width: '100%', height: '280px' }}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="hoverable"
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(10, 14, 23, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Text Contents */}
              <div style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 700 }}>{selectedProject.title}</h3>
                  <span style={{ fontSize: '0.95rem', color: 'var(--accent)', fontWeight: 700 }}>
                    {selectedProject.subtitle}
                  </span>
                </div>

                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                  {selectedProject.desc}
                </p>

                {/* Tags List */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="tag" style={{ fontSize: '0.75rem' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Info Notice for Restricted Projects */}
                {selectedProject.restricted && (
                  <div
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'flex-start',
                      padding: '1rem',
                      backgroundColor: 'rgba(245, 158, 11, 0.08)',
                      border: '1px solid rgba(245, 158, 11, 0.2)',
                      borderRadius: '0.5rem',
                      marginBottom: '2rem',
                    }}
                  >
                    <ShieldAlert size={20} style={{ color: 'var(--warning)', flexShrink: 0, marginTop: '2px' }} />
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                      Due to proprietary/copyright constraints, the source code for this Deloitte-related client module cannot be shared publicly. I'd be happy to discuss details or architectural design decisions in a call.
                    </p>
                  </div>
                )}

                {/* Action Links */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary hoverable"
                    >
                      View Live <ExternalLink size={16} />
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary hoverable"
                    >
                      <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16" style={{ marginRight: '8px' }}>
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View on GitHub
                    </a>
                  )}
                  {selectedProject.figma && (
                    <a
                      href={selectedProject.figma}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary hoverable"
                    >
                      View Prototype <ExternalLink size={16} />
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
