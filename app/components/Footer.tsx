export function Footer() {
  return (
    <footer className="w-full border-t border-slate-800/50 bg-[#020810]">
      <div className="flex flex-col md:flex-row justify-between items-center py-12 px-8 max-w-7xl mx-auto">
        <div className="text-lg font-black text-slate-200 font-body mb-8 md:mb-0">
          Rajkumar Patel
        </div>
        <p className="font-body text-sm uppercase tracking-widest text-slate-500 text-center">
          © 2024 Team Lead React JS Developer. Built with Precision.
        </p>
        <div className="flex gap-8 mt-8 md:mt-0 font-body text-sm uppercase tracking-widest">
          <a
            className="text-slate-500 hover:text-slate-100 transition-colors opacity-80 hover:opacity-100 duration-300"
            href="#"
          >
            LinkedIn
          </a>
          <a
            className="text-slate-500 hover:text-slate-100 transition-colors opacity-80 hover:opacity-100 duration-300"
            href="#"
          >
            GitHub
          </a>
          <a
            className="text-slate-500 hover:text-slate-100 transition-colors opacity-80 hover:opacity-100 duration-300"
            href="#"
          >
            Source Code
          </a>
        </div>
      </div>
    </footer>
  );
}
