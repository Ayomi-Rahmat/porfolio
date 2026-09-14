import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 text-slate-100 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#" className="font-bold text-xl tracking-wider text-emerald-400">
          Ayomi Rahmat
        </a>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-emerald-400 transition">About</a>
          <a href="#skills" className="hover:text-emerald-400 transition">What I Do</a>
          <a href="#projects" className="hover:text-emerald-400 transition">Projects</a>
          <a href="#contact" className="hover:text-emerald-400 transition">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Ayomi-Rahmat" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-emerald-400 transition">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/rahmat-opoola-ba6801263/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-emerald-400 transition">
            <Linkedin size={20} />
          </a>
          <a href="mailto:your-email@example.com" className="text-slate-300 hover:text-emerald-400 transition">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}
