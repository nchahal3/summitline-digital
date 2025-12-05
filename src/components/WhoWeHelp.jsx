import React from "react";

const niches = [
  { title: "Roofers", emoji: "🏠", desc: "Get more quote requests for roof repairs and replacements." },
  { title: "Landscaping & Snow Removal", emoji: "❄️", desc: "Fill your calendar with seasonal contracts and recurring visits." },
  { title: "Concrete & Paving", emoji: "🛣️", desc: "Drive calls for driveways, pads, patios, and asphalt work." },
  { title: "Painters", emoji: "🎨", desc: "Highlight crisp before/afters to win residential projects." },
  { title: "Fencing & Decks", emoji: "🪚", desc: "Showcase builds and make it easy to request measurements." },
  { title: "Handyman & Renovation", emoji: "🧰", desc: "Book more small renos with fast mobile-friendly pages." },
  { title: "HVAC, Plumbing & Electrical", emoji: "⚡", desc: "Click-to-call buttons for urgent service requests." },
  { title: "Auto Services", emoji: "🚗", desc: "Promote detailing, repairs, and tire swaps with quick booking." },
  { title: "Beauty & Personal Services", emoji: "💎", desc: "Clean, modern booking flows for salons, spas, and studios." },
];

const WhoWeHelp = () => {
  return (
    <section id="who-we-help" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
            Who We Help
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Websites built for Edmonton service businesses.
          </h2>
          <p className="text-lg text-slate-300">
            We design sites that feel local, trustworthy, and action-focused—built to
            turn visits into phone calls, quote requests, and bookings.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {niches.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-card transition hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-cyan-500/20"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-xl">
                  {item.emoji}
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
