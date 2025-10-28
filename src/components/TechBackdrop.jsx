import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Cloud, Server } from 'lucide-react';

const icons = [
  { Icon: Code2, size: 36, x: '10%', y: '20%', delay: 0 },
  { Icon: Cpu, size: 44, x: '70%', y: '25%', delay: 0.2 },
  { Icon: Database, size: 40, x: '20%', y: '70%', delay: 0.4 },
  { Icon: Cloud, size: 42, x: '80%', y: '65%', delay: 0.1 },
  { Icon: Server, size: 38, x: '45%', y: '50%', delay: 0.3 },
];

const floatTransition = {
  duration: 6,
  repeat: Infinity,
  repeatType: 'mirror',
  ease: 'easeInOut',
};

const TechBackdrop = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950" />

      <div className="absolute inset-0 opacity-60 dark:opacity-30" style={{
        backgroundImage:
          'radial-gradient(circle at 25px 25px, rgba(16,185,129,0.12) 2px, transparent 0), radial-gradient(circle at 75px 75px, rgba(16,185,129,0.12) 2px, transparent 0)',
        backgroundSize: '100px 100px',
      }} />

      {icons.map(({ Icon, size, x, y, delay }, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, opacity: 0.45 }}
          animate={{ y: -14 }}
          transition={{ ...floatTransition, delay }}
          className="absolute"
          style={{ left: x, top: y }}
        >
          <Icon
            size={size}
            className="text-emerald-600/50 dark:text-emerald-300/60 drop-shadow-sm"
          />
        </motion.div>
      ))}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white dark:from-transparent dark:via-slate-950/20 dark:to-slate-950" />
    </div>
  );
};

export default TechBackdrop;