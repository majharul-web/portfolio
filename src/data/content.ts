// ---------------------------------------------------------------------------
// All editable site content lives here. Swap these placeholder values for
// your own — nothing else in the codebase needs to change.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Majharul Islam",
  role: "Software Engineer",
  tagline: "I build fast, accessible web apps with clean, maintainable code.",
  email: "hello@example.com",
  location: "Dhaka, Bangladesh",
  resumeHref: "/resume.pdf",
  avatarSrc: "/images/profile.jpg",
};

export const nav = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "blog", label: "blog" },
] as const;

// Cross-page navigation shown in the dock. Unlike `nav` above (in-page
// anchors used only on the homepage), these are real routes.
export const dockNav = [
  { id: "home", label: "home", href: "/" },
  { id: "about", label: "about", href: "/about" },
  { id: "archive", label: "archive", href: "/archive" },
  { id: "blog", label: "blog", href: "/blog" },
] as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/your-handle", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-handle",
    icon: "linkedin",
  },
  { label: "Twitter", href: "https://twitter.com/your-handle", icon: "x" },
  { label: "Email", href: "mailto:hello@example.com", icon: "mail" },
] as const;

export const about = {
  paragraphs: [
    "I'm a software engineer who enjoys turning complex problems into simple, elegant interfaces. I care about the details that most people never notice — load times, focus states, the way a transition feels just slightly too slow.",
    "Currently I'm focused on full-stack web development, working primarily with **TypeScript**, **React**, and **Next.js**, while keeping an eye on accessibility and performance in everything I ship.",
    "Previously, I've worked on projects ranging from internal tooling to public-facing products, picking up a habit of writing code that's easy for the next person (often future me) to read and extend.",
    "Outside of work, I'm usually exploring new frameworks, contributing to small open-source tools, or rebuilding something I already finished — just to do it cleaner the second time.",
  ],
};

// ---------------------------------------------------------------------------
// "What I Do" — icon-card grid shown on the /about page. `icon` keys map
// to components in icons.tsx via the iconMap in WhatIDo.tsx.
// ---------------------------------------------------------------------------
export type WhatIDoEntry = {
  icon: "layout" | "server" | "database" | "puzzle";
  title: string;
  description: string;
};

export const whatIDo: WhatIDoEntry[] = [
  {
    icon: "layout",
    title: "Frontend Development",
    description:
      "Building responsive, accessible interfaces with React, Next.js, and TypeScript — from component libraries to full admin dashboards.",
  },
  {
    icon: "server",
    title: "Full-Stack Apps",
    description:
      "Connecting frontends to real backends — REST APIs, auth flows, and data-heavy features built end to end.",
  },
  {
    icon: "database",
    title: "Data-Heavy UI",
    description:
      "Tables, filters, dashboards, and forms that stay fast and clear even when the underlying data gets complicated.",
  },
  {
    icon: "puzzle",
    title: "Developer Experience",
    description:
      "Reusable components, clean typing, and project structure that makes a codebase easier to extend than it was to write.",
  },
];

// ---------------------------------------------------------------------------
// Skills — shown as a badge grid on the homepage. `icon` is any simple
// label; swap in real tech logos later if you want (see Skills.tsx).
// ---------------------------------------------------------------------------
export type SkillEntry = {
  name: string;
};

export const skills: SkillEntry[] = [
  { name: "React" },
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "Tailwind CSS" },
  { name: "PostgreSQL" },
  { name: "Redux Toolkit" },
  { name: "Django REST" },
  { name: "Docker" },
  { name: "Git" },
];

export type ExperienceEntry = {
  range: string;
  title: string;
  company: string;
  href?: string;
  description: string;
  stack: string[];
};

export const experience: ExperienceEntry[] = [
  {
    range: "2024 — Present",
    title: "Software Engineer",
    company: "Company Name",
    href: "#",
    description:
      "Build and maintain features across the core product, partnering with design and product to ship accessible, well-tested UI at speed.",
    stack: ["TypeScript", "React", "Next.js", "Tailwind"],
  },
  {
    range: "2023 — 2024",
    title: "Frontend Developer",
    company: "Previous Company",
    href: "#",
    description:
      "Rebuilt the marketing site and component library, improving Lighthouse performance scores and reducing bundle size significantly.",
    stack: ["JavaScript", "React", "Sass"],
  },
  {
    range: "2022 — 2023",
    title: "Junior Developer",
    company: "First Company",
    href: "#",
    description:
      "Worked across the stack on internal dashboards, fixing bugs, writing tests, and learning how production software actually gets shipped.",
    stack: ["Node.js", "Express", "PostgreSQL"],
  },
];

