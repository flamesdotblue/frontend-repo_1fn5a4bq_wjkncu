import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero3D = ({ name, tagline, ctaText, onCTAClick }) => {
  return (
    <section id="home" className="relative min-h-[88vh] w-full flex items-center justify-center overflow-hidden text-slate-900 dark:text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/0UnIIJngGgvQNHiD/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient accents - non-blocking interactions */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-pink-500/30 blur-3xl" />
        <div className="absolute top-24 -right-10 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-60 w-60 rounded-full bg-emerald-400/25 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/70 dark:from-slate-950/70 dark:via-slate-950/30 dark:to-slate-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Asymmetric layout: title block takes more width */}
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 backdrop-blur dark:border-white/10 dark:bg-white/5"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_20px_4px_rgba(16,185,129,0.35)]" />
              <span className="text-xs text-slate-700 dark:text-white/80">Interactive • Playful • Vibrant</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
            >
              {name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              className="mt-4 text-lg md:text-xl text-slate-700 dark:text-white/80 max-w-2xl"
            >
              {tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
              className="mt-8 flex items-center gap-4"
            >
              <button
                onClick={onCTAClick}
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-medium text-white shadow-lg shadow-emerald-500/30 transition-transform will-change-transform hover:scale-[1.02] active:scale-[0.99] focus:outline-none dark:text-slate-900"
              >
                {ctaText}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              {/* playful micro-interaction chip */}
              <motion.div
                whileHover={{ rotate: -2, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="hidden sm:inline-flex items-center gap-2 rounded-full border border-pink-300/60 bg-pink-500/10 px-4 py-2 text-pink-700 dark:border-pink-300/30 dark:text-pink-300"
              >
                <span className="h-2 w-2 rounded-full bg-pink-500 shadow-[0_0_18px_4px_rgba(236,72,153,0.25)]" />
                <span className="text-xs">Now with 3D arrows</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Asymmetric side badge stack */}
          <div className="md:col-span-5 flex md:justify-end">
            <div className="flex md:flex-col gap-3">
              <motion.div whileHover={{ y: -3 }} className="rounded-xl border border-violet-300/60 bg-white/70 px-4 py-3 text-sm backdrop-blur dark:border-violet-300/20 dark:bg-white/10">
                <span className="font-semibold text-violet-700 dark:text-violet-300">Front-end</span>
                <p className="text-slate-700 dark:text-white/70">React • Tailwind • Framer Motion</p>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} className="rounded-xl border border-emerald-300/60 bg-white/70 px-4 py-3 text-sm backdrop-blur dark:border-emerald-300/20 dark:bg-white/10">
                <span className="font-semibold text-emerald-700 dark:text-emerald-300">Back-end</span>
                <p className="text-slate-700 dark:text-white/70">Node • TypeScript • PostgreSQL</p>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} className="rounded-xl border border-amber-300/60 bg-white/70 px-4 py-3 text-sm backdrop-blur dark:border-amber-300/20 dark:bg-white/10">
                <span className="font-semibold text-amber-700 dark:text-amber-300">Cloud</span>
                <p className="text-slate-700 dark:text-white/70">AWS • CI/CD • Observability</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
