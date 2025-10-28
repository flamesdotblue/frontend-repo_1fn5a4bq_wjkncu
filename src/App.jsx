import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Twitter, Moon, Sun } from 'lucide-react';
import Hero3D from './components/Hero3D';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const data = {
  name: 'Harshita Pathakamuri',
  tagline:
    'Full-Stack Software Engineer — building scalable microservices and polished user experiences with Node.js, TypeScript, PostgreSQL, and React.',
  bio:
    'High-impact Full-Stack Software Engineer with 1.5 years of professional experience in developing scalable microservices and user-facing applications. Specialized in HRMS features (Leaves, Attendance, Payroll) and modern frontend experiences. Focused on high-performance, maintainable code and scalable system architecture.',
  education: [
    {
      title: 'Bachelor of Technology · Computer Science and Engineering',
      institution: 'Rishi MS Institute of Engineering and Technology for Women',
      year: 'Jul 2019 – Jul 2023',
    },
  ],
  experience: [
    {
      role: 'Software Engineer',
      company: 'BlueSpire Digital Private Limited · Hyderabad',
      period: 'Oct 2024 – Present',
      summary:
        'Designed and implemented Leaves and Attendance microservices in an HRMS app using Node.js, TypeScript, and PostgreSQL; contributed to UI for leave requests, attendance, and payroll with React and Tailwind; involved in architecture for scalability and high availability.',
    },
    {
      role: 'Software Engineer Intern',
      company: 'IT Monks Solutions · Hyderabad',
      period: 'Jan 2024 – Jul 2024',
      summary:
        'Led a visual refresh and new service pages for the organization’s website with React and Tailwind; ensured responsiveness and cross-browser compatibility; applied component-based architecture to deliver functional, aesthetic features.',
    },
  ],
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'Tailwind CSS',
    'HTML/CSS',
    'SASS/SCSS',
    'Node.js',
    'Express.js',
    'REST',
    'GraphQL',
    'JWT',
    'WebSockets',
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Git',
    'GitHub',
    'Bitbucket',
    'AWS Amplify',
  ],
  socials: {
    linkedin: 'https://www.linkedin.com/in/harshita-pathakamuri',
    github: 'https://github.com/Harshi01-hp',
    twitter: '',
    website: 'https://harshita-pathakamuri.vercel.app',
  },
  email: 'harshitapathakamuri381@gmail.com',
  projects: [
    {
      id: 'citizens-precheckup',
      title: 'Citizens Precheckup (Client: Citizens Bank)',
      description:
        'Single-page appointment scheduling app built with React and TypeScript. Search/filter nearby branches and view banker availability to streamline bookings.',
      image:
        'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1600&auto=format&fit=crop',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'SPA'],
      live: '#',
      github: '#',
    },
    {
      id: 'hrms-platform',
      title: 'HRMS — Leaves, Attendance, Payroll',
      description:
        'Microservices for HRMS: backend for Timesheets and Clock-in/Clock-out in Node.js/TypeScript, schema design for Payroll in PostgreSQL, and UI for Leaves in React.',
      image:
        'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
      tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'React'],
      live: '#',
      github: '#',
    },
    {
      id: 'ims-website',
      title: 'IMS Organization Website',
      description:
        'Implemented secure Login/Registration, designed the homepage, and built service pages (Mobile App Development, Healthcare) with React for a high-conversion UX.',
      image:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop',
      tags: ['React', 'JavaScript', 'Responsive Design'],
      live: '#',
      github: '#',
    },
  ],
  styleSuggestions: [
    {
      name: 'Minimal',
      desc: 'Clean, spacious layouts with neutral tones and subtle accents.',
    },
    {
      name: 'Creative',
      desc: 'Vibrant color accents, playful micro-interactions, and asymmetry.',
    },
    {
      name: 'Tech-oriented',
      desc: 'Dark UI, neon accents, crisp typography, and futuristic touches.',
    },
  ],
};

const Header = ({ theme, toggleTheme }) => (
  <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200 dark:bg-slate-950/60 dark:border-white/10">
    <div className="container mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#home" className="text-slate-900 font-semibold tracking-tight dark:text-white">{data.name}</a>
      <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-700 dark:text-white/80">
        <a href="#about" className="hover:text-slate-900 dark:hover:text-white">About</a>
        <a href="#projects" className="hover:text-slate-900 dark:hover:text-white">Projects</a>
        <a href="#contact" className="hover:text-slate-900 dark:hover:text-white">Contact</a>
        <div className="ml-2 flex items-center gap-3">
          {data.socials.github && (
            <a href={data.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-slate-900 dark:hover:text-white">
              <Github className="h-5 w-5" />
            </a>
          )}
          {data.socials.linkedin && (
            <a href={data.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-slate-900 dark:hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {data.socials.twitter && (
            <a href={data.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-slate-900 dark:hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
          )}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-2 inline-flex items-center justify-center rounded-full border border-slate-300 bg-white p-2 text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </nav>
    </div>
  </header>
);

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Initialize from system preference or stored value
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleHireMe = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white scroll-smooth">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <Hero3D
        name={data.name}
        tagline={data.tagline}
        ctaText="Get in touch"
        onCTAClick={handleHireMe}
      />

      <About
        bio={data.bio}
        education={data.education}
        experience={data.experience}
        skills={data.skills}
      />

      <Projects projects={data.projects} />

      <Contact email={data.email} socials={data.socials} />

      <section className="py-12 bg-slate-50 border-t border-slate-200 dark:bg-slate-950 dark:border-white/10">
        <div className="container mx-auto px-6">
          <h3 className="text-lg font-semibold">Style suggestions</h3>
          <ul className="mt-3 grid gap-3 sm:grid-cols-3">
            {data.styleSuggestions.map((s) => (
              <li key={s.name} className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/80">
                <span className="font-medium text-slate-900 dark:text-white">{s.name}:</span> {s.desc}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-slate-500 dark:text-white/50">Tip: Update the content at the top of the page data object to customize your portfolio quickly.</p>
        </div>
      </section>

      <footer className="py-8 bg-white border-t border-slate-200 text-center text-slate-600 dark:bg-slate-950/90 dark:border-white/10 dark:text-white/60">
        <p>© {new Date().getFullYear()} {data.name}. Built with care and curiosity.</p>
      </footer>
    </div>
  );
}

export default App;
