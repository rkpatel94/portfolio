export function Hero() {
  return (
    <section className="relative pt-40 pb-24 px-8 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 opacity-20">
        <div className="w-[800px] h-[800px] bg-primary blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-3/5">
          <span className="font-label text-primary-fixed tracking-widest uppercase text-sm font-semibold mb-4 block animate-fade-in-up">
            6.5+ Years of Engineering Excellence
          </span>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-8xl font-bold text-on-background leading-[1.1] mb-8 tracking-tighter animate-fade-in-up delay-100">
            Team Lead <br />
            <span className="text-primary">React JS Developer</span>
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed animate-fade-in-up delay-200">
            Architecting and delivering high-performance React applications for
            enterprise clients. With 6.5+ years of experience, I specialize in
            building scalable, maintainable front-end systems and leading
            development teams to achieve technical excellence.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
            <a
              href="#projects"
              className="bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold px-8 py-4 rounded-full text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
            >
              View Portfolio
            </a>
            <button className="border border-outline-variant/30 text-primary font-semibold px-8 py-4 rounded-full text-lg hover:bg-surface-container-low transition-colors">
              Download Resume
            </button>
          </div>
        </div>
        <div className="md:w-2/5 relative animate-fade-in-up delay-400">
          <div className="aspect-square rounded-3xl bg-surface-container-low border border-outline-variant/10 p-4 shadow-2xl relative">
            <img
              className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              alt="Professional Portrait"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbm-F6FOuKJvmLHTDtDPwORdq74urHWo7TrWyUuMVYn0strnO6z_ePuTvXRgml5yvqrUzIC0mBAdg6aQd9KMrHl0Szo_SrjSxNnelQ5NYa5ahhzmDJaDfARLJYeJZvXKyNARQ1kIBwAsfzMoLgZpoQ19j8AL3E4ht8pBRYBnKXzRvS92wo7OYkfqcq_yh-i27Ea25ts50mR0jXvJaNcHlyAJGVLUHZC47OUHPesZtla7D9O57MlBV0cO2yUvbCvmDsgK-4ZTSZNUA"
            />
            <div className="absolute -bottom-6 -left-6 bg-surface-container-high/80 backdrop-blur-md p-6 rounded-2xl border border-outline-variant/20 animate-float">
              <p className="font-headline text-3xl font-bold text-primary">
                20+
              </p>
              <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                Live Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
