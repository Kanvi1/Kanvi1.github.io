import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Deloitte',
      logo: '/images/logo-deloitte-2.jpg',
      duration: '3 yrs 7 mos',
      positions: [
        {
          title: 'Senior Software Engineer',
          period: 'May 2022 - Jul 2022',
          desc: 'Assumed a leadership capacity, mentoring and guiding a team of three junior developers. Together, we successfully designed and developed several critical modules providing substantial business value. Leading this dedicated team was a source of significant learning and personal growth.',
        },
        {
          title: 'Software Engineer I',
          period: 'May 2021 - May 2022',
          desc: 'Dedicated to providing comprehensive solutions for large-scale organizations to address regulatory and operational risks. Consistently recognized for exceptional contributions and honored with numerous performance awards, including the Outstanding Performance Award.',
        },
        {
          title: 'Associate Software Engineer',
          period: 'Jun 2019 - Apr 2021',
          desc: 'Served large risk and financial advisory clients with high efficiency. Gained valuable insights into risk management, financial advisory frameworks, and scaled technical delivery.',
        },
        {
          title: 'Software Engineer - Intern',
          period: 'Jan 2019 - Mar 2019',
          desc: 'Led a team of 15 talented interns in developing a Fog computing and affective computing business use case, presenting it to industry leaders with highly positive feedback.',
        },
      ],
    },
    {
      company: 'Mages Studios',
      logo: '/images/logo-mages.jpg',
      duration: '3 mos',
      positions: [
        {
          title: 'Software Engineer - Intern',
          period: 'Jun 2018 - Aug 2018',
          desc: 'Led a collaborative team of four members, spearheading the design and development of captivating AR and VR projects. Conducted user research, mapped narratives via storyboards, and developed 3D immersive VR experiences for cancer patients. Implemented an engaging ARCore-based scholarly app.',
        },
      ],
    },
  ];

  return (
    <section id="experience" style={{ padding: '10rem 0 6rem 0', position: 'relative' }}>
      <div className="container">
        <div className="section-grid">
          
          {/* Sticky Left Column */}
          <div className="sticky-header">
            <div className="section-subtitle">Journey</div>
            <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Experience</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem', marginBottom: '2.5rem' }}>
              Over 3 years of building resilient backend architectures, scalable web apps, and mentoring engineering cohorts.
            </p>
            <div>
              <a 
                href="https://github.com/Kanvi1"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary hoverable"
              >
                Explore GitHub
              </a>
            </div>
          </div>

          {/* Flowing Right Column */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: '4rem',
            }}
          >
            {/* Timeline Line */}
            <div
              style={{
                position: 'absolute',
                left: '1.25rem',
                top: '1.5rem',
                bottom: '1.5rem',
                width: '1px',
                background: 'linear-gradient(to bottom, var(--accent) 0%, var(--border-color) 100%)',
                zIndex: 1,
              }}
              className="timeline-line"
            />

            {experiences.map((exp, companyIdx) => (
              <motion.div
                key={companyIdx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: companyIdx * 0.1 }}
                style={{
                  position: 'relative',
                  zIndex: 2,
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: '2rem',
                }}
              >
                {/* Timeline Square Bullet (Company Logo) */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '2.5rem',
                    height: '2.5rem',
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    overflow: 'hidden',
                  }}
                  className="timeline-bullet"
                >
                  {exp.logo ? (
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <Briefcase size={16} style={{ color: 'var(--accent)' }} />
                  )}
                </div>

                {/* Experience Details Card */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
                      {exp.company}
                    </h3>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontWeight: 700 }}>
                      {exp.duration}
                    </span>
                  </div>

                  {/* Sub-positions Timeline */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} className="positions-container">
                    {exp.positions.map((pos, posIdx) => (
                      <div
                        key={posIdx}
                        style={{
                          position: 'relative',
                          paddingLeft: '1.25rem',
                          borderLeft: '1px solid var(--border-color)',
                        }}
                        className="position-item"
                      >
                        {/* Sub-bullet (Accent color square) */}
                        <div
                          style={{
                            position: 'absolute',
                            left: '-3.5px',
                            top: '6px',
                            width: '6px',
                            height: '6px',
                            backgroundColor: 'var(--accent)',
                          }}
                        />

                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.25rem',
                          }}
                        >
                          <h4
                            style={{
                              fontSize: '1.05rem',
                              fontWeight: 700,
                              color: 'var(--text-primary)',
                            }}
                          >
                            {pos.title}
                          </h4>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              color: 'var(--text-muted)',
                              fontSize: '0.75rem',
                              fontFamily: 'var(--font-mono)',
                              fontWeight: 500,
                              marginTop: '0.1rem',
                            }}
                          >
                            <Calendar size={12} />
                            <span>{pos.period}</span>
                          </div>
                          <p
                            style={{
                              color: 'var(--text-secondary)',
                              lineHeight: 1.6,
                              fontSize: '0.92rem',
                              marginTop: '0.5rem',
                            }}
                          >
                            {pos.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .timeline-line {
            left: 1.25rem !important;
          }
          .timeline-bullet {
            width: 2.5rem !important;
            height: 2.5rem !important;
          }
          .timeline-bullet svg {
            width: 16px !important;
            height: 16px !important;
          }
          .timeline-bullet img {
            width: 100% !important;
            height: 100% !important;
          }
          .timeline-bullet + div {
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
