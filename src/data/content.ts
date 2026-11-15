// Single source of truth for all site copy. Edit here; components only render.

export const profile = {
  name: 'Vishal Kanwar',
  firstName: 'Vishal',
  lastName: 'Kanwar',
  role: 'Software Development Engineer',
  company: 'Amazon',
  email: 'vishalkanwar10@gmail.com',
  formspree: 'https://formspree.io/f/mjvnowae',
  heroWords: [
    'things that scale',
    'interfaces that click',
    'solutions that matter',
    'ideas into reality',
  ],
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
  intro?: string
  duration: () => string
  positions: Position[]
}

export const experiences: Experience[] = [
  {
    company: 'Amazon',
    logo: '/images/amzn-logo-sm.jpg',
    team: 'Sustainability Technology · HRSI',
    duration: () => formatDuration(amazonMonths()),
    positions: [
      {
        title: 'Software Development Engineer',
        period: 'Jul 2024 - Present',
        desc: "I'm building technology that helps protect human rights across Amazon's global supply chain.\n\nMy work involves developing global supplier auditing platforms, scalable backend services, and data pipelines that help teams identify risks, manage audits, and track remediation efforts across thousands of suppliers worldwide.\n\nWhat makes it meaningful? Knowing that the systems I build help people make decisions that can have a real impact beyond the screen.",
      },
    ],
  },
  {
    company: 'Deloitte',
    logo: '/images/logo-deloitte-2.jpg',
    team: 'Risk & Financial Advisory',
    intro:
      'My journey at Deloitte took me from intern to Senior Software Engineer, with plenty of engineering challenges and learning along the way.',
    duration: () => '3 yrs 5 mos',
    positions: [
      {
        title: 'Senior Software Engineer',
        period: 'May 2022 - Jul 2022',
        desc: 'I led a team of three developers building enterprise risk and compliance solutions. Beyond writing code, I focused on improving how we worked together - streamlining API integrations and code reviews to boost sprint velocity by 20%, while maintaining zero regulatory defects.',
      },
      {
        title: 'Software Engineer I',
        period: 'May 2021 - May 2022',
        desc: "I designed and developed scalable risk-management platforms for Fortune 500 clients using Spring Boot and AWS.\n\nOne of my proudest wins was reducing client data-processing latency by 35%, which also earned me Deloitte's Outstanding Performance Award.",
      },
      {
        title: 'Associate Software Engineer',
        period: 'Jun 2019 - Apr 2021',
        desc: 'This is where I built my foundation in enterprise software engineering.\n\nI developed backend APIs, data-ingestion pipelines, and database integrations using Java, Spring Boot, and Hibernate, learning what it takes to build reliable software for complex, risk-sensitive environments.',
      },
      {
        title: 'Software Engineer Intern',
        period: 'Jan 2019 - Mar 2019',
        desc: 'My first taste of professional software engineering - and surprisingly, leadership too!\n\nI led a team of 15 interns building a prototype involving fog and affective computing, eventually presenting our architecture to Deloitte directors.\n\nNot a bad way to start.',
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
        period: 'Jun 2018 - Aug 2018',
        desc: 'Before cloud infrastructure and enterprise platforms, I was experimenting with immersive technology.\n\nI led a team of four developing AR and VR experiences, including a VR application designed for cancer patients and an ARCore-powered educational app.\n\nIt was where I discovered how much I enjoyed bringing engineering and creativity together.',
      },
    ],
  },
]

export type ProjectCategory = 'web' | 'mobile' | 'design'

