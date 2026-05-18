export interface ProjectOverviewBlock {
  eyebrow: string;
  heading: string;
  body: string;
}

export interface ProjectFeature {
  icon: string;
  title: string;
  text: string;
}

export interface ProjectGalleryImage {
  alt: string;
  src: string;
}

export interface ProjectHero {
  prefix: string;
  highlight: string;
  subtitle: string;
  image: string;
  caseStudyNumber?: string;
}

export interface Project {
  id: string;
  title: string;
  client?: string;
  tags: string[];
  image: string;
  description: string;
  longDescription: string;
  featured?: boolean;
  hero?: ProjectHero;
  challenge?: ProjectOverviewBlock;
  solution?: ProjectOverviewBlock;
  techStack?: string[];
  gallery?: ProjectGalleryImage[];
  features?: ProjectFeature[];
  featuresHeading?: string;
  featuresBlurb?: string;
}

export const projects: Project[] = [
  {
    id: "nebula-dashboard",
    title: "Nebula Dashboard",
    client: "DeFi Protocol",
    tags: ["Next.js 14", "Prisma"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAHAVgUc2y0MT-l7r53WmMhlDiIvVY8QXa6MZZndSacbSaGoO8FChjqVEPQGS7SB6U-ppJT86sK2ifQpLLdgcuHiBX7eTlhtIZ1yyDUtASNa9BI4VS59Or75FwMkxWHqJZBT-MKAbUik6PHa3Vqv4OCj36k-4ybdMuk3jt8lavGlpSNVj_mV1Q5MGlqHHCPUrs_JN52OwJ4-0pdB4qsK2lGp5efF_Q5MfKkH4nHSzAfdiQ8Wc1thXMJs57NEiMR33HMyrX8B6IOX2E",
    description:
      "A real-time analytics engine for decentralized finance protocols with sub-second latency updates.",
    longDescription:
      "A real-time enterprise analytics engine for DeFi protocols, architected for sub-second latency and high-volume data ingestion.",
    featured: true,
    hero: {
      prefix: "Nebula",
      highlight: "Dashboard",
      subtitle:
        "A high-performance real-time analytics engine designed for massive scale and millisecond precision.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD3bOLii7ne2Ozv1ebUN2E6XFy95rdYjW22Qn8BzZckUhx5qL7hPvKtaCMDmWVoFWikHCCMO75g_EUT8eKXCed5C9te1KtVhV0J8NQu2gVMIsgVMZIf4KF5szsWPo3mRpMXo6c_sRJtAUIPiUxM3aodDPh8kgXOOO9frXxTjxSDaK6Gruta2rjdAl4r8HHQkxAAyaTb0DWq8sjyt9WCet9tYfnYN8t2nM1l63IrsRx_6R_SzP1ZQdYwD36DsDOKxMGZnPOHv1lXBPw",
      caseStudyNumber: "Case Study 01",
    },
    challenge: {
      eyebrow: "The Challenge",
      heading: "Building for Real-Time Scale",
      body: "The primary hurdle was architecting a system capable of processing and visualizing over 10,000 data points per second without UI lag. Existing solutions struggled with garbage collection and DOM reconciliation when dealing with high-frequency WebSocket streams.",
    },
    solution: {
      eyebrow: "The Solution",
      heading: "Reactive Data Pipelines",
      body: "By implementing a custom virtualization layer and offloading data processing to Web Workers, we ensured the main thread remained responsive. Leveraging React's concurrent rendering, Nebula manages complex state transitions with extreme efficiency.",
    },
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "WebSocket API",
    ],
    gallery: [
      {
        alt: "Data Visualization",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8RCkrWoDqtG8OJTKoUL1y5vNAY-gXVSdSZYtYcutWK-u_zKty2aFQblpKaoYBfKaTEiC9RyoXrSNlGGwMjk3KsU-1suAm3hObtcBPc-yjGy5mgoczCmOH_bu13c7DCNVzgGNI4BDw5FnrD84Tqyte_9x-Uw4nRunfHwrf7GSHzRJMDrRccZjIVT5UZ561PbELk03WAzvgfCTVpCab8nemoG8qUM69LWnm5BFNfsIYUETc-1uQlsmu5xxqWCHfO15MuYdQTHioErs",
      },
      {
        alt: "Mobile View",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJvqOf4KAIZy2rKqk-NW66kJzPL2WRf4ewVd2mC8GhGnkB9hU8xVGDRmdQOQwQzPkLTzdQIpYk9-9IG1PIYfBIp9WmlkWRkIMc32-zje8u2n_xXDIY7ZuiuHc54_Rppfpo-ZsKeB3iBneKJBxl7H24UeTTSuuSSd3G5X8_IdqIp5U2rWG4wRNCgtpODyPY6184e1G18OI667e9ptNl3NMEYaPN52PprVszfgbbdQLTaWkNJJ-GRNPAJWPWUItXIk04bJbpulIuATg",
      },
      {
        alt: "Code Structure",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvYFkNmP7UL7Gqqzadvej-DmfwZh8oCBPIWH85ARZaIbMxgLNzvqcDItY-X1-au43zuaBVPnnzjFnSz03npI7IEUOu0FV8WFT1d864WHaq0hexLBuGdlTBAlvBZ2DJMYv5GzmJdobm3GUmtRql3P9AIXB6PthA55sMgNGwNBeLCSTucFSkcv1-loRo80kBB_jT36-uDvlgLs-m5THgmzGfjvvlQxANxxAzTeaKemvm61UAf3Z0VCh5tNeqpfTl25Dhw3qcADy2UeE",
      },
    ],
    featuresHeading: "Core Capabilities",
    featuresBlurb: "Precision-engineered features that define the Nebula experience.",
    features: [
      {
        icon: "speed",
        title: "Real-time updates",
        text: "Sub-100ms latency on data stream visualization using specialized WebSocket handlers.",
      },
      {
        icon: "monitoring",
        title: "Custom charting engine",
        text: "Built from scratch using Canvas API for maximum performance and artistic control.",
      },
      {
        icon: "memory",
        title: "High-performance",
        text: "Optimized data processing using Web Workers to prevent main-thread blocking.",
      },
      {
        icon: "devices",
        title: "Responsive design",
        text: "Seamless experience across ultra-wide monitors and mobile devices.",
      },
    ],
  },
  {
    id: "zenith-mobile",
    title: "Zenith Mobile",
    client: "HealthTech Corp",
    tags: ["React Native", "Firebase"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJzSYW13ZmzUln-JIP8Ib40vhXSkzJ2nJfxtgPc5BQh360bNKhWmi21FJAR6qU7AcrQ_pQakeHg0ZtF9X1akFKYmWjrVNBH1yMMVK1Ir82IXyQQ7_Nlypyq6NDqSjR4Nj6laNGJjo3ROCnWgeYM90brxMzDGK5OcMIqg0Dc2tb43iaf0kUD-Wrg2EnYYXY3i2UrF9VgPma-P1y5Mhia_Ye8PhH7lh5NIph5FHZrlKoEmF5nXoqiYi_cZ95Ow4Y0GeYnarZvDB1MAg",
    description:
      "High-performance React Native application for wellness tracking with integrated health-kit sync.",
    longDescription:
      "Enterprise-grade React Native ecosystem for wellness tracking, featuring localized data sync and HIPAA-compliant architecture.",
    featured: true,
  },
  {
    id: "aether-immersive",
    title: "Aether Immersive",
    client: "ArcDesign Studio",
    tags: ["React Three Fiber", "WebGL"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDycw-z-kF_PA0hy9T4yIBGVYikZyW2CTw6pRhAma7SmcpYO_QR-BJ47utrqQuO3C1yR2F_kkitak0Y5MP10eXADqFRwtPdFUu9b3EG30XNM2Qxv1N2sEzq6hPEaFgADA2gKlHwmob10f5pArtZIA33h8XI_nWPVmrq3cUx3rTmi2_oIyeR2GxiK2jhgQdE_FRJxhxGBGljq2AXvJiU0W8SS42ocZFDueRsIYFFoQhlXNNIuOi2LR6YggwbqJXCgeMm2JZ7E8Ws02w",
    description:
      "A 3D configurator for architectural firms built with Three.js and custom shader materials.",
    longDescription:
      "A 3D configurator for architectural firms built with Three.js and custom shader materials.",
    featured: true,
  },
  {
    id: "quantum-code",
    title: "Quantum Code",
    client: "AI Lab",
    tags: ["Zustand", "Tailwind"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvYFkNmP7UL7Gqqzadvej-DmfwZh8oCBPIWH85ARZaIbMxgLNzvqcDItY-X1-au43zuaBVPnnzjFnSz03npI7IEUOu0FV8WFT1d864WHaq0hexLBuGdlTBAlvBZ2DJMYv5GzmJdobm3GUmtRql3P9AIXB6PthA55sMgNGwNBeLCSTucFSkcv1-loRo80kBB_jT36-uDvlgLs-m5THgmzGfjvvlQxANxxAzTeaKemvm61UAf3Z0VCh5tNeqpfTl25Dhw3qcADy2UeE",
    description:
      "An AI-powered playground with syntax highlighting and real-time collaboration.",
    longDescription:
      "An AI-powered playground with syntax highlighting and real-time collaboration.",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
