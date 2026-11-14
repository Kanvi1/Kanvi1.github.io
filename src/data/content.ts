// Single source of truth for all site copy. Edit here; components only render.

export const profile = {
  name: 'Vishal Kanwar',
  firstName: 'Vishal',
  lastName: 'Kanwar',
  role: 'Software Development Engineer',
  company: 'Amazon',
  email: 'vishalkanwar10@gmail.com',
  formspree: 'https://formspree.io/f/mjvnowae',
  heroWords: ['reliable systems', 'data pipelines', 'compliance platforms', 'clean interfaces'],
  socials: {
    linkedin: 'https://www.linkedin.com/in/vishal-kanwar/',
    github: 'https://github.com/Kanvi1',
    leetcode: 'https://leetcode.com/kanvi26/',
    instagram: 'https://www.instagram.com/vishal18kanwar/',
  },
  photos: [
    '/images/opt/about-01.jpg',
    '/images/opt/about-02.jpg',
    '/images/opt/about-03.jpg',
    '/images/opt/about-04.jpg',
  ],
} as const

/** Career start dates used to compute live durations. */
export const AMAZON_START = new Date(2024, 6, 8) // 08 Jul 2024
export const DELOITTE_START = new Date(2019, 0, 1) // Jan 2019 (intern)
export const DELOITTE_END = new Date(2022, 6, 31) // Jul 2022
export const MASTERS_START = new Date(2022, 7, 15) // Aug 2022
export const MASTERS_END = new Date(2024, 4, 4) // 04 May 2024

export function monthsBetween(a: Date, b: Date) {
  let months = (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth())
  if (b.getDate() < a.getDate()) months--
  return Math.max(0, months)
}

export function formatDuration(months: number) {
  const y = Math.floor(months / 12)
  const m = months % 12
  const ys = y > 0 ? `${y} yr${y > 1 ? 's' : ''}` : ''
  const ms = m > 0 ? `${m} mo${m > 1 ? 's' : ''}` : ''
  return [ys, ms].filter(Boolean).join(' ') || '0 mos'
}

export const amazonMonths = () => monthsBetween(AMAZON_START, new Date())
export const deloitteMonths = () => monthsBetween(DELOITTE_START, DELOITTE_END)
/** Professional engineering time (Deloitte + Amazon), in whole years. */
export const yearsOfExperience = () => Math.floor((amazonMonths() + deloitteMonths()) / 12)

export interface Position {
  title: string
  period: string
  desc: string
}

export interface Experience {
  company: string
  logo: string
  team?: string
  duration: () => string
  positions: Position[]
}

export const experiences: Experience[] = [
  {
    company: 'Amazon',
    logo: '/images/opt/logo-amazon.png',
    team: 'Sustainability Technology · HRSI',
    duration: () => formatDuration(amazonMonths()),
    positions: [
      {
        title: 'Software Development Engineer',
        period: 'Jul 2024 — Present',
        desc: 'Architect and maintain global compliance web platforms and high-throughput data pipelines within the Sustainability Technology organization. Support the Human Risk and Social Impact (HRSI) team by building systems to manage, audit, and remediate workplace safety and human rights compliance records for thousands of suppliers worldwide.',
      },
    ],
  },
  {
    company: 'Deloitte',
    logo: '/images/logo-deloitte-2.jpg',
    team: 'Risk & Financial Advisory',
    duration: () => '3 yrs 5 mos',
    positions: [
      {
        title: 'Senior Software Engineer',
        period: 'May 2022 — Jul 2022',
        desc: 'Led a team of 3 developers to design and deliver high-impact compliance and risk modules. Streamlined API integrations and code-review practices, increasing sprint velocity by 20% with zero regulatory defects.',
      },
      {
        title: 'Software Engineer I',
        period: 'May 2021 — May 2022',
        desc: 'Architected scalable risk-advisory software for Fortune 500 clients. Leveraged Spring Boot and AWS to automate compliance-tracking workflows, earning the Outstanding Performance Award for cutting client data-processing latency by 35%.',
      },
      {
        title: 'Associate Software Engineer',
        period: 'Jun 2019 — Apr 2021',
        desc: 'Built backend APIs and data-ingestion pipelines with Java, Spring Boot and Hibernate JPA. Supported database migrations and integration testing for financial advisory platforms serving risk-sensitive clients.',
      },
      {
        title: 'Software Engineer Intern',
        period: 'Jan 2019 — Mar 2019',
        desc: 'Led a team of 15 interns building a fog and affective computing business prototype, presenting the integration architecture to Deloitte directors.',
      },
    ],
  },
  {
    company: 'Mages Studios',
    logo: '/images/logo-mages.jpg',
    team: 'AR / VR',
    duration: () => '3 mos',
    positions: [
      {
        title: 'Software Engineer Intern',
        period: 'Jun 2018 — Aug 2018',
        desc: 'Led a team of four designing and developing AR and VR projects: user research, storyboarding, and immersive VR experiences for cancer patients, plus an ARCore-based scholarly app.',
      },
    ],
  },
]

