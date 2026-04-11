export function Experience() {
  const experiences = [
    {
      date: "2022 - Present",
      role: "Team Lead React JS Developer",
      company: "TechSolutions Global",
      description: [
        "Spearheaded technical direction for a team of 8 senior developers on a mission-critical legacy migration.",
        "Reduced TTI by 45% using Next.js 14 and partial hydration strategies.",
        "Standardized UI/UX patterns across all live projects, ensuring design consistency and accessibility.",
        "Mentored junior and senior developers through structured code reviews and architectural workshops.",
      ],
      current: true,
    },
    {
      date: "2020 - 2022",
      role: "Senior React Engineer",
      company: "Fintech Dynamics",
      description: [
        "Designed and implemented a scalable micro-frontend architecture for institutional banking dashboards.",
        "Integrated high-performance data visualization using D3.js and optimized WebSocket streams.",
        "Managed stakeholder expectations and collaborated with cross-functional teams to deliver 5+ projects.",
      ],
      current: false,
    },
    {
      date: "2019 - 2020",
      role: "Fullstack UI Developer",
      company: "CloudStream Media",
      description: [
        "Developed custom video player components with React and HLS.js.",
      ],
      current: false,
    },
  ];

  return (
    <section className="py-24 px-8 max-w-5xl mx-auto" id="experience">
      <h2 className="font-headline text-4xl font-bold mb-16 text-center animate-fade-in-up">
        Career Journey
      </h2>
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[1px] bg-outline-variant/20 -translate-x-1/2"></div>

        {experiences.map((exp, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={exp.company}
              className={`relative flex items-center mb-16 md:justify-between group ${
                !isEven ? "flex-row-reverse" : ""
              }`}
            >
              {/* Desktop Side Info */}
              <div
                className={`hidden md:block w-[45%] ${
                  isEven ? "text-right pr-12" : "text-left pl-12"
                } animate-fade-in-up`}
              >
                <span
                  className={`font-label text-sm font-bold ${
                    exp.current ? "text-primary" : "text-on-surface-variant"
                  }`}
                >
                  {exp.date}
                </span>
                <h3 className="text-xl font-bold mt-2 font-headline">
                  {exp.role}
                </h3>
              </div>

              {/* Marker */}
              <div
                className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 z-10 transition-all duration-300 ${
                  exp.current
                    ? "bg-primary shadow-[0_0_15px_rgba(57,184,253,0.6)] group-hover:scale-125"
                    : "bg-outline-variant group-hover:bg-primary/50 group-hover:scale-110"
                }`}
              ></div>

              {/* Card */}
              <div className="w-full md:w-[45%] pl-12 md:pl-0 animate-fade-in-up">
                <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/10 hover:border-primary/30 transition-all duration-300 group-hover:bg-surface-container-high translate-y-0 group-hover:-translate-y-1">
                  <span
                    className={`md:hidden font-label text-sm font-bold block mb-2 ${
                      exp.current ? "text-primary" : "text-on-surface-variant"
                    }`}
                  >
                    {exp.date}
                  </span>
                  <h4 className="text-lg font-bold text-on-background font-headline">
                    {exp.company}
                  </h4>
                  <ul className="mt-4 space-y-2 text-on-surface-variant text-sm font-body">
                    {exp.description.map((point, pIdx) => (
                      <li key={pIdx} className="flex gap-2">
                        <span className="text-primary">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
