export const personal = {
  name: "Pranto Soearno",
  logo: "pranto.",
  title: "Software Engineer",
  subtitle: "Fullstack Developer · AI Integration · System Design",
  tagline: "Helping brands stand out\nthrough great software.",
  bio: "I'm a Software Engineer based in Jakarta with 5+ years of experience building fullstack applications, AI-powered systems, and enterprise integrations. Currently at InMotion Inovasi Teknologi as Frontend Developer.",
  location: "Jakarta, Indonesia",
  email: "suwarnopranto@gmail.com",
  whatsapp: "6282244204696",
  links: {
    github: "https://github.com/Prantoe",
    linkedin: "https://www.linkedin.com/in/pranto-suwarno-59b014165/",
    instagram: "https://www.instagram.com/pranto.soearno/",
    resume: "https://drive.google.com/drive/folders/1jlAXaFEXNAFX9M90eX-bATOrHpCRhZ0r?usp=drive_link",
  },
};

export const education = [
  {
    degree: "Bachelor of Informatics Engineering",
    institution: "Universitas Mercu Buana Yogyakarta",
    year: "2017 – 2022",
    location: "Yogyakarta, Indonesia",
    description: "Focused on software engineering, databases, and full-stack web development.",
  },
];

export const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Delivered", value: "20+" },
  { label: "Companies Worked", value: "3" },
];

export const experience = [
  {
    name: "InMotion Inovasi Teknologi",
    place: "Jakarta, Indonesia",
    date: "Mar 2025 – Present",
    position: "Software Engineer / Frontend Developer",
    description:
      "Developed scalable frontend applications for Generative AI, live chat, and analytics systems. Built reusable enterprise dashboards and integrated APIs, AI services, WhatsApp and live-agent systems.",
    skills: ["React.js", "Nuxt.js", "TypeScript", "Tailwind CSS", "Zustand", "WebSockets", "Generative AI", "RAG"],
  },
  {
    name: "PT. Valutac Inovasi Kreasi",
    place: "Tangerang, Indonesia",
    date: "Jun 2022 – Jan 2025",
    position: "Backend Software Engineer",
    description:
      "Designed backend architecture and built REST APIs using PayloadCMS and Django REST Framework. Implemented Elasticsearch for search optimization and managed Docker deployment.",
    skills: ["Django", "Python", "PayloadCMS", "Node.js", "TypeScript", "Elasticsearch", "Docker", "MongoDB"],
  },
  {
    name: "Sepasar.id",
    place: "Yogyakarta, Indonesia",
    date: "Oct 2020 – Oct 2021",
    position: "Web Developer",
    description:
      "Built web applications and dashboards using Laravel. Managed and optimized MySQL databases for a marketplace platform supporting traditional market education.",
    skills: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
  },
];

export const techStack = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: "SiReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "Vue.js", icon: "SiVuedotjs" },
      { name: "Nuxt.js", icon: "SiNuxtdotjs" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "Material UI", icon: "SiMui" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Python", icon: "SiPython" },
      { name: "Django", icon: "SiDjango" },
      { name: "Laravel", icon: "SiLaravel" },
      { name: "PayloadCMS", icon: "SiPayloadcms" },
      { name: "PHP", icon: "SiPhp" },
    ],
  },
  {
    category: "Database & DevOps",
    items: [
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "MySQL", icon: "SiMysql" },
      { name: "Supabase", icon: "SiSupabase" },
      { name: "Docker", icon: "SiDocker" },
      { name: "Elasticsearch", icon: "SiElasticsearch" },
    ],
  },
];