export type ProjectCategory = 'web' | 'mobile' | 'design'

export interface Project {
  id: string
  title: string
  subtitle: string
  desc: string
  impact?: string
  image: string
  tags: string[]
  category: ProjectCategory[]
  year?: string
  link?: string
  github?: string
  figma?: string
  restricted?: boolean
}

export const projects: Project[] = [
  {
    id: 'stride',
    title: 'STRIDE',
    subtitle: 'AR training for the Department of Defense',
    desc: 'An Augmented Reality Android training application for DoD professionals. Projects interactive 3D models and step-by-step animations in AR for microgrid setup and maintenance, designed to scale into other hands-on training verticals.',
    impact: 'Built for DoD microgrid crews',
    image: '/images/opt/work-stride.jpg',
    tags: ['Unity', 'C#', 'ARCore', 'Blender', 'Figma'],
    category: ['mobile', 'design'],
    figma:
      'https://www.figma.com/proto/bC6L11M1CakPeSMTi0xRuQ/STRIDE-AR-Review?page-id=515%3A12670&node-id=515-13192&starting-point-node-id=515%3A13192&mode=design&t=pfoju3aDbx04Bwhv-1',
  },
  {
    id: 'symposium',
    title: 'Energy Symposium',
    subtitle: 'Event promotion website',
    desc: 'Led UI/UX design and engineering of an event portal from concept and pitch through implementation, testing and production — a fully operational landing page shipped in days.',
    impact: '+50% reservations',
    image: '/images/opt/work-symposium.jpg',
    tags: ['HTML/CSS/JS', 'Figma', 'Responsive'],
    category: ['web', 'design'],
    link: 'https://vishalkanwar.com/LEAPS-SymposiumWebsite/',
  },
  {
    id: 'leaps',
    title: 'LEAPS',
    subtitle: 'Energy laboratory website · ASU',
    desc: 'Spearheaded the redesign of the LEAPS energy lab website with a sleek, responsive interface. Information-architecture and layout improvements directly lifted course sign-ups.',
    impact: '+20% enrollment',
    image: '/images/opt/work-leaps.jpg',
    tags: ['WordPress', 'HTML/CSS/JS', 'Figma'],
    category: ['web', 'design'],
    link: 'https://leaps.asu.edu/',
  },
  {
    id: 'fitfusion',
    title: 'Fit Fusion',
    subtitle: 'Context-aware fitness on Android + WearOS',
    desc: 'A personalized fitness app syncing real-time health metrics from a wearable. It auto-regulates workouts — telling you to rest when your heart rate spikes, or scaling intensity when sets come easy.',
    image: '/images/opt/work-fitfusion.jpg',
    tags: ['Android', 'Java', 'WearOS', 'Figma'],
    category: ['mobile', 'design'],
    github: 'https://github.com/Kanvi1/Fit-Fusion.git',
    figma:
      'https://www.figma.com/proto/VithZUuYLfWB2mREgUjj8r/MC-Project?page-id=0%3A1&type=design&node-id=1-3&viewport=945%2C524%2C0.22&t=MEBXXKkbX6vrU2mY-1&scaling=scale-down&starting-point-node-id=1%3A3&mode=design',
  },
  {
    id: 'bugseye',
    title: 'Bugs Eye',
    subtitle: 'Bug tracking platform',
    desc: 'A secure 3-tier issue tracker built with Java Spring Boot and deployed on AWS. Automated bug lifecycle stages and notifications, slashing communication overhead and re-work.',
    impact: '−80% re-work',
    image: '/images/opt/work-003.jpg',
    tags: ['Java', 'Spring Boot', 'AWS', 'MySQL'],
    category: ['web'],
    restricted: true,
  },
  {
    id: 'makershala',
    title: 'Makershala',
    subtitle: 'STEM learning portal',
    desc: 'A full-stack online learning system for STEM curricula aimed at students aged 8–16, with interactive lessons, progress dashboards and modular onboarding.',
    image: '/images/opt/work-001.jpg',
    tags: ['PHP', 'MySQL', 'Bootstrap'],
    category: ['web'],
    link: 'https://makershala.com/',
  },
  {
    id: 'epicease',
    title: 'Epic Ease',
    subtitle: 'User-story generation, simplified',
    desc: 'A template-driven tool that auto-generates Agile user stories matching strict client guidelines, mapping user flows for the business team and keeping business and engineering in lockstep.',
    impact: '−30% feedback loops',
    image: '/images/opt/work-002.jpg',
    tags: ['Product Design', 'Figma', 'Agile'],
    category: ['design'],
    restricted: true,
  },
]

