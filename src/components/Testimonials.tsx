import { Quote } from 'lucide-react';
import React from 'react';

interface Testimony {
  quote: React.ReactNode;
  author: string;
  role: string;
}

export default function Testimonials() {
  const testimonials: Testimony[] = [
    {
      quote: (
        <>
          Vishal is{" "}
          <span style={{ color: 'var(--accent)', fontWeight: 700 }}>
            excellent in capturing client and team needs
          </span>{" "}
          and translating those into the creation of quality products and outcomes.
          Excellent teamwork and interactions. Always there to partner and deliver. Good
          transferrable skills.
        </>
      ),
      author: "Dr. Nathan Johnson",
      role: "Associate Professor & Director, LEAPS Lab (ASU)",
    },
    {
      quote: (
        <>
          Vishal was a great asset to our team in which he led the software development
          of customizations for an enterprise model risk management application. He was
          able to{" "}
          <span style={{ color: 'var(--accent)', fontWeight: 700 }}>
            quickly grasp often complex requirements
          </span>{" "}
          from the banking client and translate them into fully functional features. If
          given the opportunity again, I wouldn't hesitate to have Vishal on my team.
        </>
      ),
      author: "Arthur Ilyasov",
      role: "Senior Consultant / Software Architect",
    },
    {
      quote: (
        <>
          Vishal has been one of the best team members I have worked with. He has been
          my{" "}
          <span style={{ color: 'var(--accent)', fontWeight: 700 }}>
            go-to colleague
          </span>{" "}
          for most of the critical bugs or enhancements. He is smart, and dedicated,
          with effective communication skills, and is{" "}
          <span style={{ color: 'var(--accent)', fontWeight: 700 }}>
            very easy to work with
          </span>
          . All his high-quality work has made a huge impact on the team and the
          project. Keep up the fantastic work!
        </>
      ),
      author: "Madhuri Jhawar",
      role: "Senior Software Engineer (Deloitte)",
    },
    {
      quote: (
        <>
          Vishal is a highly talented individual who deals with the situation with all
          the zeal. He is a team player and a{" "}
          <span style={{ color: 'var(--accent)', fontWeight: 700 }}>
            dependable colleague
          </span>
          . He is always ready to go that extra mile to get the work done. It was a
          pleasure working with him.
        </>
      ),
      author: "Anjali Shetty",
      role: "Consultant / Project PMO (Deloitte)",
    },
    {
      quote: (
        <>
          Vishal has strong analytical skills that he uses effectively in his research.
          His exceptional research skills are complemented by his{" "}
          <span style={{ color: 'var(--accent)', fontWeight: 700 }}>
            fantastic communication skills
          </span>
          . He was very collaborative, solution-oriented, and well-liked by the team he
          was leading. A great colleague to work with!
        </>
      ),
      author: "Shruti Tanwar",
      role: "Lead Researcher / Senior Developer",
    },
    {
      quote: (
        <>
          Vishal has always had a way of getting the most out of the team and{" "}
          <span style={{ color: 'var(--accent)', fontWeight: 700 }}>
            maximizing everyone's potential
          </span>
          . He excels in whatever comes his way; developing new software modules from
          scratch, exceptional presentations, figuring out new tech, debugging and
          whatnot! I wouldn't hesitate a bit to have him as my team-mate again.
        </>
      ),
      author: "Anitha Jadhav",
      role: "Senior Systems Engineer (Deloitte)",
    },
  ];

  return (
    <section id="testimonials" style={{ padding: '10rem 0 6rem 0', position: 'relative' }}>
      <div className="container">
        <div className="section-grid">
          
          {/* Sticky Left Column */}
          <div className="sticky-header">
            <div className="section-subtitle">Testimonies</div>
            <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Colleagues Say</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
              Kind words and endorsements from engineering leads, professors, and teammates I've partnered with over the years.
            </p>
          </div>

          {/* Flowing Right Column */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
            }}
          >
            {testimonials.map((testimony, idx) => (
              <div
                key={idx}
                className="glass-card hoverable"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  position: 'relative',
                }}
              >
                {/* Glowing quote icon (flat outline style) */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                    color: 'rgba(255, 80, 5, 0.25)',
                  }}
                >
                  <Quote size={24} />
                </div>

                <p
                  style={{
                    fontSize: '1.05rem',
                    lineHeight: 1.65,
                    fontStyle: 'italic',
                    color: 'var(--text-primary)',
                  }}
                >
                  "{testimony.quote}"
                </p>

                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {testimony.author}
                  </h4>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {testimony.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