export const projects = [
  {
    name: "Workflow Automation",
    client: "Bank Mandiri",
    category: "Internal System",
    year: "2026",
    description:
      "No-code workflow automation platform that simplifies complex technical processes into a drag-and-drop interface, enabling non-technical users to build and manage workflows independently.",
    technologies: ["React.js", "Material UI", "Zustand", "TypeScript"],
    image: "/assets/portfolio/workflow/laptop.png",
    visit: "",
    github: "",
  },
  {
    name: "Generative AI Widget",
    client: "Bank Danamon",
    category: "AI Application",
    year: "2025",
    description:
      "Interactive chat widget integrated with LLM, built with React and Zustand. Features real-time conversation, draggable UI, conversation history, and favorite message storage.",
    technologies: ["TypeScript", "React.js", "Zustand"],
    image: "/assets/portfolio/danamon/laptop.jpeg",
    visit: "",
    github: "",
  },
  {
    name: "Profiling System",
    client: "BPK Penabur",
    category: "Internal System",
    year: "2024",
    description:
      "Psychometric-style profiling system built with TypeScript and PayloadCMS backend, MongoDB database, and Docker deployment. Supports assessment flows and result tracking.",
    technologies: ["TypeScript", "PayloadCMS", "MongoDB", "Docker"],
    image: "/assets/portfolio/profilling/laptop.jpeg",
    visit: "",
    github: "",
  },
  {
    name: "Investment Platform",
    client: "PHB Investment",
    category: "Mobile Application",
    year: "2024",
    description:
      "Digital investment platform for Pelaburan Hartanah Berhad allowing investors to manage and monitor their property investment portfolio online.",
    technologies: ["React Native", "TypeScript"],
    image: "/assets/portfolio/phb/laptop.jpeg",
    visit: "",
    github: "",
  },
  {
    name: "Learning Management System",
    client: "BPK Penabur",
    category: "Education Platform",
    year: "2023",
    description:
      "Designed backend architecture with TypeScript, built RESTful APIs with PayloadCMS, managed MongoDB, optimized search with Elasticsearch, and deployed with Docker.",
    technologies: ["TypeScript", "PayloadCMS", "MongoDB", "Elasticsearch", "Docker"],
    image: "/assets/portfolio/lms/laptop.jpeg",
    visit: "",
    github: "",
  },
  {
    name: "Inventory System",
    client: "BPK Penabur",
    category: "Internal System",
    year: "2023",
    description:
      "Internal inventory system built with Nuxt.js frontend, Supabase and PostgreSQL backend, Tailwind CSS for UI, and Docker for deployment.",
    technologies: ["Nuxt.js", "Supabase", "PostgreSQL", "Tailwind CSS", "Docker"],
    image: "/assets/portfolio/inventori/laptop.jpeg",
    visit: "",
    github: "",
  },
  {
    name: "Healthcare Platform",
    client: "Perawat.id",
    category: "Healthcare App",
    year: "2022",
    description:
      "Backend for Perawat.id using Python Django REST Framework, MongoDB database, and RabbitMQ for efficient message queue between services.",
    technologies: ["Python", "Django REST Framework", "MongoDB", "RabbitMQ"],
    image: "/assets/portfolio/perawat/laptop.jpeg",
    visit: "https://perawat.id/",
    github: "",
  },
  {
    name: "CRM System",
    client: "ASAK St. Monika",
    category: "CRM Application",
    year: "2022",
    description:
      "Constituent Relationship Management system for a Christian foundation managing donations, scholarships, and foster parent programs for orphaned students.",
    technologies: ["Laravel", "MySQL"],
    image: "/assets/portfolio/asak/laptop.jpeg",
    visit: "",
    github: "",
  },
  {
    name: "Home Decor E-Commerce",
    client: "FRL Furniture",
    category: "E-Commerce",
    year: "2022",
    description:
      "E-commerce platform with product catalogue, order management, and optimized MySQL database for a furniture company based in Yogyakarta.",
    technologies: ["Laravel", "Tailwind CSS", "MySQL", "JavaScript"],
    image: "/assets/portfolio/frl/notebook.png",
    visit: "https://frl-furniture.com/",
    github: "",
  },
  {
    name: "Marketplace Platform",
    client: "Sepasar.id",
    category: "Marketplace",
    year: "2021",
    description:
      "Backend for Sepasar.id built with Lumen for API services and Laravel for the web platform. MySQL database optimized for a marketplace supporting traditional market education.",
    technologies: ["Lumen", "Laravel", "MySQL"],
    image: "/assets/portfolio/sepasar/laptop.jpeg",
    visit: "https://sepasar.id/",
    github: "",
  },
];
