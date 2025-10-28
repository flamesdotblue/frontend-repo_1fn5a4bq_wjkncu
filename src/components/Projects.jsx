import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Animated Portfolio',
    desc: 'A responsive portfolio with techy hero animations, micro-interactions, and dark/light mode.',
    link: '#',
    tags: ['React', 'Tailwind', 'Framer Motion', 'Tech Animations'],
  },
  {
    title: 'Playful UI Kit',
    desc: 'A component library with accessible motion and delightful details.',
    link: '#',
    tags: ['Design System', 'a11y', 'Theming'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-neutral-900 dark:text-white"
        >
          Projects
        </motion.h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
                <ExternalLink className="text-neutral-500 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white transition-colors" size={18} />
              </div>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-2.5 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
