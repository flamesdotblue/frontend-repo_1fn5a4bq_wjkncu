import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-neutral-900 dark:text-white"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-neutral-700 dark:text-neutral-300 max-w-3xl"
        >
          I’m a frontend developer focused on creating playful, performant user interfaces. My work blends strong visual design, animation, and accessibility to build experiences that feel alive and inviting.
        </motion.p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {[
            { title: 'Strengths', text: 'Design systems, accessible motion, responsive layouts, 3D integration.' },
            { title: 'Toolbox', text: 'React, Vite, Tailwind, Framer Motion, Spline, TypeScript.' },
          ].map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6"
            >
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{card.title}</h3>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