export interface Achievement {
  date: string
  year: number
  title: string
  desc: string
  image: string
  kind: 'career' | 'cert' | 'award' | 'code' | 'education' | 'community'
}

export const achievements: Achievement[] = [
  { date: 'Jul 2024', year: 2024, kind: 'career', title: 'Joined Amazon as SDE', desc: 'Started on the Sustainability Technology team building global auditing and worker-remediation systems.', image: '/images/amzn-logo.jpg' },
  { date: 'May 2024', year: 2024, kind: 'education', title: "Master's in Computer Science", desc: 'Graduated from Arizona State University.', image: '/images/opt/ASUGrad.jpg' },
  { date: 'Mar 2024', year: 2024, kind: 'code', title: '100-day LeetCode streak', desc: '100 consecutive days of solving algorithmic problems.', image: '/images/opt/img-lcc-streak.jpg' },
  { date: 'Mar 2024', year: 2024, kind: 'career', title: 'Personal website launch', desc: 'A sandbox for front-end animation, design and engineering experiments.', image: '/images/img-website.gif' },
  { date: 'Feb 2024', year: 2024, kind: 'cert', title: 'AWS Solutions Architect – Associate', desc: 'Certified in designing resilient, secure, auto-scaling cloud architectures.', image: '/images/opt/img-aws-sa.jpg' },
  { date: 'Dec 2023', year: 2023, kind: 'code', title: 'Top 1000 worldwide · LeetCode', desc: "Ranked in the global top 1000 of a LeetCode Weekly Contest.", image: '/images/opt/img-lcc.jpg' },
  { date: 'Dec 2023', year: 2023, kind: 'education', title: 'Perfect 4.0 GPA', desc: "A perfect semester in ASU's Computer Science master's program.", image: '/images/img-gpa.gif' },
  { date: 'Oct 2023', year: 2023, kind: 'code', title: 'Hacktoberfest contributor', desc: 'Merged pull requests into open-source libraries and earned the official badge.', image: '/images/opt/img-hacktober.jpg' },
  { date: 'Jul 2023', year: 2023, kind: 'cert', title: 'Certified Scrum Master', desc: 'Scrum Alliance CSM — driving agile process and cross-functional flow.', image: '/images/opt/img-csm-2.jpg' },
  { date: 'Jan 2023', year: 2023, kind: 'code', title: 'LeetCode 100 Days Badge', desc: 'Solved problems on 100+ separate days through 2022.', image: '/images/img-2022-100.gif' },
  { date: 'Feb 2022', year: 2022, kind: 'career', title: 'Deloitte technical interviewer', desc: 'Selected to run technical interviews for new-grad and experienced hires.', image: '/images/img-interview.gif' },
  { date: 'Jan 2022', year: 2022, kind: 'award', title: 'Outstanding Performance Award', desc: 'Recognized at Deloitte for exceptional client delivery and module design.', image: '/images/opt/img-deloitte-opa-2.jpg' },
  { date: 'May 2021', year: 2021, kind: 'award', title: 'Deloitte Applause Award', desc: 'For rapid troubleshooting of enterprise application issues under tight timelines.', image: '/images/opt/img-deloitte-aa.jpg' },
  { date: 'Feb 2021', year: 2021, kind: 'cert', title: 'AWS Developer – Associate', desc: 'Certified in building and deploying applications on AWS.', image: '/images/opt/img-aws-sd.jpg' },
  { date: 'Aug 2018', year: 2018, kind: 'community', title: 'VR project showcase', desc: 'Demoed our medical VR application to ~300 peers and industry judges.', image: '/images/opt/img-vr-2.jpg' },
  { date: 'Jan 2018', year: 2018, kind: 'community', title: "Founded the Designers' Society", desc: 'Started a campus community for graphic design, with workshops and skill-shares.', image: '/images/opt/img-visualive.jpg' },
  { date: 'Sep 2017', year: 2017, kind: 'community', title: 'Co-founded GDSC chapter', desc: 'Google Developer Student Club co-lead: Android bootcamps and mentoring.', image: '/images/opt/img-gdsc.jpg' },
]

