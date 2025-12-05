import React from "react";

const services = [
  {
    title: "Done-for-you Web Design",
    desc: "Custom layouts, responsive builds, and copy guidance shaped for your services.",
  },
  {
    title: "Conversion-Focused Structure",
    desc: "Clear CTAs, click-to-call buttons, quote forms, and service pages that guide action.",
  },
  {
    title: "SEO-Friendly Foundations",
    desc: "Clean structure with on-page basics—titles, headings, speed, and schema-ready markup.",
  },
];

const WhatWeDo = () => {
  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
            What We Do
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Built to win calls, quote requests, and bookings.
          </h2>
          <p className="text-lg text-slate-300">
            SummitLine Digital builds modern, fast, mobile-friendly websites that feel
            professional and drive real leads for Edmonton businesses.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-card transition hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-cyan-500/25"
            >
              <div className="mb-4 h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500/40 to-blue-500/30" />
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
