import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-lg font-semibold text-white">SummitLine Digital</div>
          <p className="text-sm text-slate-400">
            Websites for Edmonton service businesses.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-slate-300 sm:items-end">
          <div className="flex flex-wrap gap-4">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#who-we-help" className="transition hover:text-white">
              Who We Help
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
          <div className="text-slate-400">Edmonton, Alberta, Canada</div>
          <div className="text-xs text-slate-500">
            © 2025 SummitLine Digital. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
