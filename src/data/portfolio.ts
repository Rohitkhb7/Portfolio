export interface ProfileInfo {
  name: string;
  role: string;
  location: string;
  bannerUrl: string;
  avatarUrl: string;
  bioBullets: Array<{ text: string; highlightWords?: string[] }>;
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  category: "Development" | "Frontend" | "UI/UX" | "AI";
  status: string;
  featuredBadge?: string;
  gradient: string;
  previewImage: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  behanceUrl?: string;
}

export interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Design" | "Tools";
  iconName?: string;
  url: string;
}

export interface SocialItem {
  name: string;
  label: string;
  url: string;
  icon: string;
}

export const profileInfo: ProfileInfo = {
  name: "Rohit",
  role: "Design Engineer",
  location: "India",
  bannerUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
  avatarUrl: "/avatar.jpg",
  bioBullets: [
    {
      text: "I'm a Design Engineer passionate about crafting digital products where thoughtful design meets clean, scalable code.",
    },
    {
      text: "I design and develop modern interfaces with React, Tailwind, and Framer Motion focusing on usability, performance, and delightful interactions.",
    },
    {
      text: "Currently building high-performance web products, exploring new technologies, and refining intuitive user experiences.",
    },
  ],
};

export const socialGrid: SocialItem[] = [
  {
    name: "GitHub",
    label: "GitHub",
    url: "https://github.com/Rohitkhb7",
    icon: "github",
  },
  {
    name: "LinkedIn",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/rohitkhb7/",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    label: "Twitter",
    url: "https://x.com/Rohitkhb7",
    icon: "twitter",
  },
  {
    name: "Mail",
    label: "Mail",
    url: "mailto:rohitkhb7@gmail.com",
    icon: "mail",
  },
  {
    name: "Resume",
    label: "Resume",
    url: "https://drive.google.com/file/d/1JfmppwzYOa5vCN2NDizOxJGApbFgN4E8/view",
    icon: "paperclip",
  },
];

