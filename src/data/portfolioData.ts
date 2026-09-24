import { Project, RoadmapStep, Certification, TechItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Yakshitha Sri N D',
  shortName: 'Yakshitha',
  brandLogo: 'Yakshitha.',
  title: 'Computer Science Undergraduate & Web Developer',
  subtitle: 'CS Undergrad @ SRM Institute of Science & Technology, Chennai',
  taglineTopRight: 'Turning ideas into reality',
  hireTagline: 'Available for hire — building fast, resilient web applications & simulation engines using modern tech stacks.',
  email: 'yakshithasri.nd@gmail.com',
  github: 'https://github.com/Yakshitha28',
  githubSecondary: 'https://github.com/santhoshmrs4490-sketch',
  githubDisplay: 'github.com/Yakshitha28',
  linkedin: 'https://linkedin.com/in/yakshitha-sri',
  linkedinDisplay: 'linkedin.com/in/Yakshitha Sri',
  location: 'Chennai, Tamil Nadu, India',
  avatarImage: '/images/yakshitha_user_portrait.jpg',
  heroBgImage: '/images/yakshitha_user_portrait.jpg',
  aboutBio:
    'First-year Computer Science and Engineering (Core) undergraduate student at SRM Institute of Science and Technology, Chennai (B.Tech CSE, 2026–2030). Passionate about low-level systems programming, clean data structures, and web simulation engines. Combines analytical problem solving with modern front-end craftsmanship to build fast, intuitive, and human-centric software solutions.',
  education: [
    {
      institution: 'SRM Institute of Science and Technology, Chennai',
      degree: 'B.Tech in Computer Science and Engineering (CSE Core)',
      period: '2026–2030 · First Year',
      highlights: [
        'Programming Fundamentals & Object-Oriented Programming',
        'Data Structures & Algorithmic Problem Solving',
        'Engineering Mathematics & Discrete Computations',
        'Computer Systems Fundamentals & Architecture',
      ],
    },
    {
      institution: 'Sri Chaitanya Techno School, Chennai',
      degree: 'Higher Secondary & High School Education',
      period: 'Completed with Distinction',
      highlights: [
        'Strong academic foundation in Mathematics, Physics & Computer Science',
        'Early participation in algorithmic challenges and coding forums',
      ],
    },
  ],
};

