import React from 'react';
import { skills } from '../data/projectsData';
import { Code, Server, Layout, Wrench } from 'lucide-react';

const icons = [<Code size={24} key="i0" />, <Server size={24} key="i1" />, <Layout size={24} key="i2" />, <Wrench size={24} key="i3" />];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-950 text-slate-100 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-3">What I Can Do</h2>
          <p className="text-slate-400 max-w-lg mx-auto">My technical toolkit spanning full-stack development, modern frameworks, and engineering workflows.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, index) => (
            <div key={index} className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-emerald-500/50 transition">
              <div className="text-emerald-400 mb-4">{icons[index]}</div>
              <h3 className="font-semibold text-lg mb-4 text-slate-200">{group.category}</h3>
              <ul className="space-y-2">
                {group.items.map((item, i) => (
                  <li key={i} className="text-sm text-slate-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
