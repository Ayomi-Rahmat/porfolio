import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-950 text-slate-100 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-3">Get In Touch</h2>
        <p className="text-slate-400 max-w-lg mx-auto mb-10">
          Have an exciting project idea, collaboration, or opportunity? Let's connect and build something amazing together!
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a href="mailto:your-email@example.com" className="flex items-center gap-3 bg-slate-900 border border-slate-800 hover:border-emerald-500/50 px-6 py-3 rounded-xl transition text-slate-300 hover:text-emerald-400">
            <Mail size={20} className="text-emerald-400" />
            <span>your-email@example.com</span>
          </a>
          <a href="https://www.linkedin.com/in/rahmat-opoola-ba6801263/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-slate-900 border border-slate-800 hover:border-emerald-500/50 px-6 py-3 rounded-xl transition text-slate-300 hover:text-emerald-400">
            <Linkedin size={20} className="text-emerald-400" />
            <span>LinkedIn Profile</span>
          </a>
          <a href="https://github.com/Ayomi-Rahmat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-slate-900 border border-slate-800 hover:border-emerald-500/50 px-6 py-3 rounded-xl transition text-slate-300 hover:text-emerald-400">
            <Github size={20} className="text-emerald-400" />
            <span>GitHub Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
}
