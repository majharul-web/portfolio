// ---------------------------------------------------------------------------
// All editable site content lives here. Swap these placeholder values for
// your own — nothing else in the codebase needs to change.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Majharul Islam",
  role: "Software Engineer",
  tagline: "I build fast, accessible web apps with clean, maintainable code.",
  email: "majharul.live@gmail.com",
  phone: "+880 1747-615357",
  location: "Dhaka, Bangladesh",
  resumeHref:
    "https://drive.google.com/file/d/1s-5dAuqEBIiFd99p67RcLK7feC6xyxpN/view",
  avatarSrc: "/images/profile.jpg",
};

export const nav = [
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
  {
    label: "GitHub",
    href: "https://github.com/majharul-web",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/majharul-web/",
    icon: "linkedin",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/majharul-web/",
    icon: "leetcode",
  },
] as const;

export const about = {
  paragraphs: [
    "Results-driven Fullstack (Frontend-focused) Developer with 3.5+ years of experience building scalable, high-performing web applications using **Next.js**, **React**, **TypeScript**, **Redux**, and **Tailwind CSS**. Skilled at transforming complex business needs into clean, intuitive, and responsive interfaces while ensuring maintainability and performance.",
    "Experienced across OTA platforms, e-commerce systems, and enterprise dashboards, improving workflow efficiency and user experience. Over the past year, expanded backend expertise through hands-on work with **Python**, **Django**, **Node.js**, **Express.js**, **SQL**, and **MongoDB**, and contributed to backend API development at Citycom Travel using **Golang**, **Gin**, **GORM**, **MySQL**, **Redis**, and microservice architecture.",
    "Built multiple full-stack projects, strengthened system reliability, and optimized data-processing performance. Passionate about end-to-end development, clean architecture, and delivering solutions that drive meaningful business impact.",
    "Let's connect! I'm always excited to collaborate on impactful web development projects and innovative solutions.",
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
export type SkillCategory = {
  category: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python", "Golang", "C", "C++"],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "RTK Query",
      "React Router",
      "Tailwind CSS",
      "Bootstrap",
      "Formik",
      "Yup",
    ],
  },
  {
    category: "Backend",
    items: ["Golang", "Django", "Node.js", "Express.js", "JWT Auth", "Microservices (Basic)"],
  },
  {
    category: "Database & Tools",
    items: [
      "MySQL",
      "PostgreSQL (Basic)",
      "MongoDB",
      "Firebase",
      "Git",
      "Docker",
      "Linux",
      "Jira",
      "Slack",
      "VS Code",
      "Chrome DevTools",
      "Vercel",
      "Netlify",
    ],
  },
  {
    category: "Soft Skills",
    items: [
      "Leadership",
      "Teamwork",
      "Problem-Solving",
      "Communication",
      "Adaptability",
    ],
  },
];

export type ExperienceEntry = {
  range: string;
  title: string;
  company: string;
  location?: string;
  href?: string;
  bullets: string[];
  stack: string[];
};

