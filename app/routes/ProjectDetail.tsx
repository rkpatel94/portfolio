// Project Detail Page
import type { Route } from "./+types/ProjectDetail";

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `Project | ${params.id}` },
    { name: "description", content: `Case study for ${params.id}` },
  ];
}

export default function Project({ params }: Route.ComponentProps) {
  return (
    <main className="pt-20">
      {/* Section 1: Hero */}
      <section className="relative min-h-[921px] flex items-center overflow-hidden blueprint-grid">
        <div className="max-w-7xl mx-auto px-8 w-full grid md:grid-cols-2 gap-16 items-center py-24">
          <div className="z-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary text-xs font-label uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Case Study 01
            </div>
            <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter text-on-surface mb-6 leading-[0.9]">
              Nebula <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
                Dashboard
              </span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-lg mb-10 leading-relaxed font-body">
              A high-performance real-time analytics engine designed for massive
              scale and millisecond precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold text-lg shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                View Live Site
              </button>
              <button className="px-8 py-4 rounded-full border border-outline-variant/30 text-primary font-headline font-bold text-lg hover:bg-surface-container-high transition-colors">
                View Source
              </button>
            </div>
          </div>
          <div className="relative group animate-fade-in-up delay-200">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-tertiary/20 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="relative rounded-lg overflow-hidden border border-outline-variant/20 shadow-2xl">
              <img
                alt="Nebula Dashboard UI"
                className="w-full aspect-video object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3bOLii7ne2Ozv1ebUN2E6XFy95rdYjW22Qn8BzZckUhx5qL7hPvKtaCMDmWVoFWikHCCMO75g_EUT8eKXCed5C9te1KtVhV0J8NQu2gVMIsgVMZIf4KF5szsWPo3mRpMXo6c_sRJtAUIPiUxM3aodDPh8kgXOOO9frXxTjxSDaK6Gruta2rjdAl4r8HHQkxAAyaTb0DWq8sjyt9WCet9tYfnYN8t2nM1l63IrsRx_6R_SzP1ZQdYwD36DsDOKxMGZnPOHv1lXBPw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Project Overview */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 md:gap-32">
            <div className="animate-fade-in-up">
              <div className="text-primary font-label uppercase tracking-widest mb-4">
                The Challenge
              </div>
              <h2 className="text-4xl font-headline font-bold text-on-surface mb-6">
                Building for Real-Time Scale
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed font-body">
                The primary hurdle was architecting a system capable of
                processing and visualizing over 10,000 data points per second
                without UI lag. Existing solutions struggled with garbage
                collection and DOM reconciliation when dealing with
                high-frequency WebSocket streams.
              </p>
            </div>
            <div className="animate-fade-in-up delay-200">
              <div className="text-tertiary font-label uppercase tracking-widest mb-4">
                The Solution
              </div>
              <h2 className="text-4xl font-headline font-bold text-on-surface mb-6">
                Reactive Data Pipelines
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed font-body">
                By implementing a custom virtualization layer and offloading
                data processing to Web Workers, we ensured the main thread
                remained responsive. Leveraging React's concurrent rendering,
                Nebula manages complex state transitions with extreme
                efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Tech Stack */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8 text-center animate-fade-in-up">
          <h3 className="text-sm font-label uppercase tracking-[0.3em] text-outline mb-12">
            Engineered With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Framer Motion",
              "WebSocket API",
            ].map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 rounded-full bg-surface-container-high border border-outline-variant/20 text-on-surface font-label text-sm flex items-center gap-2 hover:bg-primary/10 hover:border-primary/40 transition-all cursor-default"
              >
                <span className="w-2 h-2 rounded-full bg-primary"></span> {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Gallery */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 group overflow-hidden rounded-lg border border-outline-variant/10 animate-fade-in-up">
              <img
                alt="Data Visualization"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8RCkrWoDqtG8OJTKoUL1y5vNAY-gXVSdSZYtYcutWK-u_zKty2aFQblpKaoYBfKaTEiC9RyoXrSNlGGwMjk3KsU-1suAm3hObtcBPc-yjGy5mgoczCmOH_bu13c7DCNVzgGNI4BDw5FnrD84Tqyte_9x-Uw4nRunfHwrf7GSHzRJMDrRccZjIVT5UZ561PbELk03WAzvgfCTVpCab8nemoG8qUM69LWnm5BFNfsIYUETc-1uQlsmu5xxqWCHfO15MuYdQTHioErs"
              />
            </div>
            <div className="md:col-span-4 grid gap-8 animate-fade-in-up delay-200">
              <div className="group overflow-hidden rounded-lg border border-outline-variant/10">
                <img
                  alt="Mobile View"
                  className="w-full h-[234px] object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJvqOf4KAIZy2rKqk-NW66kJzPL2WRf4ewVd2mC8GhGnkB9hU8xVGDRmdQOQwQzPkLTzdQIpYk9-9IG1PIYfBIp9WmlkWRkIMc32-zje8u2n_xXDIY7ZuiuHc54_Rppfpo-ZsKeB3iBneKJBxl7H24UeTTSuuSSd3G5X8_IdqIp5U2rWG4wRNCgtpODyPY6184e1G18OI667e9ptNl3NMEYaPN52PprVszfgbbdQLTaWkNJJ-GRNPAJWPWUItXIk04bJbpulIuATg"
                />
              </div>
              <div className="group overflow-hidden rounded-lg border border-outline-variant/10">
                <img
                  alt="Code Structure"
                  className="w-full h-[234px] object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvYFkNmP7UL7Gqqzadvej-DmfwZh8oCBPIWH85ARZaIbMxgLNzvqcDItY-X1-au43zuaBVPnnzjFnSz03npI7IEUOu0FV8WFT1d864WHaq0hexLBuGdlTBAlvBZ2DJMYv5GzmJdobm3GUmtRql3P9AIXB6PthA55sMgNGwNBeLCSTucFSkcv1-loRo80kBB_jT36-uDvlgLs-m5THgmzGfjvvlQxANxxAzTeaKemvm61UAf3Z0VCh5tNeqpfTl25Dhw3qcADy2UeE"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Key Features */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 animate-fade-in-up">
            <div>
              <h2 className="text-5xl font-headline font-bold text-on-surface mb-4">
                Core Capabilities
              </h2>
              <p className="text-on-surface-variant max-w-md">
                Precision-engineered features that define the Nebula experience.
              </p>
            </div>
            <div className="h-px flex-1 bg-outline-variant/20 mx-8 hidden md:block"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
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
            ].map((feature, idx) => (
              <div
                key={feature.title}
                className={`p-8 rounded-lg bg-surface-container-high border border-outline-variant/10 hover:border-primary/30 transition-colors animate-fade-in-up delay-${
                  idx + 1
                }00`}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined">
                    {feature.icon}
                  </span>
                </div>
                <h4 className="text-xl font-headline font-bold text-on-surface mb-3">
                  {feature.title}
                </h4>
                <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
