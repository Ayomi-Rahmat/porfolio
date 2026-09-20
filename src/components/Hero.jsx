import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100 px-6">
      <div className="max-w-3xl text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-emerald-950/60 text-emerald-400 text-xs font-semibold tracking-wide border border-emerald-800/50 mb-6">
          Software Engineering Intern & Full-Stack Developer
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Building scalable backend systems & <span className="text-emerald-400">sleek web apps</span>.
        </h1>
        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
          Crafting robust REST APIs with Java and Spring Boot, responsive user interfaces with React, and turning visionary concepts into high-impact digital products.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#projects" className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold px-6 py-3 rounded-lg transition shadow-lg shadow-emerald-900/30">
            Explore Projects
          </a>
          <a href="#contact" className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-6 py-3 rounded-lg border border-slate-700 transition">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}