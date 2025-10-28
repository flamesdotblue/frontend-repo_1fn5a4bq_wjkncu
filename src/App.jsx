import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Hero3D from './components/Hero3D';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const data = {
  name: 'Your Name',
  tagline: 'Engineer • Learner • Builder — crafting thoughtful digital experiences with a focus on simplicity, performance, and delightful interactions.',
  bio: 'I am a curious engineer passionate about learning, personal growth, and building useful things. I enjoy working across the stack, prototyping quickly, and shipping thoughtfully designed products.',
  education: [
    { title: 'B.S. in Computer Science', institution: 'Your University', year: '2019 – 2023' },
    { title: 'Exchange Program (HCI)', institution: 'Partner University', year: '2022' },
  ],
  experience: [
    { role: 'Software Engineer', company: 'Company A', period: '2023 – Present', summary: 'Building scalable services and polished UIs in a cross-functional team.' },
    { role: 'Frontend Developer (Intern)', company: 'Startup B', period: 'Summer 2022', summary: 'Implemented design system components and performance optimizations.' },
  ],
  skills: ['React', 'TypeScript', 'Node.js', 'Python', 'FastAPI', 'MongoDB', 'Tailwind CSS', 'CI/CD', 'Communication', 'Leadership', 'Mentoring'],
  socials: {
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/',
    twitter: 'https://twitter.com/',
  },
  email: 'you@example.com',
  projects: [
    {
      id: 'p1',
      title: 'Interactive Portfolio',
      description: 'A 3D-enhanced personal site showcasing projects, writing, and contact in a cohesive experience.',
      image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop',
      tags: ['React', 'Spline', 'Tailwind'],
      live: '#',
      github: '#',
    },
    {
      id: 'p2',
      title: 'API Starter Kit',
      description: 'Production-ready backend template with auth, testing, and documentation.',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
      tags: ['FastAPI', 'MongoDB', 'Docker'],
      live: '#',
      github: '#',
    },
    {
      id: 'p3',
      title: 'Realtime Collaboration Tool',
      description: 'Lightweight, browser-based canvas with presence, chat, and sync.',
      image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1200&auto=format&fit=crop',
      tags: ['WebSockets', 'CRDT', 'TypeScript'],
      live: '#',
      github: '#',
    },
  ],
  styleSuggestions: [
    {
      name: 'Minimal',
      desc: 'Clean, spacious layouts with neutral tones and subtle accents.'
    },
    {
      name: 'Creative',
      desc: 'Vibrant color accents, playful micro-interactions, and asymmetry.'
    },
    {
      name: 'Tech-oriented',
      desc: 'Dark UI, neon accents, crisp typography, and futuristic touches.'
    }
  ]
};

const Header = () => (
  <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/60 border-b border-white/10">
    <div className="container mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#home" className="text-white font-semibold tracking-tight">{data.name}</a>
      <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
        <a href="#about" className="hover:text-white">About</a>
        <a href="#projects" className="hover:text-white">Projects</a>
        <a href="#contact" className="hover:text-white">Contact</a>
        <div className="ml-2 flex items-center gap-3">
          <a href={data.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white">
            <Github className="h-5 w-5" />
          </a>
          <a href={data.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href={data.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-white">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </div>
  </header>
);

function App() {
  const handleHireMe = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white scroll-smooth">
      <Header />

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

      <section className="py-12 bg-slate-950 border-t border-white/10">
        <div className="container mx-auto px-6">
          <h3 className="text-lg font-semibold">Style suggestions</h3>
          <ul className="mt-3 grid gap-3 sm:grid-cols-3">
            {data.styleSuggestions.map((s) => (
              <li key={s.name} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                <span className="font-medium text-white">{s.name}:</span> {s.desc}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-white/50">Tip: Update the content at the top of the page data object to customize your portfolio quickly.</p>
        </div>
      </section>

      <footer className="py-8 bg-slate-950/90 border-t border-white/10 text-center text-white/60">
        <p>© {new Date().getFullYear()} {data.name}. Built with care and curiosity.</p>
      </footer>
    </div>
  );
}

export default App;
