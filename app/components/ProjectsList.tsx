import { Link } from "react-router";

export function ProjectsList() {
  const projects = [
    {
      id: "nebula-dashboard",
      title: "Nebula Dashboard",
      tags: ["Next.js 14", "Prisma"],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAHAVgUc2y0MT-l7r53WmMhlDiIvVY8QXa6MZZndSacbSaGoO8FChjqVEPQGS7SB6U-ppJT86sK2ifQpLLdgcuHiBX7eTlhtIZ1yyDUtASNa9BI4VS59Or75FwMkxWHqJZBT-MKAbUik6PHa3Vqv4OCj36k-4ybdMuk3jt8lavGlpSNVj_mV1Q5MGlqHHCPUrs_JN52OwJ4-0pdB4qsK2lGp5efF_Q5MfKkH4nHSzAfdiQ8Wc1thXMJs57NEiMR33HMyrX8B6IOX2E",
      description:
        "A real-time analytics engine for decentralized finance protocols with sub-second latency updates.",
    },
    {
      id: "zenith-mobile",
      title: "Zenith Mobile",
      tags: ["React Native", "Firebase"],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAJzSYW13ZmzUln-JIP8Ib40vhXSkzJ2nJfxtgPc5BQh360bNKhWmi21FJAR6qU7AcrQ_pQakeHg0ZtF9X1akFKYmWjrVNBH1yMMVK1Ir82IXyQQ7_Nlypyq6NDqSjR4Nj6laNGJjo3ROCnWgeYM90brxMzDGK5OcMIqg0Dc2tb43iaf0kUD-Wrg2EnYYXY3i2UrF9VgPma-P1y5Mhia_Ye8PhH7lh5NIph5FHZrlKoEmF5nXoqiYi_cZ95Ow4Y0GeYnarZvDB1MAg",
      description:
        "High-performance React Native application for wellness tracking with integrated health-kit sync.",
    },
    {
      id: "aether-immersive",
      title: "Aether Immersive",
      tags: ["React Three Fiber", "WebGL"],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDycw-z-kF_PA0hy9T4yIBGVYikZyW2CTw6pRhAma7SmcpYO_QR-BJ47utrqQuO3C1yR2F_kkitak0Y5MP10eXADqFRwtPdFUu9b3EG30XNM2Qxv1N2sEzq6hPEaFgADA2gKlHwmob10f5pArtZIA33h8XI_nWPVmrq3cUx3rTmi2_oIyeR2GxiK2jhgQdE_FRJxhxGBGljq2AXvJiU0W8SS42ocZFDueRsIYFFoQhlXNNIuOi2LR6YggwbqJXCgeMm2JZ7E8Ws02w",
      description:
        "A 3D configurator for architectural firms built with Three.js and custom shader materials.",
    },
  ];

  return (
    <section className="py-24 px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 animate-fade-in-up">
          <div>
            <h2 className="font-headline text-4xl font-bold text-on-background">
              Selected Works
            </h2>
            <p className="font-body text-on-surface-variant mt-4">
              A curated selection from 20+ live projects delivered with excellence.
            </p>
          </div>
          <Link
            className="text-primary font-semibold flex items-center gap-2 hover:gap-4 transition-all"
            to="/projects"
          >
            View All Projects{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((proj, idx) => (
            <Link
              to={`/project/${proj.id}`}
              key={proj.id}
              className={`group bg-surface-container-low rounded-3xl overflow-hidden border border-outline-variant/10 hover:border-primary/20 hover:scale-[1.02] transition-all duration-300 animate-fade-in-up delay-${
                idx + 1
              }00`}
            >
              <div className="h-64 relative overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt={proj.title}
                  src={proj.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-60"></div>
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded border border-primary/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-headline text-2xl font-bold mb-3">
                  {proj.title}
                </h3>
                <p className="font-body text-on-surface-variant text-sm mb-6">
                  {proj.description}
                </p>
                <div className="w-full border border-outline-variant/20 py-3 rounded-full font-semibold group-hover:bg-primary group-hover:text-on-primary transition-all text-center">
                  View Case Study
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
