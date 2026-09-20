import { Mail } from 'lucide-react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projectsData';

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
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  Code
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