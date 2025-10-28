import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import TechBackdrop from './TechBackdrop';

const Hero3D = ({ name, tagline, ctaText, onCTAClick }) => {
  return (
    <section id="home" className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden text-slate-900 dark:text-white">
      <TechBackdrop />

      <div className="relative z-10 container mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 backdrop-blur dark:border-white/10 dark:bg-white/5"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_20px_4px_rgba(16,185,129,0.35)]" />
          <span className="text-xs text-slate-600 dark:text-white/80">Tech • Portfolio • Interactive</span>
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
          className="mt-4 text-lg md:text-xl text-slate-700 dark:text-white/80 max-w-2xl mx-auto"
        >
          {tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="mt-8 flex justify-center"
        >
          <button
            onClick={onCTAClick}
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-medium text-white shadow-lg shadow-emerald-500/30 transition-transform hover:scale-[1.02] focus:outline-none dark:text-slate-900"
          >
            {ctaText}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;