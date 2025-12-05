import React from "react";

const stats = [
  { label: "Local Projects", value: "20+" },
  { label: "Turnaround", value: "7–14 Days" },
  { label: "Pricing", value: "Fixed & Transparent" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-20 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-200/90">
            Edmonton, Alberta
          </div>
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Modern Websites for Edmonton Service Businesses.
          </h1>
          <p className="max-w-2xl text-lg text-slate-200">
            We build fast, mobile-friendly sites for contractors, auto shops, and
            beauty services that actually bring in calls and quote requests.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:scale-[1.02]"
            >
              Explore Our Services
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-cyan-400/60 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:text-white"
            >
              Get a Free Website Audit
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-card"
              >
                <div className="text-xl font-bold text-white">{item.value}</div>
                <div className="text-sm text-slate-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="relative">
            <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-500/40 to-blue-500/20 blur-3xl" />
            <div className="absolute -right-8 -bottom-10 h-24 w-24 rounded-full bg-gradient-to-br from-teal-400/30 to-cyan-500/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200">
                  Demo Contractor Website
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-cyan-500/30 via-blue-500/30 to-slate-900 p-6 text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-100/80">
                      Summit Roofing Co.
                    </p>
                    <h3 className="text-2xl font-bold text-white">
                      Edmonton Roofing & Exteriors
                    </h3>
                  </div>
                  <div className="rounded-full bg-white/15 px-3 py-1 text-xs text-white">
                    CTA
                  </div>
                </div>
                <div className="mt-6 grid gap-3 text-sm text-slate-100">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 h-2 w-2 rounded-full bg-cyan-300" />
                    <p>Click-to-call header button for instant estimates.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 h-2 w-2 rounded-full bg-cyan-300" />
                    <p>Service pages for roofing, siding, and eavestroughs.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 h-2 w-2 rounded-full bg-cyan-300" />
                    <p>Testimonials and project gallery for social proof.</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex-1 rounded-xl bg-white/10 px-4 py-3 text-white">
                    “Booked 12 extra roof inspections in two weeks.”
                  </div>
                  <div className="h-10 w-10 rounded-full bg-white/10" />
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                  Mobile-first layout
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                  SEO-ready structure
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                  Fast load speed
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                  Clear CTAs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