export const projectsList: ProjectItem[] = [
  {
    id: "handloom-hub",
    title: "Handloom Hub Landing Page",
    shortDesc: "Artisanal Indian fabric & e-commerce landing page UI/UX.",
    longDesc: "Discover exquisite fabrics crafted by artisans across India, from Banarasi silks to Pashmina wool, with fair-trade ethical fashion UI.",
    category: "UI/UX",
    status: "Live",
    featuredBadge: "Handloom Hub",
    gradient: "from-emerald-950 via-green-800 to-[#0F0E0E]",
    previewImage: "/behance/handloom_hub.png",
    techStack: ["Figma", "Landing Page UI", "E-Commerce"],
    behanceUrl: "https://www.behance.net/gallery/222820527/Handloom-Hub-Landing-Page",
  },
  {
    id: "physio-care",
    title: "PhysioCare Clinic",
    shortDesc: "Expert Physiotherapy & Rehabilitation Web App.",
    longDesc: "A modern, responsive healthcare application for PhysioCare Clinic featuring online appointment booking, treatment plans, patient reviews, and specialist doctor profiles.",
    category: "Frontend",
    status: "Live",
    featuredBadge: "Physiotherapy",
    gradient: "from-blue-950 via-teal-900 to-[#0F0E0E]",
    previewImage: "/projects/physio_care.png",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://physiotherapy-hazel.vercel.app/",
  },
  {
    id: "smart-banking",
    title: "Smart Banking for Freelancers",
    shortDesc: "Fintech mobile & web banking app UI/UX.",
    longDesc: "A revolutionary banking app built to help freelancers manage business money, credit card stacks, instant transfers, and cashflow overview.",
    category: "UI/UX",
    status: "Live",
    featuredBadge: "Fintech UX",
    gradient: "from-purple-950 via-pink-900 to-[#0F0E0E]",
    previewImage: "/behance/smart_banking.png",
    techStack: ["Figma", "Fintech UX", "Design System"],
    behanceUrl: "https://www.behance.net/gallery/169406963/Banking-Landing-Page",
  },
  {
    id: "stepup-clinic",
    title: "StepUp Rehabilitation Center",
    shortDesc: "Clinical Psychology & Mental Wellness Portal.",
    longDesc: "A full-stack mental health portal for StepUp Rehabilitation featuring online & offline session booking, service guides, diagnostic testing details, and client reviews.",
    category: "Frontend",
    status: "Live",
    featuredBadge: "Mental Health",
    gradient: "from-emerald-950 via-stone-800 to-[#0F0E0E]",
    previewImage: "/projects/stepup_clinic.png",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://stepupclinic.vercel.app/",
  },
  {
    id: "nike-website",
    title: "Nike Website Redesign",
    shortDesc: "High-performance sportswear e-commerce UI/UX landing page.",
    longDesc: "Modern e-commerce landing page redesign for Nike, featuring dynamic footwear showcase cards, fluid category navigation, and bold athletic typography.",
    category: "UI/UX",
    status: "Live",
    featuredBadge: "Nike Redesign",
    gradient: "from-red-950 via-zinc-800 to-[#0F0E0E]",
    previewImage: "/behance/nike_website.png",
    techStack: ["Figma", "E-Commerce UI", "Brand Redesign"],
    behanceUrl: "https://www.behance.net/gallery/162255487/Nike-Website",
  },
  {
    id: "luxe-restaurant",
    title: "L’Étoile Haute Cuisine",
    shortDesc: "Contemporary Fine Dining & Luxury Platform.",
    longDesc: "An immersive dark-mode luxury culinary web platform for L'Étoile featuring seasonal tasting menus, chef specials spotlight, reservation booking, and gallery.",
    category: "Frontend",
    status: "Live",
    featuredBadge: "Haute Cuisine",
    gradient: "from-amber-950 via-neutral-900 to-[#0F0E0E]",
    previewImage: "/projects/luxe_restaurant.png",
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://luxe-restaurant-fawn.vercel.app/",
  },
  {
    id: "delicious-eats",
    title: "Delicious Eats: Visual Feast",
    shortDesc: "Culinary recipe discovery mobile app UI/UX.",
    longDesc: "A visual feast of culinary creations featuring dark mode recipe cards, popular food filters, step-by-step guides, and video tutorials.",
    category: "UI/UX",
    status: "Live",
    featuredBadge: "Mobile App UI",
    gradient: "from-amber-950 via-orange-900 to-[#0F0E0E]",
    previewImage: "/behance/delicious_eats.png",
    techStack: ["Figma", "iOS / Mobile UI", "Dark Theme"],
    behanceUrl: "https://www.behance.net/gallery/171068701/Delicious-Eats-A-Visual-Feast-of-Culinary-Creations",
  },
  {
    id: "kamra-dental",
    title: "Kamra Dental Care",
    shortDesc: "Advanced Root Canal & Implant Centre Web App.",
    longDesc: "A modern dental clinic platform for Kamra Dental Care featuring treatment catalog, appointment scheduling, patient testimonials, and emergency dental care guides.",
    category: "Frontend",
    status: "Live",
    featuredBadge: "Dental Care",
    gradient: "from-teal-950 via-cyan-900 to-[#0F0E0E]",
    previewImage: "/projects/kamra_dental.png",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    liveUrl: "https://kamradentalcare.netlify.app/",
  },
  {
    id: "community-cleanup",
    title: "Community Clean-Up Drive",
    shortDesc: "Volunteer registration form & event portal UI/UX.",
    longDesc: "Interactive community drive portal with customized registration forms, volunteer time selection, and environmental event tracking.",
    category: "UI/UX",
    status: "Live",
    featuredBadge: "Volunteer Portal",
    gradient: "from-sky-950 via-blue-800 to-[#0F0E0E]",
    previewImage: "/behance/community_cleanup.png",
    techStack: ["Figma", "Form UX", "User Centered Design"],
    behanceUrl: "https://www.behance.net/gallery/204358863/Community-Clean-Up-Drive-Sign-Up-Page-Design",
  },
  {
    id: "gym-town",
    title: "Gym Town Fitness",
    shortDesc: "High-intensity fitness center & workout portal.",
    longDesc: "A dynamic website for Gym Town featuring training programs (Powerlifting, Strongman, General Fitness), trainer profiles, and membership booking.",
    category: "Frontend",
    status: "Live",
    featuredBadge: "Fitness Center",
    gradient: "from-red-950 via-zinc-900 to-[#0F0E0E]",
    previewImage: "/projects/gym_town.png",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    liveUrl: "https://gymtownn.netlify.app/",
  },
  {
    id: "exam-gaze",
    title: "ExamGaze",
    shortDesc: "Online Examination & Proctoring Platform.",
    longDesc: "A full-stack web application for conducting secure online exams, student performance analytics, real-time assessment tracking, and automated grading.",
    category: "Frontend",
    status: "Live",
    featuredBadge: "Exam Platform",
    gradient: "from-indigo-950 via-slate-900 to-[#0F0E0E]",
    previewImage: "/projects/exam_gaze.png",
    techStack: ["React", "Node.js", "Express", "Tailwind CSS"],
    liveUrl: "https://examgaze.onrender.com/",
  },
];

export const techStackData: TechItem[] = [
  // Frontend
  { name: "React", category: "Frontend", url: "https://react.dev" },
  { name: "Next.js", category: "Frontend", url: "https://nextjs.org" },
  { name: "TypeScript", category: "Frontend", url: "https://www.typescriptlang.org" },
  { name: "Tailwind CSS", category: "Frontend", url: "https://tailwindcss.com" },
  { name: "Framer Motion", category: "Frontend", url: "https://motion.dev" },
  { name: "JavaScript", category: "Frontend", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  
  // Backend
  { name: "Node.js", category: "Backend", url: "https://nodejs.org" },
  { name: "GraphQL", category: "Backend", url: "https://graphql.org" },
  { name: "PostgreSQL", category: "Backend", url: "https://www.postgresql.org" },
  { name: "Redis", category: "Backend", url: "https://redis.io" },
  
  // Design
  { name: "Figma", category: "Design", url: "https://www.figma.com" },
  { name: "UI/UX Systems", category: "Design", url: "https://material.io" },
  { name: "Design Tokens", category: "Design", url: "https://w3c.github.io/design-tokens" },
  
  // Tools
  { name: "Git", category: "Tools", url: "https://git-scm.com" },
  { name: "Vite", category: "Tools", url: "https://vitejs.dev" },
  { name: "Vercel", category: "Tools", url: "https://vercel.com" },
  { name: "Docker", category: "Tools", url: "https://www.docker.com" },
];
