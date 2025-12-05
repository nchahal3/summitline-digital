import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoWeHelp from "./components/WhoWeHelp";
import WhatWeDo from "./components/WhatWeDo";
import SampleLayouts from "./components/SampleLayouts";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,160,255,0.08),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.07),transparent_28%),radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.08),transparent_26%)] pointer-events-none" />
      <Navbar />
      <main className="relative">
        <Hero />
        <WhatWeDo />
        <WhoWeHelp />
        <SampleLayouts />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
