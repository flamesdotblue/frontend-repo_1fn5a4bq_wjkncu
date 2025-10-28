import { motion } from 'framer-motion';
import TechBackdrop from './TechBackdrop';

export default function Hero3D() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Tech-themed animated background (replaces spherical Spline) */}
      <div className="absolute inset-0">
        <TechBackdrop />
      </div>

      {/* Accent gradient overlays - non-blocking */}
      <div className="pointer-events-none absolute inset-0">
        {/* Light theme subtle glows / Dark mode deeper glows */}
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-yellow-300/30 dark:bg-yellow-400/20 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-indigo-300/30 dark:bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/70 to-transparent dark:from-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left: Title + CTA */}
          <div className="col-span-12 md:col-span-7 lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-neutral-900/60 backdrop-blur px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-200 ring-1 ring-neutral-200/70 dark:ring-neutral-700/60">
                <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
                Light + Dark • System-aware theme
              </span>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                Harshita Pathakamuri
              </h1>
              <p className="mt-3 text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl">
                Frontend developer crafting modern, animated experiences with a love for techy visuals, motion, and delightful micro‑interactions.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-md bg-yellow-400 text-neutral-900 font-medium px-5 py-2.5 shadow-sm hover:shadow-md transition-shadow"
                >
                  View Projects
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/60 backdrop-blur px-5 py-2.5 text-neutral-800 dark:text-neutral-200"
                >
                  Get in Touch
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right: playful badges stack */}
          <div className="col-span-12 md:col-span-5 lg:col-span-5">
            <div className="flex flex-col gap-3 sm:gap-4 pt-6 md:pt-12">
              {[
                { label: 'React + Vite', color: 'bg-white/80 dark:bg-neutral-900/60 text-neutral-800 dark:text-neutral-100 ring-1 ring-neutral-200/80 dark:ring-neutral-700/60' },
                { label: 'Tailwind CSS', color: 'bg-cyan-500/15 text-cyan-800 dark:text-cyan-100 ring-1 ring-cyan-300/30' },
                { label: 'Framer Motion', color: 'bg-pink-500/15 text-pink-800 dark:text-pink-100 ring-1 ring-pink-300/30' },
                { label: 'Tech Animations', color: 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-100 ring-1 ring-emerald-300/30' },
              ].map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 * i }}
                  whileHover={{ x: 4 }}
                  className={`inline-flex w-max items-center gap-2 rounded-full px-4 py-2 text-sm backdrop-blur ${b.color}`}
                >
                  <span className="h-2 w-2 rounded-full bg-current/70" />
                  {b.label}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
