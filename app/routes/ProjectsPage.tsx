// Projects All View
import type { Route } from "./+types/ProjectsPage";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects | Team Lead React JS Developer" },
    {
      name: "description",
      content: "Complete portfolio of engineering projects and case studies.",
    },
  ];
}

const projects = [
  {
    id: "nebula-dashboard",
    title: "Nebula Dashboard",
    client: "DeFi Protocol",
    tags: ["Next.js 14", "Prisma"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAHAVgUc2y0MT-l7r53WmMhlDiIvVY8QXa6MZZndSacbSaGoO8FChjqVEPQGS7SB6U-ppJT86sK2ifQpLLdgcuHiBX7eTlhtIZ1yyDUtASNa9BI4VS59Or75FwMkxWHqJZBT-MKAbUik6PHa3Vqv4OCj36k-4ybdMuk3jt8lavGlpSNVj_mV1Q5MGlqHHCPUrs_JN52OwJ4-0pdB4qsK2lGp5efF_Q5MfKkH4nHSzAfdiQ8Wc1thXMJs57NEiMR33HMyrX8B6IOX2E",
    description:
      "A real-time enterprise analytics engine for DeFi protocols, architected for sub-second latency and high-volume data ingestion.",
  },
  {
    id: "zenith-mobile",
    title: "Zenith Mobile",
    client: "HealthTech Corp",
    tags: ["React Native", "Firebase"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJzSYW13ZmzUln-JIP8Ib40vhXSkzJ2nJfxtgPc5BQh360bNKhWmi21FJAR6qU7AcrQ_pQakeHg0ZtF9X1akFKYmWjrVNBH1yMMVK1Ir82IXyQQ7_Nlypyq6NDqSjR4Nj6laNGJjo3ROCnWgeYM90brxMzDGK5OcMIqg0Dc2tb43iaf0kUD-Wrg2EnYYXY3i2UrF9VgPma-P1y5Mhia_Ye8PhH7lh5NIph5FHZrlKoEmF5nXoqiYi_cZ95Ow4Y0GeYnarZvDB1MAg",
    description:
      "Enterprise-grade React Native ecosystem for wellness tracking, featuring localized data sync and HIPAA-compliant architecture.",
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
  },
];

export default function Projects() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 px-8 overflow-hidden blueprint-grid">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-surface to-transparent opacity-60 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10 animate-fade-in-up">
          <Link
            to="/"
            className="flex items-center gap-2 text-primary font-label uppercase tracking-widest text-xs mb-8 hover:-translate-x-1 transition-transform w-fit"
          >
            <span className="material-symbols-outlined text-sm">
              arrow_back
            </span>
            Back Home
          </Link>
          <h1 className="text-6xl md:text-8xl font-headline font-bold text-on-surface mb-6 tracking-tighter">
            Enterprise <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
              Architecture
            </span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl font-body leading-relaxed">
            A strategic showcase of 20+ live projects, spanning complex enterprise 
            ecosystems, architectural leadership, and high-performance digital 
            solutions built for global scale.
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-24 px-8 bg-surface-container-low/50">
        <div className="max-w-7xl mx-auto space-y-32">
          {projects.map((proj, idx) => (
            <div
              key={proj.id}
              className={`project-row grid md:grid-cols-12 gap-16 items-center animate-fade-in-up delay-${
                idx + 1
              }00`}
            >
              <div
                className={`md:col-span-7 relative group ${
                  idx % 2 !== 0 ? "md:order-last" : ""
                }`}
              >
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-tertiary/10 blur-3xl rounded-full opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative rounded-2xl overflow-hidden border border-outline-variant/10 shadow-2xl transition-all duration-700 hover:scale-[1.01] hover:border-primary/20">
                  <img
                    alt={proj.title}
                    className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-1000"
                    src={proj.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent flex items-end p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Link
                      to={`/project/${proj.id}`}
                      className="bg-primary text-on-primary font-bold px-8 py-3 rounded-full uppercase tracking-widest text-xs hover:scale-105 transition-all"
                    >
                      View Case Study
                    </Link>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-primary font-label uppercase tracking-[0.3em] text-[10px] font-bold">
                    Client: {proj.client}
                  </span>
                  <div className="h-px w-12 bg-primary/20"></div>
                </div>
                <h3 className="text-4xl font-headline font-bold text-on-surface">
                  {proj.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-surface-container-high text-on-surface-variant border border-outline-variant/10 rounded-full text-[10px] font-label font-bold tracking-widest uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-lg text-on-surface-variant font-body leading-relaxed">
                  {proj.description}
                </p>
                <Link
                  to={`/project/${proj.id}`}
                  className="inline-flex items-center gap-3 text-primary font-bold tracking-widest uppercase text-xs hover:gap-6 transition-all"
                >
                  Deep Dive Project{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-surface-container-low">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl font-headline font-bold text-on-surface">
            Have a project in mind?
          </h2>
          <p className="text-lg text-on-surface-variant font-body">
            I am currently optimizing my bandwidth for strategic architectural 
            consulting and leadership roles. Let&apos;s engineer something 
            groundbreaking together.
          </p>
          <div className="pt-8">
            <Link
              to="/#contact"
              className="bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold px-12 py-5 rounded-full text-xl shadow-xl shadow-primary/20 hover:scale-105 transition-transform inline-block"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