export interface Testimonial {
  quote: string
  /** Substring of `quote` to hand-mark. */
  highlight: string
  author: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    quote: 'Vishal was a great asset to our team in which he led the software development of customizations for an enterprise model risk management application. He was able to quickly grasp often complex requirements from the banking client and translate them into fully functional features. If given the opportunity again, I wouldn’t hesitate to have Vishal on my team.',
    highlight: 'quickly grasp often complex requirements',
    author: 'Arthur Ilyasov',
    role: 'Senior Consultant / Software Architect',
  },
  {
    quote: 'Vishal is excellent in capturing client and team needs and translating those into the creation of quality products and outcomes. Excellent teamwork and interactions. Always there to partner and deliver. Good transferrable skills.',
    highlight: 'excellent in capturing client and team needs',
    author: 'Dr. Nathan Johnson',
    role: 'Associate Professor & Director, LEAPS Lab · ASU',
  },
  {
    quote: 'Vishal has been one of the best team members I have worked with. He has been my go-to colleague for most of the critical bugs or enhancements. He is smart, and dedicated, with effective communication skills, and is very easy to work with. All his high-quality work has made a huge impact on the team and the project. Keep up the fantastic work!',
    highlight: 'go-to colleague',
    author: 'Madhuri Jhawar',
    role: 'Senior Software Engineer · Deloitte',
  },
  {
    quote: 'Vishal has always had a way of getting the most out of the team and maximizing everyone’s potential. He excels in whatever comes his way; developing new software modules from scratch, exceptional presentations, figuring out new tech, debugging and whatnot! I wouldn’t hesitate a bit to have him as my team-mate again.',
    highlight: 'maximizing everyone’s potential',
    author: 'Anitha Jadhav',
    role: 'Senior Systems Engineer · Deloitte',
  },
  {
    quote: 'Vishal has strong analytical skills that he uses effectively in his research. His exceptional research skills are complemented by his fantastic communication skills. He was very collaborative, solution-oriented, and well-liked by the team he was leading. A great colleague to work with!',
    highlight: 'fantastic communication skills',
    author: 'Shruti Tanwar',
    role: 'Lead Researcher / Senior Developer',
  },
  {
    quote: 'Vishal is a highly talented individual who deals with the situation with all the zeal. He is a team player and a dependable colleague. He is always ready to go that extra mile to get the work done. It was a pleasure working with him.',
    highlight: 'dependable colleague',
    author: 'Anjali Shetty',
    role: 'Consultant / Project PMO · Deloitte',
  },
]

export const skillGroups = [
  { title: 'Backend', items: ['Java', 'Spring Boot', 'Node.js', 'Express', 'Hibernate JPA', 'Python', 'C#', 'REST APIs'] },
  { title: 'Cloud & Data', items: ['AWS', 'Docker', 'Jenkins', 'MySQL', 'MongoDB', 'SQL', 'Data pipelines'] },
  { title: 'Frontend & Design', items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Sass', 'Figma', 'Bootstrap'] },
  { title: 'Practice', items: ['System design', 'Agile / Scrum', 'Code review', 'Git', 'Jira', 'JMeter', 'Mentoring'] },
] as const

export const certifications = [
  { name: 'AWS Solutions Architect – Associate', year: '2024' },
  { name: 'Certified Scrum Master', year: '2023' },
  { name: 'AWS Developer – Associate', year: '2021' },
] as const