export const TECHNOLOGIES_MARQUEE = [
  { name: 'Python', icon: 'Terminal', category: 'Core Language' },
  { name: 'C', icon: 'Cpu', category: 'Systems' },
  { name: 'C++', icon: 'Binary', category: 'Systems' },
  { name: 'JavaScript', icon: 'Code2', category: 'Web' },
  { name: 'HTML5 / CSS3', icon: 'Layout', category: 'Web' },
  { name: 'Git & GitHub', icon: 'GitBranch', category: 'Tools' },
  { name: 'Data Structures', icon: 'Network', category: 'Core CS' },
  { name: 'Algorithms', icon: 'Workflow', category: 'Core CS' },
  { name: 'Object-Oriented Design', icon: 'Boxes', category: 'Architecture' },
  { name: 'Machine Learning Basics', icon: 'Sparkles', category: 'AI & Data' },
  { name: 'Computer Vision', icon: 'Eye', category: 'AI & Data' },
  { name: 'Prompt Engineering', icon: 'Zap', category: 'AI Tools' },
  { name: 'VS Code & CLI', icon: 'TerminalSquare', category: 'Workflow' },
  { name: 'Web Application Architecture', icon: 'Layers', category: 'Systems' },
];

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    step: '01',
    title: 'Ideation & Problem Modeling',
    tagline: 'Deconstructing real-world bottlenecks',
    description:
      'Identifying core engineering problems, edge-case crisis scenarios, and user friction points before writing a single line of code.',
    deliverables: [
      'Requirements & Domain Constraint Matrix',
      'Algorithmic Complexity & Flow Blueprint',
      'User Personas & Triage Journey Mapping',
    ],
    accentColor: '#38bdf8',
  },
  {
    step: '02',
    title: 'Systems & UI Architecture',
    tagline: 'Designing modular data pipelines',
    description:
      'Drafting scalable system structures, clean state management mechanisms, and sleek glassmorphic interfaces that guarantee fast rendering.',
    deliverables: [
      'Component Hierarchy & State Machine Design',
      'Responsive Wireframing with Glassmorphism System',
      'Data Contract & Interface Schemas',
    ],
    accentColor: '#06b6d4',
  },
  {
    step: '03',
    title: 'Precision Development',
    tagline: 'Writing clean, resilient code',
    description:
      'Translating blueprints into high-performance web applications and simulations using modern web stacks, semantic markup, and optimized algorithms.',
    deliverables: [
      'Low-latency DOM updates & Event Processing',
      'Accessible semantic structure (WCAG AA compliant)',
      'Clean Git version control commits & branch flows',
    ],
    accentColor: '#3b82f6',
  },
  {
    step: '04',
    title: 'Rigorous Testing & Simulation',
    tagline: 'Stress testing against stress & scale',
    description:
      'Subjecting simulators and interactive systems to peak load conditions, boundary tests, and responsive viewports across modern devices.',
    deliverables: [
      'Crisis surge state verification (bed saturation / queue stress)',
      'Cross-browser & Mobile-first viewport audit',
      'Performance audit: Zero layout shifts & 60fps renders',
    ],
    accentColor: '#818cf8',
  },
  {
    step: '05',
    title: 'Deployment & Iteration',
    tagline: 'Continuous delivery to production',
    description:
      'Publishing production-ready builds on modern cloud infrastructure with optimized assets, comprehensive documentation, and iterative feature rollouts.',
    deliverables: [
      'Vite bundle optimization & CDN distribution',
      'Open-source repository documentation & live previews',
      'Continuous user feedback loop integration',
    ],
    accentColor: '#a855f7',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'lamore-restaurant',
    title: "L'Amore Restaurant — Culinary Experience & Dining Portal",
    tagline: 'Luxury fine-dining digital portal & interactive table reservation platform',
    badge: "Featured Spotlight · L'Amore Web Platform",
    featured: true,
    description:
      "A sophisticated, modern digital dining platform designed for L'Amore Restaurant. Features an interactive gourmet menu, dynamic table booking system with seating tier selection, chef signatures showcase, and seamless responsive design.",
    longDescription:
      "L'Amore Restaurant was architected to deliver an immersive, fine-dining web presence. Engineered with contemporary responsive web standards, it integrates an elegant course-by-course menu explorer (starters, artisanal pasta, chef entrees, patisserie desserts), an interactive reservation engine with guest party sizing & seating zone selection, wine pairing suggestions, and refined amber-gold dark aesthetics.",
    image: '/assets/lamore_restaurant_web_1790149038225.jpg',
    technologies: ['HTML5', 'CSS3', 'Modern JavaScript', 'Responsive Design', 'Interactive Reservation UX', 'UI/UX Craftsmanship'],
    githubUrl: 'https://github.com/Yakshitha28/lamore-restaurant',
    demoUrl: '#demo-lamore',
    interactiveType: 'lamore',
    metrics: [
      { label: 'Cuisine Style', value: 'Contemporary Fine Dining' },
      { label: 'Booking Flow', value: 'Instant Confirmation' },
      { label: 'Menu Curation', value: '4 Course Tiers' },
      { label: 'Responsiveness', value: '100% Mobile & Desktop' },
    ],
    keyFeatures: [
      'Interactive multi-course culinary explorer with ingredient breakdowns and sommelier wine pairings',
      'Table reservation engine supporting party sizes, customized seating zones (indoor/terrace/private booth), and time slot selection',
      'Atmospheric dark-mode aesthetic with warm amber-gold accents and smooth micro-interactions',
      'Fully responsive, accessible design with zero layout shift and rapid asset loading',
    ],
  },
  {
    id: 'student-cafe',
    title: 'Café Caresse — Student Friendly Cafe',
    tagline: 'Atmospheric digital storefront & reservation interface',
    badge: 'Core Web Project · Campus Community',
    featured: false,
    description:
      'An engaging, welcoming web platform designed specifically for university students. Features an organized digital menu, study ambience showcase, affordable student combos, and quick table inquiry mechanics.',
    longDescription:
      'Designed and developed from the ground up to solve campus cafe discovery friction. Engineered with clean semantic HTML5 architecture so menus, daily student discounts, and cafe operational timings are effortless to navigate. Styled with custom modern CSS glassmorphic layers to provide a comfortable, relaxing reading and ordering experience across mobile and desktop.',
    image: '/assets/student_cafe_web_1790106388293.jpg',
    technologies: ['HTML5', 'CSS3', 'Responsive Layout', 'Semantic Architecture', 'UI/UX Design'],
    githubUrl: 'https://github.com/Yakshitha28/student-friendly-cafe-website',
    demoUrl: '#demo-cafe',
    interactiveType: 'cafe',
    metrics: [
      { label: 'Target Audience', value: 'SRM Students' },
      { label: 'Design Theme', value: 'Warm Glass' },
      { label: 'Layout Score', value: '100% Responsive' },
      { label: 'Loading Speed', value: 'Instant' },
    ],
    keyFeatures: [
      'Clean semantic HTML layout ensuring effortless menu navigation and nutritional transparency',
      'Cozy study-vibe showcase highlighting quiet zones, Wi-Fi speeds, and electrical outlet availability',
      'Student combo meal organizer with clear budget tiers for campus undergraduates',
      'Fully responsive CSS grid and flexbox architecture calibrated for on-the-go mobile orders',
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'c1',
    title: 'Full-Stack Web Architecture & Responsive Systems',
    issuer: 'Web Development & UI Engineering Standards',
    date: 'Verified Practical Portfolio',
    skills: ['Modern HTML5/CSS3', 'Component UI Architecture', 'Responsive Layouts', 'Client Interaction Design'],
    category: 'Web',
  },
  {
    id: 'c2',
    title: 'Computer Science & Engineering Core Foundations',
    issuer: 'SRM Institute of Science and Technology, Chennai',
    date: 'B.Tech CSE Core (First Year)',
    skills: ['Data Structures Basics', 'OOP Principles', 'Programming Fundamentals', 'Discrete Math'],
    category: 'University',
  },
  {
    id: 'c3',
    title: 'Python Problem Solving & Algorithmic Thinking',
    issuer: 'Engineering Competency Assessment',
    date: 'Certified Competency',
    skills: ['Python 3', 'Algorithm Design', 'Data Parsing', 'Control Flow'],
    category: 'Engineering',
  },
  {
    id: 'c4',
    title: 'Semantic Web Systems & UI Architecture',
    issuer: 'Frontend Web Development Standards',
    date: 'Verified Practical Portfolio',
    skills: ['HTML5 Living Standard', 'Modern CSS3 Layouts', 'Responsive UI', 'Accessibility'],
    category: 'Systems',
  },
  {
    id: 'c5',
    title: 'Git Version Control & Open Source Collaboration',
    issuer: 'Developer Tooling & Workflow Verification',
    date: 'Version Control Standards',
    skills: ['Git Branching', 'GitHub Repository Governance', 'Terminal CLI', 'VS Code Workflow'],
    category: 'Web',
  },
];
