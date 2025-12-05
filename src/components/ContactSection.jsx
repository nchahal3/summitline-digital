import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
            Get Your Free Website Audit
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Tell us about your business.
          </h2>
          <p className="text-lg text-slate-300">
            We’ll send a quick website audit and a fixed-price quote tailored to your
            services.
          </p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[2fr_1fr]">
          <form
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-card"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col">
                <label className="text-sm text-slate-200">Name</label>
                <input
                  type="text"
                  required
                  className="mt-2 rounded-lg border border-white/10 bg-slate-900/70 px-3 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400/70 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-slate-200">Business Name</label>
                <input
                  type="text"
                  required
                  className="mt-2 rounded-lg border border-white/10 bg-slate-900/70 px-3 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400/70 focus:outline-none"
                  placeholder="Company name"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-slate-200">Email</label>
                <input
                  type="email"
                  required
                  className="mt-2 rounded-lg border border-white/10 bg-slate-900/70 px-3 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400/70 focus:outline-none"
                  placeholder="you@email.com"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-slate-200">Phone</label>
                <input
                  type="tel"
                  required
                  className="mt-2 rounded-lg border border-white/10 bg-slate-900/70 px-3 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400/70 focus:outline-none"
                  placeholder="(587) 555-0123"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-slate-200">Current Website URL (optional)</label>
                <input
                  type="url"
                  className="mt-2 rounded-lg border border-white/10 bg-slate-900/70 px-3 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400/70 focus:outline-none"
                  placeholder="https://"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-slate-200">Industry</label>
                <select
                  className="mt-2 rounded-lg border border-white/10 bg-slate-900/70 px-3 py-3 text-sm text-white focus:border-cyan-400/70 focus:outline-none"
                  defaultValue="Contractor"
                >
                  <option>Contractor</option>
                  <option>Auto</option>
                  <option>Beauty</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-slate-200">Message</label>
              <textarea
                rows="4"
                className="mt-2 w-full rounded-lg border border-white/10 bg-slate-900/70 px-3 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400/70 focus:outline-none"
                placeholder="What do you need help with? Services, timeline, goals."
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:scale-[1.01]"
              >
                Submit & Request Audit
              </button>
            </div>
          </form>
          <div className="space-y-4 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-card">
            <h3 className="text-xl font-semibold text-white">Need something specific?</h3>
            <p className="text-sm text-slate-300">
              Share your services, service area, and timeline. We typically reply within
              1–2 business days.
            </p>
            <div className="space-y-3 text-sm text-slate-200">
              <div>
                <div className="text-slate-400">Email</div>
                <div className="font-semibold text-white">info@summitlinedigital.com</div>
              </div>
              <div>
                <div className="text-slate-400">Phone</div>
                <div className="font-semibold text-white">(587) 555-0123</div>
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-300">
              No spam. We respect your time and only share a clear plan and pricing.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
