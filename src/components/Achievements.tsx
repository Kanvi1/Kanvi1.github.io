import { useRef, useEffect } from 'react';

interface Achievement {
  date: string;
  title: string;
  desc: string;
  image: string;
}

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      date: '08 Jul, 2024',
      title: 'Joined Amazon as SDE',
      desc: 'Began working as a Software Development Engineer at Amazon, joining the Sustainability Technology team to build global auditing record systems and worker remediation tooling. 🚀',
      image: '/images/logo-amazon.png',
    },
    {
      date: '04 May, 2024',
      title: 'Mastering My Masters',
      desc: 'Officially graduated with a Master\'s degree in Computer Science from Arizona State University. Celebrating this milestone and embracing new adventures! 🎓🎉',
      image: '/images/ASUGrad.jpg',
    },
    {
      date: '22 Mar, 2024',
      title: '100 Day Streak - LeetCode',
      desc: 'Smashed a major problem-solving milestone: 100 consecutive days of resolving algorithmic challenges on LeetCode. Constant refinement of analytical capabilities! 💯',
      image: '/images/img-lcc-streak.png',
    },
    {
      date: '04 Mar, 2024',
      title: 'Personal Website Launch',
      desc: 'Launched my personal custom portfolio website - a digital sandbox designed to experiment with front-end animations, web designs, and engineering systems. ✨',
      image: '/images/img-website.gif',
    },
    {
      date: '18 Feb, 2024',
      title: 'AWS Certified Solutions Architect',
      desc: 'Earned the AWS Certified Solutions Architect - Associate validation. Ready to deploy highly resilient, secure, and auto-scaling cloud microservices! 🚀',
      image: '/images/img-aws-sa.png',
    },
    {
      date: '13 Dec, 2023',
      title: 'Perfect 4.0 GPA',
      desc: 'Achieved a perfect 4.0 GPA in the third semester of my Master\'s program in Computer Science at ASU. ✅',
      image: '/images/img-gpa.gif',
    },
    {
      date: '16 Dec, 2023',
      title: 'Worldwide Rank Under 1000 - LeetCode',
      desc: 'Ranked in the top 1000 globally on LeetCode\'s Weekly Contest leaderboard, competing with thousands of software engineers worldwide. 📈',
      image: '/images/img-lcc.png',
    },
    {
      date: '26 Oct, 2023',
      title: 'Hacktoberfest Open Source Winner',
      desc: 'Participated in Hacktoberfest, submitting merged pull requests to open-source software libraries, earning the official Hacktoberfest badge. 🥇',
      image: '/images/img-hacktober.png',
    },
    {
      date: '16 Jul, 2023',
      title: 'Certified Scrum Master (CSM)',
      desc: 'Completed Scrum Alliance training to get the Certified Scrum Master certification. Passionate about driving agile processes and cross-functional synergy. 🚀',
      image: '/images/img-csm-2.png',
    },
    {
      date: '01 Jan, 2023',
      title: '100 Days Badge (2022) - LeetCode',
      desc: 'Completed 100+ separate daily algorithmic tasks on LeetCode during the year 2022, securing the annual badge. 💯',
      image: '/images/img-2022-100.gif',
    },
    {
      date: '19 Feb, 2022',
      title: 'Deloitte Technical Interviewer',
      desc: 'Selected to conduct core technical interviews and screen new graduate & experienced candidates joining Deloitte\'s engineering cohorts. 🔮',
      image: '/images/img-interview.gif',
    },
    {
      date: '28 Jan, 2022',
      title: 'Outstanding Performance Award - Deloitte',
      desc: 'Honored with the Outstanding Performance Award at Deloitte for exceptional client delivery and leading module designs. 🌟',
      image: '/images/img-deloitte-opa-2.png',
    },
    {
      date: '27 May, 2021',
      title: 'Deloitte Applause Award II',
      desc: 'Granted the Deloitte Applause Award for key contributions and rapid troubleshooting of enterprise application anomalies under tight timelines. 🌟',
      image: '/images/img-deloitte-aa.png',
    },
    {
      date: '09 Feb, 2021',
      title: 'AWS Certified Developer',
      desc: 'Earned the AWS Certified Developer - Associate accreditation, signifying core competency in designing, building, and deploying cloud apps. 🥷',
      image: '/images/img-aws-sd.png',
    },
    {
      date: '23 Aug, 2018',
      title: 'VR Project Showcase',
      desc: 'Successfully demonstrated our team\'s medical Virtual Reality interactive application to an audience of ~300 peers and industry judges at my university. 🚀',
      image: '/images/img-vr-2.jpg',
    },
    {
      date: '16 Jan, 2018',
      title: 'Founded University Designers\' Society',
      desc: 'Established and led a community of creative graphic design enthusiasts in my college, hosting workshops and skill transfer classes. 🎨',
      image: '/images/img-visualive.png',
    },
    {
      date: '01 Sep, 2017',
      title: 'GDSC Student Lead Co-Founder',
      desc: 'Co-founded the Google Developer Student Club at my university, conducting Android development bootcamps and mentoring junior students. 👓',
      image: '/images/img-gdsc.png',
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    // Flowing slowly and elegantly (25 pixels/sec)
    const speed = 25;

    const scrollLoop = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!isHoveredRef.current && container) {
        container.scrollLeft += speed * delta;
      }

      animationFrameId = requestAnimationFrame(scrollLoop);
    };

    animationFrameId = requestAnimationFrame(scrollLoop);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const halfWidth = container.scrollWidth / 2;
    // Seamless loop wrap-around boundaries:
    if (container.scrollLeft >= halfWidth) {
      container.scrollLeft -= halfWidth;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += halfWidth;
    }
  };

  return (
    <section id="achievements" style={{ padding: '10rem 0 6rem 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-subtitle">Wins</div>
          <h2 className="section-title" style={{ fontSize: '3rem' }}>Achievements</h2>
        </div>
      </div>

      {/* Full-width Auto-Scrolling Marquee Track */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        onMouseEnter={() => { isHoveredRef.current = true; }}
        onMouseLeave={() => { isHoveredRef.current = false; }}
        onTouchStart={() => { isHoveredRef.current = true; }}
        onTouchEnd={() => { isHoveredRef.current = false; }}
        className="marquee-container"
      >
        <div className="marquee-track">
          {/* Render first copy */}
          {achievements.map((ach, idx) => (
            <div
              key={`ach-1-${idx}`}
              className="glass-card hoverable"
              style={{
                width: '320px',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                padding: 0,
                overflow: 'hidden',
                userSelect: 'none',
              }}
            >
              {/* Image Container with Blurred Backdrop */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '200px',
                  overflow: 'hidden',
                  backgroundColor: '#030509',
                  borderBottom: '1px solid var(--border-color)',
                }}
              >
                {/* Scaled & Blurred Backdrop */}
                <img
                  src={ach.image}
                  alt=""
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'blur(12px) brightness(0.4)',
                    transform: 'scale(1.2)',
                    pointerEvents: 'none',
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                  }}
                />

                {/* Fully Visible Centered GIF / Image */}
                <img
                  src={ach.image}
                  alt={ach.title}
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    pointerEvents: 'none',
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                  }}
                />
              </div>

              {/* Text Content */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', flexGrow: 1 }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                  {ach.date}
                </span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                  {ach.title}
                </h3>
                <p style={{ fontSize: '0.82rem', lineHeight: 1.4, color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
                  {ach.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Render identical second copy for seamless wrap */}
          {achievements.map((ach, idx) => (
            <div
              key={`ach-2-${idx}`}
              className="glass-card hoverable"
              style={{
                width: '320px',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                padding: 0,
                overflow: 'hidden',
                userSelect: 'none',
              }}
            >
              {/* Image Container with Blurred Backdrop */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '200px',
                  overflow: 'hidden',
                  backgroundColor: '#030509',
                  borderBottom: '1px solid var(--border-color)',
                }}
              >
                {/* Scaled & Blurred Backdrop */}
                <img
                  src={ach.image}
                  alt=""
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'blur(12px) brightness(0.4)',
                    transform: 'scale(1.2)',
                    pointerEvents: 'none',
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                  }}
                />

                {/* Fully Visible Centered GIF / Image */}
                <img
                  src={ach.image}
                  alt={ach.title}
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    pointerEvents: 'none',
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                  }}
                />
              </div>

              {/* Text Content */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', flexGrow: 1 }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                  {ach.date}
                </span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                  {ach.title}
                </h3>
                <p style={{ fontSize: '0.82rem', lineHeight: 1.4, color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
                  {ach.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
