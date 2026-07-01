export const skillNavItems = [
  {
    id: "programming_languages",
    name: "Languages",
    icon: "ri-code-s-slash-line",
  },
  {
    id: "frontend_development",
    name: "Frontend",
    icon: "ri-bring-to-front",
  },
  {
    id: "mobile_development",
    name: "Mobile",
    icon: "ri-smartphone-fill",
  },
  {
    id: "databases",
    name: "Database",
    icon: "ri-database-2-line",
  },
  {
    id: "tools_technologies",
    name: "Tools",
    icon: "ri-tools-line",
  },
  {
    id: "software_architecture_design",
    name: "Architecture",
    icon: "ri-ancient-pavilion-line",
  },
  {
    id: "core_concepts",
    name: "Concepts",
    icon: "ri-cpu-line",
  },
];

export const skillsData = {
  programming_languages: {
    theme: {
      button: "bg-cyan-500/10 border-cyan-500 text-cyan-400",
      circle: "bg-cyan-500/10 text-cyan-400 border-cyan-500/40",
      cardBorder: "hover:border-cyan-500/60",
      cardShadow: "hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)]",
    },

    skills: [
      { short: "DT", name: "Dart" },
      { short: "JS", name: "JavaScript" },
      { short: "JV", name: "Java" },
      { short: "KT", name: "Kotlin" },
      { short: "PY", name: "Python" },
      { short: "C", name: "C#" },
      { short: "S", name: "SQL" },
    ],
  },

  mobile_development: {
    theme: {
      button: "bg-green-500/10 border-green-500 text-green-400",
      circle: "bg-green-500/10 text-green-400 border-green-500/40",
      cardBorder: "hover:border-green-500/60",
      cardShadow: "hover:shadow-[0_10px_30px_rgba(34,197,94,0.15)]",
    },

    skills: [
      { short: "FL", name: "Flutter" },
      { short: "AD", name: "Android Development" },
      { short: "FA", name: "Firebase Authentication" },
      { short: "FF", name: "Firebase Firestore" },
      { short: "RA", name: "REST API Integration" },
      { short: "SM", name: "State Management" },
      { short: "XU", name: "XML UI Design" }
    ],
  },

  frontend_development: {
    theme: {
      button: "bg-amber-500/10 border-amber-500 text-amber-400",
      circle: "bg-amber-500/10 text-amber-400 border-amber-500/40",
      cardBorder: "hover:border-amber-500/60",
      cardShadow: "hover:shadow-[0_10px_30px_rgba(245,158,11,0.15)]",
    },

    skills: [
      { short: "RJ", name: "React.js" },
      { short: "TC", name: "Tailwind CSS" },
      { short: "HM", name: "HTML5" },
      { short: "CS", name: "CSS3" },
      { short: "RD", name: "Responsive Web Design" },
    ],
  },

  databases: {
    theme: {
      button: "bg-violet-500/10 border-violet-500 text-violet-400",
      circle: "bg-violet-500/10 text-violet-400 border-violet-500/40",
      cardBorder: "hover:border-violet-500/60",
      cardShadow: "hover:shadow-[0_10px_30px_rgba(139,92,246,0.15)]",
    },

    skills: [
      { short: "MS", name: "MS SQL" },
      { short: "PS", name: "PostgreSQL" },
      { short: "OD", name: "Oracle Database" },
      { short: "FF", name: "Firebase Firestore" },
      { short: "SB", name: "Supabase" },
      { short: "FB", name: "Firebase" },
    ],
  },

  tools_technologies: {
    theme: {
      button: "bg-pink-500/10 border-pink-500 text-pink-400",
      circle: "bg-pink-500/10 text-pink-400 border-pink-500/40",
      cardBorder: "hover:border-pink-500/60",
      cardShadow: "hover:shadow-[0_10px_30px_rgba(236,72,153,0.15)]",
    },

    skills: [
      { short: "GH", name: "GitHub" },
      { short: "AS", name: "Android Studio" },
      { short: "VC", name: "VS Code" },
      { short: "II", name: "IntelliJ IDEA" },
      { short: "FG", name: "Figma" },
      { short: "NA", name: "N8n automation" },
      { short: "OB", name: "OBDX" }
    ],
  },

software_architecture_design: {
  theme: {
    button: "bg-orange-500/10 border-orange-500 text-orange-400",

    circle: "bg-orange-500/10 text-orange-400 border-orange-500/40",

    cardBorder: "hover:border-orange-500/60",

    cardShadow:
      "hover:shadow-[0_10px_30px_rgba(249,115,22,0.15)]",
  },

  skills: [
    { short: "CA", name: "Component-Based Architecture" },
    { short: "AA", name: "Atomic-Based Architecture" },
    { short: "MA", name: "MVVM Architecture" },
    { short: "MO", name: "Monolithic Architecture" },
    { short: "DS", name: "Distributed Systems" },
    { short: "SA", name: "Scalability" },
  ],
},
core_concepts: {
  theme: {
    button: "bg-rose-500/10 border-rose-500 text-rose-400",

    circle: "bg-rose-500/10 text-rose-400 border-rose-500/40",

    cardBorder: "hover:border-rose-500/60",

    cardShadow:
      "hover:shadow-[0_10px_30px_rgba(244,63,94,0.15)]",
  },

  skills: [
    { short: "OP", name: "OOP" },
    { short: "DS", name: "Basics of DSA" },
    { short: "AI", name: "API Integration" },
    { short: "LS", name: "Local Storage" },
    { short: "AS", name: "Authentication Systems" },
    { short: "JA", name: "JWT Authentication" },
    { short: "DB", name: "Debugging" },
    { short: "VC", name: "Version Control" },
  ],
},
};