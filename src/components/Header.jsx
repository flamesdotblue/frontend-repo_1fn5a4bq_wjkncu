import { useEffect, useState } from 'react';
import { Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';

export default function Header({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors ${
      scrolled ? 'backdrop-blur-md bg-white/60 dark:bg-neutral-900/60 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-neutral-900 dark:text-white">
          Harshita Pathakamuri
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 transition-colors">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="#contact" className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 transition-colors">
            <Mail size={18} />
          </a>
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="ml-2 inline-flex items-center justify-center w-9 h-9 rounded-md border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200 transition-colors"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
}
