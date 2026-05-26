import { motion } from 'framer-motion';
import { Code, Globe, Database, Award } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} style={{ color: 'var(--accent)' }} />,
      skills: ['Java', 'JavaScript', 'Python'],
    },
    {
      title: 'Web Development',
      icon: <Globe size={24} style={{ color: 'var(--accent)' }} />,
      skills: [
        'HTML-5',
        'CSS',
        'Sass',
        'Spring Boot/MVC',
        'React',
        'JavaScript',
        'jQuery',
        'Bootstrap',
        'Semantic UI',
        'Node.js',
        'Express.js',
      ],
    },
    {
      title: 'Databases & Tools',
      icon: <Database size={24} style={{ color: 'var(--accent)' }} />,
      skills: [
        'MySQL',
        'Hibernate JPA',
        'Git & GitHub',
        'SVN',
        'AWS',
        'Jenkins',
        'Jira',
        'JMeter',
        'MongoDB',
        'Docker',
      ],
    },
    {
      title: 'Certifications',
      icon: <Award size={24} style={{ color: 'var(--accent)' }} />,
      skills: [
        'AWS Solutions Architect Associate',
        'AWS Developer Associate',
        'Certified Scrum Master',
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" style={{ padding: '10rem 0 6rem 0', position: 'relative' }}>
      <div className="container">
        <div className="section-grid">
          
          {/* Sticky Left Column */}
          <div className="sticky-header">
            <div className="section-subtitle">Expertise</div>
            <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Skills & Tech</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
              A curated catalog of my engineering toolkit, spanning backend architectures, cloud ecosystems, database engineering, and modern web applications.
            </p>
          </div>

          {/* Flowing Right Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
            }}
          >
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="glass-card hoverable"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                {/* Category Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '2.5rem',
                      height: '2.5rem',
                      backgroundColor: 'var(--accent-glow)',
                    }}
                  >
                    {category.icon}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.6rem',
                  }}
                >
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skillIdx}
                      whileHover={{ borderColor: 'var(--accent)', color: 'var(--text-primary)' }}
                      className="tag hoverable"
                      style={{
                        cursor: 'default',
                        padding: '0.35rem 0.85rem',
                        fontSize: '0.75rem',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
