interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "Falarohy",
    description: "Une plateforme e-learning accessible sur le web, mobile (Android) et desktop, visant à répondre aux besoins actuels de l’éducation numérique.",
    technologies: ["Next.js", "Tailwind", "Node.js" , "Prisma", "Mistral IA","GitHub", "PostgreSQL", "TypeScript", "Ui.shadcn", "Recharts", "React Native" , "Electron JS"],
    github: "https://github.com/Rakotomalalacode/fahalalana-plus",
    demo: "falarohy.vercel.app",
    image: "/images/falarohy.png",
    category: "web",
  },
  {
    title: "Traductor App",
    description: "Plateforme de reformulation de phrase en Anglais ou Français",
    technologies: ["Next.js", "Node.js", "GitHub", "Tailwind", "Ui.shadcn", "TypeScript", "HuggingFace", "Helsinki-NLP"],
    github: "https://github.com/Rakotomalalacode/traductions",
    demo: "traductions.vercel.app",
    image: "/images/traductor.png",
    category: "web",
  },
];

export default projects