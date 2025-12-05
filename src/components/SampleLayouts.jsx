import React from "react";

const samples = [
  {
    name: "Evergreen Roofing",
    bullets: ["Click-to-call header", "Service pages for repairs & installs"],
  },
  {
    name: "Northside Concrete",
    bullets: ["Project gallery grid", "Lead form on every page"],
  },
  {
    name: "Summit Auto Detail",
    bullets: ["Package cards with pricing", "Instant booking CTA"],
  },
  {
    name: "Glow Lash Studio",
    bullets: ["Mobile-first booking", "Reviews and before/after slider"],
  },
];

const SampleLayouts = () => {
  return (
    <section id="samples" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
            Sample Layouts
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Here’s what your new website could look like.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {samples.map((sample) => (
            <div
              key={sample.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-card transition hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-cyan-500/25"
            >
              <div className="h-32 rounded-xl bg-gradient-to-br from-cyan-500/30 via-blue-500/25 to-slate-900" />
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-white">{sample.name}</h3>
                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                  {sample.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SampleLayouts;
