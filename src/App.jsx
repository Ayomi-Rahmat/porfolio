import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './common/../components/Contact'; // or './components/Contact'

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <footer className="py-6 text-center text-xs text-slate-500 border-t border-slate-900">
        © {new Date().getFullYear()} Rahmat Opoola. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}