import { Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/85 backdrop-blur-md border-b border-slate-800 text-slate-100 px-6 py-4">
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
          {/* GitHub Icon */}
          <a href="https://github.com/Ayomi-Rahmat" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-emerald-400 transition" aria-label="GitHub">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          {/* LinkedIn Icon */}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-emerald-400 transition" aria-label="LinkedIn">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.38-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          {/* Mail Icon */}
          <a href="mailto:your-email@example.com" className="text-slate-300 hover:text-emerald-400 transition" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}