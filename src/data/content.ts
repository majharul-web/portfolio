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
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "blog", label: "blog" },
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
// Full project archive — shown at /archive as a table. This list is meant
// to grow over time; add entries here as you ship more, newest first.
// Doesn't need to match `projects` above exactly — that's a curated
// homepage highlight reel, this is the complete record.
// ---------------------------------------------------------------------------
export type ArchiveEntry = {
  year: string;
  name: string;
  madeAt: string;
  stack: string[];
  href?: string;
  linkLabel?: string;
};

export const archiveProjects: ArchiveEntry[] = [
  {
    year: "2026",
    name: "Project One",
    madeAt: "Personal",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    href: "#",
    linkLabel: "project-one.dev",
  },
  {
    year: "2025",
    name: "Project Two",
    madeAt: "Personal",
    stack: ["React", "Node.js", "Redis"],
    href: "#",
    linkLabel: "project-two.dev",
  },
  {
    year: "2025",
    name: "Project Three",
    madeAt: "Personal",
    stack: ["Python", "FastAPI"],
    href: "#",
    linkLabel: "github.com",
  },
  {
    year: "2024",
    name: "Project Four",
    madeAt: "Personal",
    stack: ["Next.js", "Tailwind", "Vercel"],
    href: "#",
    linkLabel: "project-four.dev",
  },
];

// ---------------------------------------------------------------------------
// Blog — external posts. Add new entries at the top (newest first).
// ---------------------------------------------------------------------------
export type BlogPost = {
  title: string;
  date: string;
  href: string;
  thumbnailGradient?: [string, string];
};

export const blogPosts: BlogPost[] = [
  {
    title: "Add your first post title here",
    date: "2026",
    href: "#",
    thumbnailGradient: ["#c6ff3d", "#0a0e14"],
  },
  {
    title: "Add your second post title here",
    date: "2026",
    href: "#",
    thumbnailGradient: ["#22d3ee", "#0f172a"],
  },
  {
    title: "Add your third post title here",
    date: "2026",
    href: "#",
    thumbnailGradient: ["#f97316", "#0a0e14"],
  },
];
