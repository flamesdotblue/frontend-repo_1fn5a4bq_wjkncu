import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero3D from './components/Hero3D';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function useTheme() {
  const getSystem = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'light' || saved === 'dark' ? saved : getSystem();
    
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Update when system preference changes
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      const saved = localStorage.getItem('theme');
      if (!saved) setTheme(media.matches ? 'dark' : 'light');
    };
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  return { theme, toggleTheme };
}

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero3D />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-neutral-500 dark:text-neutral-400">
        © {new Date().getFullYear()} Harshita Pathakamuri. All rights reserved.
      </footer>
    </div>
  );
}
