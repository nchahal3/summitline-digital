import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30">
      <div className="backdrop-blur-xl bg-slate-950/80 border-b border-white/5">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold tracking-tight">
            SummitLine Digital
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#who-we-help" className="transition hover:text-white">
              Who We Help
            </a>
            <a href="#samples" className="transition hover:text-white">
              Samples
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
            <a
              href="#contact"
              className="rounded-full border border-cyan-400/50 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02] hover:shadow-cyan-500/30"
            >
              Free Audit
            </a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-cyan-400/50 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02] hover:shadow-cyan-500/30 md:hidden"
          >
            Free Audit
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
