import React from 'react';
import { projects } from '../data/projectsData';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900 text-slate-100 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-3">Featured Projects</h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            A showcase of full-stack web applications, e-commerce architectures, and frontend interfaces I've built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden flex flex-col justify-between hover:border-emerald-500/50 transition group">
              <div className="p-6">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">{project.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-emerald-400 transition">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="bg-slate-900 text-slate-300 text-xs px-2.5 py-1 rounded border border-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-6 py-4 bg-slate-900/50 border-t border-slate-800 flex items-center justify-between">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-emerald-400 transition">
                  <Github size={16} /> Code
                </a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:underline">
                  <ExternalLink size={16} /> Live Preview
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