export type ProjectEntry = {
  name: string;
  href: string;
  description: string;
  stack: string[];
  thumbnail?: string;
  thumbnailGradient?: [string, string];
  stat?: {
    icon: "star" | "download";
    value: string;
  };
};

export const projects: ProjectEntry[] = [
  {
    name: "Project One",
    href: "#",
    description:
      "A short description of what this project does and the problem it solves for its users.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    thumbnailGradient: ["#7c3aed", "#22d3ee"],
    stat: { icon: "star", value: "120" },
  },
  {
    name: "Project Two",
    href: "#",
    description:
      "Another project worth highlighting — what makes it interesting, technically or otherwise.",
    stack: ["React", "Node.js", "Redis"],
    thumbnailGradient: ["#0f172a", "#1e293b"],
    stat: { icon: "star", value: "48" },
  },
  {
    name: "Project Three",
    href: "#",
    description:
      "A side project or open-source contribution that shows range beyond day-to-day work.",
    stack: ["Python", "FastAPI"],
    thumbnailGradient: ["#0a0e14", "#1c2430"],
    stat: { icon: "download", value: "2.1k" },
  },
  {
    name: "Project Four",
    href: "#",
    description:
      "One more project slot — swap, add, or remove entries freely in the data file.",
    stack: ["Next.js", "Tailwind", "Vercel"],
    thumbnailGradient: ["#c6ff3d", "#0a0e14"],
    stat: { icon: "star", value: "8.2k" },
  },
];

export const projectsArchiveHref = "/archive";

// ---------------------------------------------------------------------------
// Full project archive — shown at /archive using the same card-row style
// as the homepage's curated `projects` list above. This one is meant to
// grow over time as you ship more; add entries at the top, newest first.
// Doesn't need to match `projects` exactly — that's a highlight reel,
// this is the complete record.
// ---------------------------------------------------------------------------
export const archiveProjects: ProjectEntry[] = [
  {
    name: "Project One",
    href: "#",
    description:
      "A short description of what this project does and the problem it solves for its users.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    thumbnailGradient: ["#7c3aed", "#22d3ee"],
    stat: { icon: "star", value: "120" },
  },
  {
    name: "Project Two",
    href: "#",
    description:
      "Another project worth highlighting — what makes it interesting, technically or otherwise.",
    stack: ["React", "Node.js", "Redis"],
    thumbnailGradient: ["#0f172a", "#1e293b"],
    stat: { icon: "star", value: "48" },
  },
  {
    name: "Project Three",
    href: "#",
    description:
      "A side project or open-source contribution that shows range beyond day-to-day work.",
    stack: ["Python", "FastAPI"],
    thumbnailGradient: ["#0a0e14", "#1c2430"],
    stat: { icon: "download", value: "2.1k" },
  },
  {
    name: "Project Four",
    href: "#",
    description:
      "One more project slot — swap, add, or remove entries freely in the data file.",
    stack: ["Next.js", "Tailwind", "Vercel"],
    thumbnailGradient: ["#c6ff3d", "#0a0e14"],
    stat: { icon: "star", value: "8.2k" },
  },
];

// ---------------------------------------------------------------------------
// Blog — external posts. Add new entries at the top (newest first).
// ---------------------------------------------------------------------------
export type BlogPost = {
  title: string;
  date: string;
  href: string;
  category?: string;
  description?: string;
  thumbnailGradient?: [string, string];
};

export const blogPosts: BlogPost[] = [
  {
    title: "Add your first post title here",
    date: "2026",
    href: "#",
    category: "Blog",
    description:
      "A short summary of what this post covers — swap this for your real excerpt.",
    thumbnailGradient: ["#c6ff3d", "#0a0e14"],
  },
  {
    title: "Add your second post title here",
    date: "2026",
    href: "#",
    category: "Blog",
    description:
      "A short summary of what this post covers — swap this for your real excerpt.",
    thumbnailGradient: ["#22d3ee", "#0f172a"],
  },
  {
    title: "Add your third post title here",
    date: "2026",
    href: "#",
    category: "Blog",
    description:
      "A short summary of what this post covers — swap this for your real excerpt.",
    thumbnailGradient: ["#f97316", "#0a0e14"],
  },
];