export const experience: ExperienceEntry[] = [
  {
    range: "Oct 2025 — Present",
    title: "Full-Stack Developer",
    company: "LeanCore Technologies",
    location: "Dhaka, Bangladesh",
    href: "https://leancore.net/",
    bullets: [
      "Built and optimized Next.js, TypeScript, and Tailwind UI modules, improving workflow efficiency by 25% and reducing development redundancy by 20% through reusable components and advanced filtering.",
      "Integrated REST APIs with RTK Query and Redux Toolkit, enhancing data-fetch reliability and overall platform performance.",
      "Developed core OTA features, including flight booking, PNR management, group ticketing, issuing, voiding, and cancellation workflows.",
      "Contributed to backend development using Golang, Gin, GORM, and MySQL, delivering optimized APIs, secure endpoints, and efficient database queries.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "RTK Query", "Golang"],
  },
  {
    range: "Oct 2023 — Oct 2025",
    title: "Frontend Developer",
    company: "LeanCore Technologies",
    location: "Dhaka, Bangladesh",
    href: "https://leancore.net/",
    bullets: [
      "Built and optimized Next.js, TypeScript, and Tailwind UI modules, improving workflow efficiency by 25% and reducing development redundancy by 20% through reusable components and advanced filtering.",
      "Integrated REST APIs with RTK Query and Redux Toolkit, enhancing data-fetch reliability and overall platform performance.",
      "Developed core OTA features, including flight booking, PNR management, group ticketing, issuing, voiding, and cancellation workflows.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "RTK Query"],
  },
  {
    range: "Sep 2022 — Jul 2023",
    title: "Frontend Developer (Remote)",
    company: "LSKIT",
    location: "Khulna, Bangladesh",
    href: "https://lskit.com/",
    bullets: [
      "Enhanced UI and optimized performance for the Aliba Int e-commerce platform using React + Redux, boosting user engagement by 20%.",
      "Developed shopping cart, checkout flow, and bKash payment integration, increasing order success rate.",
      "Implemented responsive layouts and customer chat features. Streamlined authentication and API workflows using Redux-Thunk and REST APIs.",
    ],
    stack: ["React", "Redux", "Redux-Thunk"],
  },
  {
    range: "Jan 2022 — Aug 2022",
    title: "Junior Software Engineer",
    company: "Xtreme Solution",
    location: "Chattogram, Bangladesh",
    href: "https://xtremesolution.com.bd/",
    bullets: [
      "Contributed to CloudOne, a React Native app listed on the Play Store.",
      "Supported ISP CRM development using raw PHP & SQL; helped deploy new CRM enhancements.",
      "Developed features in Automart (Laravel + React), including shopping cart logic with Context API and automated email notifications.",
    ],
    stack: ["React Native", "PHP", "Laravel", "React"],
  },
];

export type ProjectEntry = {
  slug: string;
  name: string;
  projectType: string;
  href: string;
  description: string;
  stack: string[];
  thumbnail?: string;
  thumbnailGradient?: [string, string];
  stat?: {
    icon: "star" | "download";
    value: string;
  };
  // Fields used on the standalone project details page.
  overview: string;
  features: string[];
  outcome: string;
  challenges: string;
  clientCode?: string;
  serverCode?: string;
};

export const allProjects: ProjectEntry[] = [
  {
    slug: "shohorbari",
    name: "Shohorbari",
    projectType: "Rental Management Platform",
    href: "https://shohorbari.vercel.app",
    description:
      "A full-stack rental marketplace for listing, browsing, and managing rental properties, with request handling for customers and admins.",
    stack: ["React.js", "Tailwind CSS", "Django REST Framework", "PostgreSQL"],
    thumbnail: "https://i.ibb.co.com/9mW2RJXd/image.png",
    overview:
      "Shohorbari is a full-stack rental management platform that allows users to list, browse, and manage rental properties. It streamlines rental advertisement management and request handling for both customers and administrators.",
    features: [
      "Developed a full-stack rental marketplace featuring user authentication, rental advertisement CRUD operations, and request management workflows.",
      "Implemented advanced search, pagination, and a structured admin interface for managing ads and rental requests, enhancing usability and admin efficiency.",
      "Integrated backend rental request operations using Django REST Framework and PostgreSQL, improving data reliability and reducing manual review efforts.",
      "Added SSLCommerz payment integration (sandbox) to simulate secure payment flows and support end-to-end rental transactions.",
    ],
    outcome:
      "Delivered a secure, user-friendly rental management platform that improved rental request handling, reduced manual processing, and enabled smooth online payment simulations.",
    challenges:
      "One challenge was ensuring secure and seamless payment integration while maintaining data consistency across listings and rental requests. Solved by careful API design and backend validation using Django REST Framework.",
    clientCode: "https://github.com/majharul-web/shohorbari_front",
    serverCode: "https://github.com/majharul-web/shohorbari_drf",
  },
  {
    slug: "travelkeep",
    name: "Travelkeep",
    projectType: "Travel Management SaaS Platform",
    href: "https://travelkeep.app/",
    description:
      "A Travel Management SaaS product that streamlines agency workflows — bookings, cancellations, and customer data — for travel agents.",
    stack: ["Golang", "Next.js", "TypeScript", "Redux", "RTK Query", "Tailwind CSS"],
    thumbnail: "https://i.ibb.co.com/xtzjJV81/image.png",
    overview:
      "Travelkeep is a Travel Management SaaS product designed to streamline agency workflows and optimize travel booking management. It provides agents with a centralized platform to manage bookings, cancellations, and customer data efficiently.",
    features: [
      "Engineered responsive interfaces for agent onboarding, ticket issuing, voiding, and cancellations, improving agent workflow efficiency.",
      "Integrated airline and travel data with advanced filtering, infinite scrolling, and optimized API queries to enhance user experience and speed up data access.",
      "Implemented robust form validations using Formik and Yup, reducing errors by 35% and ensuring consistent UI across the platform using Tailwind CSS.",
      "Developed backend APIs in Golang (Gin + GORM) for agent and vendor modules, including accounting ledger, lead management, and transactional operations.",
      "Built secure endpoints for bulk account creation (up to 5,000 agents/vendors) using Excel import with optimized batch processing.",
      "Enhanced data integrity and performance by implementing efficient query handling, validation middleware, and optimized API endpoints.",
    ],
    outcome:
      "Delivered a scalable, high-quality SaaS platform that is used daily by 100+ travel agencies, improving booking workflow efficiency and reducing agent errors.",
    challenges:
      "Integrating travel and airline data with advanced filtering and infinite scrolling posed performance challenges. These were overcome using lazy loading and optimized API queries to ensure smooth and responsive data access.",
  },
  {
    slug: "automart",
    name: "Automart",
    projectType: "E-commerce Platform",
    href: "https://automart.com.bd/",
    description:
      "A fully featured e-commerce platform with intuitive cart management and a quick, conversion-friendly checkout flow.",
    stack: ["React", "PHP (Laravel)", "MySQL", "Bootstrap"],
    thumbnail: "https://i.ibb.co.com/LD5JnVnN/image.png",
    overview:
      "Automart is a fully featured e-commerce platform providing an engaging and smooth shopping experience for customers, with an emphasis on intuitive cart management and quick checkout.",
    features: [
      "Designed the product catalog with increment/decrement options for managing shopping cart items, ensuring ease of use during the shopping experience.",
      "Implemented a custom order confirmation modal and checkout functionality, reducing cart abandonment and improving conversion rates.",
      "Leveraged Laravel and MySQL for backend order management and data storage, while using jQuery for additional frontend interactivity, enhancing overall user experience.",
    ],
    outcome:
      "Built a responsive and engaging e-commerce platform that saw increase in checkout completion rates and improved user satisfaction through intuitive navigation.",
    challenges:
      "Integrating secure payment gateways like bKash and Nagad with the system involved overcoming backend issues related to API compatibility, which was resolved by thorough testing and debugging.",
  },
  {
    slug: "photo-book",
    name: "Photo Book",
    projectType: "Photo Gallery Application",
    href: "https://photo-book-mi.netlify.app/",
    description:
      "An interactive photo-sharing platform where users browse, like, and comment on user-uploaded images.",
    stack: ["React", "Redux", "Tailwind CSS", "Firebase", "Express.js", "MongoDB"],
    thumbnail: "https://i.ibb.co.com/qgyxZN6/Photo-book-12-31-2024-11-23-PM.png",
    overview:
      "Photo Book is a personal project offering an interactive platform for users to share and engage with photos. It enables browsing, liking, and commenting on user-uploaded images.",
    features: [
      "Created a photo gallery interface where users can browse, like, and comment on photos, enhancing user interaction and engagement.",
      "Integrated secure Google and email-based login via Firebase for user authentication, ensuring a safe user environment.",
      "Built responsive layouts with Daisy UI and Tailwind CSS, providing a visually appealing and responsive experience across devices.",
      "Developed a backend with Express.js and MongoDB to manage user data, posts, likes, and comments efficiently.",
    ],
    outcome:
      "Delivered an interactive photo-sharing platform that fosters social engagement.",
    challenges:
      "One challenge was optimizing the backend to handle traffic, which was mitigated by implementing data pagination and optimizing database queries.",
    clientCode: "https://github.com/majharul-web/photo-book-client",
    serverCode: "https://github.com/majharul-web/photo-book-server",
  },
  {
    slug: "cloudone",
    name: "Cloudone",
    projectType: "Company Branding Website",
    href: "https://www.cloudone.com.bd/",
    description:
      "A company branding website showcasing corporate identity and services, built mobile-first for engagement across devices.",
    stack: ["PHP (Laravel)", "MySQL", "Bootstrap", "jQuery"],
    thumbnail: "https://i.ibb.co.com/tY15V5H/Cloudone.png",
    overview:
      "Cloudone is a company branding website designed to showcase corporate identity and services with a focus on user engagement and brand presence.",
    features: [
      "Implemented features like 'Refer A Friend' with Ajax for dynamic user engagement, pre-registration, and app QR code scanning for easy access to services.",
      "Created a responsive, mobile-first interface, ensuring the site was user-friendly across all devices, leading to better user interaction.",
    ],
    outcome:
      "The website successfully improved brand visibility and engagement, leading to increase in new user sign-ups.",
    challenges:
      "The major challenge was ensuring the website's responsiveness across all devices, which was resolved by using a mobile-first design approach and thorough testing.",
  },
];

// Curated highlight reel shown on the homepage — pick your strongest few.
// The full set above (`allProjects`) is what /archive and the project
// details pages draw from.
export const projects: ProjectEntry[] = allProjects.filter((project) =>
  ["shohorbari", "travelkeep", "photo-book"].includes(project.slug)
);

export const projectsArchiveHref = "/archive";

// ---------------------------------------------------------------------------
// Full project archive — shown at /archive using the same card-row style
// as the homepage's curated `projects` list above. This one is meant to
// grow over time as you ship more; add entries at the top, newest first.
// ---------------------------------------------------------------------------
export const archiveProjects: ProjectEntry[] = allProjects;

// ---------------------------------------------------------------------------
// Blog — external posts. Add new entries at the top (newest first).
// ---------------------------------------------------------------------------
export type BlogPost = {
  title: string;
  date?: string;
  href: string;
  category?: string;
  description?: string;
  thumbnail?: string;
  thumbnailGradient?: [string, string];
};

export const blogPosts: BlogPost[] = [
  {
    title: "🚀 Mastering Communication: Connecting with New Clients",
    href: "https://www.linkedin.com/posts/md-majharul-islam-a42b63200_mastering-the-art-of-communication-a-guide-activity-7099022060454125568-oWiV?utm_source=social_share_sheet&utm_medium=member_desktop_web",
    category: "LinkedIn",
    description:
      "In the fast-paced business world, effective communication is the cornerstone of success. A look at how to connect with new clients on LinkedIn — initiating conversations, crafting compelling messages, and mastering the follow-up.",
    // LinkedIn's CDN signs these URLs with an expiry (the `e=` query
    // param) — they will eventually stop loading. thumbnailGradient
    // below is the fallback BlogThumbnail switches to on error.
    thumbnail:
      "https://media.licdn.com/dms/image/v2/D5622AQHoSHNuOWI7mg/feedshare-shrink_800/feedshare-shrink_800/0/1692538751566?e=1766016000&v=beta&t=UduAIo2RtVUHTQhYQc7pVDXlXQ19aldfmYAFGxtMUAA",
    thumbnailGradient: ["#0a66c2", "#0a0e14"],
  },
  {
    title: "Binary Search: The Key to Fast and Efficient Searching",
    href: "https://www.linkedin.com/pulse/binary-search-ultimate-guide-efficient-searching-md-majharul-islam-ajhec/",
    category: "LinkedIn",
    description:
      "Binary Search is a powerful algorithm used to quickly find the position of a target element in a sorted array — dividing the search space in half with each step instead of checking every element.",
    thumbnail:
      "https://media.licdn.com/dms/image/v2/D5612AQFdWUQ98j9Iag/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1736054007408?e=1766016000&v=beta&t=PFxM-R4i4jSx-UMutVK2zM1mQxjWJc08zpF72XuF_qA",
    thumbnailGradient: ["#0a66c2", "#0a0e14"],
  },
  {
    title: "🚀 Mastering Unit Testing with the AAA Pattern",
    href: "https://www.linkedin.com/posts/md-majharul-islam-a42b63200_unittesting-aaa-codequality-activity-7128296902097334272-Lc9t?utm_source=social_share_sheet&utm_medium=member_desktop_web",
    category: "LinkedIn",
    description: "Unit testing made easy! The AAA pattern — Arrange, Act, Assert — is your secret weapon.",
    thumbnail: "https://i.ibb.co.com/tqpJBjD/1699518417356.jpg",
    thumbnailGradient: ["#c6ff3d", "#0a0e14"],
  },
];