export interface Project {
  id: string
  title: string
  subtitle: string
  oneLiner: string
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
    subtitle: 'AR training for Department of Defense microgrid crews',
    oneLiner: 'Hands-on training, minus the guesswork.',
    desc: 'An AR-powered Android app that brings complex microgrid equipment to life through interactive 3D models and step-by-step guidance. Built for Department of Defense personnel, it makes technical training more visual, intuitive, and accessible.',
    impact: 'Built for DoD microgrid crews',
    image: '/images/opt/work-stride.jpg',
    tags: ['Unity', 'C#', 'ARCore', 'Blender', 'Figma'],
    category: ['mobile', 'design'],
    figma:
      'https://www.figma.com/proto/bC6L11M1CakPeSMTi0xRuQ/STRIDE-AR-Review?page-id=515%3A12670&node-id=515-13192&starting-point-node-id=515%3A13192&mode=design&t=pfoju3aDbx04Bwhv-1',
  },
  {
    id: 'bugseye',
    title: 'Bugs Eye',
    subtitle: 'Full-stack issue tracking platform',
    oneLiner: "Because bugs are inevitable. Chaos isn't.",
    desc: 'A three-tier issue-tracking platform built with Spring Boot and AWS. I automated bug lifecycles and notifications to keep teams in sync, reduce communication overhead, and cut rework by 80%.',
    impact: '−80% re-work',
    image: '/images/opt/work-003.jpg',
    tags: ['Java', 'Spring Boot', 'AWS', 'MySQL'],
    category: ['web'],
    restricted: true,
  },
  {
    id: 'fitfusion',
    title: 'Fit Fusion',
    subtitle: 'Context-aware fitness · Android + Wear OS',
    oneLiner: 'A workout buddy that actually pays attention.',
    desc: "A fitness app that connects with Wear OS to track real-time health metrics and adapt workouts on the fly. Heart rate climbing too high? Time for a breather. Crushing your sets? Let's turn things up.",
    image: '/images/opt/work-fitfusion.jpg',
    tags: ['Android', 'Java', 'WearOS', 'Figma'],
    category: ['mobile', 'design'],
    github: 'https://github.com/Kanvi1/Fit-Fusion.git',
    figma:
      'https://www.figma.com/proto/VithZUuYLfWB2mREgUjj8r/MC-Project?page-id=0%3A1&type=design&node-id=1-3&viewport=945%2C524%2C0.22&t=MEBXXKkbX6vrU2mY-1&scaling=scale-down&starting-point-node-id=1%3A3&mode=design',
  },
  {
    id: 'symposium',
    title: 'Energy Symposium',
    subtitle: 'Event website · UI & engineering',
    oneLiner: 'From concept to launch in days.',
    desc: 'I led the design and development of an event website, taking it from early ideas and wireframes to a production-ready experience in just days. The result? A smoother registration journey and a reported 50% increase in reservations.',
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
    oneLiner: 'A fresh look for big ideas.',
    desc: "I redesigned ASU's LEAPS energy lab website to make research, courses, and resources easier to discover. Better navigation, cleaner layouts, and a more intuitive experience contributed to a reported 20% increase in course enrollment.",
    impact: '+20% enrollment',
    image: '/images/opt/work-leaps.jpg',
    tags: ['WordPress', 'HTML/CSS/JS', 'Figma'],
    category: ['web', 'design'],
    link: 'https://leaps.asu.edu/',
  },
  {
    id: 'makershala',
    title: 'Makershala',
    subtitle: 'STEM learning portal',
    oneLiner: 'Making STEM a little more fun.',
    desc: 'A full-stack learning platform designed to make science and technology more engaging for students aged 8-16. Interactive lessons, progress tracking, and a structured learning experience bring curiosity into the classroom.',
    image: '/images/opt/work-001.jpg',
    tags: ['PHP', 'MySQL', 'Bootstrap'],
    category: ['web'],
    link: 'https://makershala.com/',
  },
  {
    id: 'epicease',
    title: 'Epic Ease',
    subtitle: 'Agile user-story generation',
    oneLiner: 'Less back-and-forth. More getting things done.',
    desc: 'A template-driven tool that simplifies Agile user-story creation while keeping business requirements and engineering teams aligned. Clearer workflows and standardized stories helped reduce feedback loops by 30%.',
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
  { date: 'Jul 2024', year: 2024, kind: 'career', title: 'Joined Amazon! 🚀', desc: "A new chapter! Joined Amazon's Sustainability Technology team to build systems that help protect human rights across its global supply chain.", image: '/images/amzn-logo.jpg' },
  { date: 'May 2024', year: 2024, kind: 'education', title: "Master's in Computer Science 🎓", desc: 'Graduated from Arizona State University, bringing together my love for software engineering, problem-solving, and building things.', image: '/images/opt/ASUGrad.jpg' },
  { date: 'Mar 2024', year: 2024, kind: 'code', title: '100 days of consistency 💻', desc: 'Solved LeetCode problems for 100 consecutive days. Turns out consistency is its own kind of superpower.', image: '/images/opt/img-lcc-streak.jpg' },
  { date: 'Mar 2024', year: 2024, kind: 'career', title: 'Started building my corner of the internet', desc: 'Launched my personal website - part portfolio, part creative playground, and a place to experiment with whatever catches my curiosity.', image: '/images/img-website.gif' },
  { date: 'Feb 2024', year: 2024, kind: 'cert', title: 'AWS Solutions Architect - Associate', desc: 'Earned my certification in designing secure, reliable, and scalable cloud architectures.', image: '/images/opt/img-aws-sa.jpg' },
  { date: 'Dec 2023', year: 2023, kind: 'code', title: 'Top 1,000 worldwide on LeetCode', desc: 'Ranked among the top 1,000 participants worldwide in a LeetCode Weekly Contest. Definitely one of those screenshots worth saving!', image: '/images/opt/img-lcc.jpg' },
  { date: 'Dec 2023', year: 2023, kind: 'education', title: 'A perfect semester!', desc: "Earned a 4.0 GPA for a semester of my master's program at ASU. Late-night study sessions paid off!", image: '/images/img-gpa.gif' },
  { date: 'Oct 2023', year: 2023, kind: 'code', title: 'Hacktoberfest contributor', desc: 'Contributed to open-source projects, got pull requests merged, and earned the official Hacktoberfest badge.', image: '/images/opt/img-hacktober.jpg' },
  { date: 'Jul 2023', year: 2023, kind: 'cert', title: 'Certified ScrumMaster (CSM)', desc: 'Learned more about agile teamwork, collaboration, and keeping projects moving without unnecessary chaos.', image: '/images/opt/img-csm-2.jpg' },
  { date: 'Jan 2023', year: 2023, kind: 'code', title: 'LeetCode 100 Days Badge', desc: 'Earned recognition for solving problems on more than 100 separate days in 2022. Apparently, I enjoy algorithmic puzzles.', image: '/images/img-2022-100.gif' },
  { date: 'Feb 2022', year: 2022, kind: 'career', title: 'Became a technical interviewer at Deloitte', desc: 'Went from preparing for technical interviews to conducting them. A pretty cool full-circle moment!', image: '/images/img-interview.gif' },
  { date: 'Jan 2022', year: 2022, kind: 'award', title: 'Outstanding Performance Award 🏆', desc: 'Recognized for delivering impactful engineering solutions and thoughtful module design for enterprise clients.', image: '/images/opt/img-deloitte-opa-2.jpg' },
  { date: 'May 2021', year: 2021, kind: 'award', title: 'Deloitte Applause Award', desc: 'Recognized for tackling critical application issues under tight deadlines. A little pressure, a lot of debugging, and a rewarding outcome.', image: '/images/opt/img-deloitte-aa.jpg' },
  { date: 'Feb 2021', year: 2021, kind: 'cert', title: 'AWS Developer - Associate', desc: 'Earned my first AWS certification, strengthening my foundation in building and deploying cloud applications.', image: '/images/opt/img-aws-sd.jpg' },
  { date: 'Aug 2018', year: 2018, kind: 'community', title: 'VR project showcase', desc: 'Presented our medical VR application to around 300 peers and industry judges. One of my earliest experiences bringing an ambitious idea to life.', image: '/images/opt/img-vr-2.jpg' },
  { date: 'Jan 2018', year: 2018, kind: 'community', title: "Founded the Designers' Society 🎨", desc: 'Started a campus community for people who loved design as much as I did, organizing workshops, sharing skills, and learning together.', image: '/images/opt/img-visualive.jpg' },
  { date: 'Sep 2017', year: 2017, kind: 'community', title: 'Co-founded a Google Developer Student Club', desc: 'Helped build a community of curious developers through Android workshops, bootcamps, and mentoring. Because learning is better together.', image: '/images/opt/img-gdsc.jpg' },
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
  { title: 'Backend Engineering', items: ['Java', 'Spring Boot', 'Node.js', 'Express', 'Python', 'C#', 'Hibernate JPA', 'REST APIs'] },
  { title: 'Cloud & Data', items: ['AWS', 'Docker', 'Jenkins', 'MySQL', 'MongoDB', 'SQL', 'Data Pipelines'] },
  { title: 'Frontend & Design', items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Sass', 'Figma', 'Bootstrap'] },
  { title: 'Engineering Practices', items: ['System Design', 'Agile / Scrum', 'Code Reviews', 'Git', 'Jira', 'JMeter', 'Mentoring'] },
] as const

export const certifications = [
  { name: 'AWS Certified Solutions Architect - Associate', year: '2024' },
  { name: 'Certified ScrumMaster (CSM)', year: '2023' },
  { name: 'AWS Certified Developer - Associate', year: '2021' },
] as const
