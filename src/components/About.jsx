import React from 'react';
import { Award, Code, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.08 } }),
};

const SectionCard = ({ title, children, index = 0 }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    custom={index}
    className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
  >
    <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
    <div className="text-sm text-white/80 space-y-2">{children}</div>
  </motion.div>
);

const SkillBadge = ({ label }) => (
  <span className="inline-flex items-center rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-3 py-1 text-xs font-medium">
    {label}
  </span>
);

const About = ({ bio, education, experience, skills }) => {
  return (
    <section id="about" className="relative w-full py-20 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold">About</h2>
          <p className="mt-2 text-white/70 max-w-2xl">{bio}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <SectionCard index={0} title={<span className="inline-flex items-center gap-2"><BookOpen className="h-5 w-5 text-emerald-400" /> Education</span>}>
            {education.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <div>
                  <p className="font-medium text-white">{item.title}</p>
                  <p className="text-white/70">{item.institution} • {item.year}</p>
                </div>
              </div>
            ))}
          </SectionCard>

          <SectionCard index={1} title={<span className="inline-flex items-center gap-2"><Award className="h-5 w-5 text-emerald-400" /> Experience</span>}>
            {experience.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <div>
                  <p className="font-medium text-white">{item.role}</p>
                  <p className="text-white/70">{item.company} • {item.period}</p>
                  <p className="text-white/70">{item.summary}</p>
                </div>
              </div>
            ))}
          </SectionCard>

          <SectionCard index={2} title={<span className="inline-flex items-center gap-2"><Code className="h-5 w-5 text-emerald-400" /> Skills</span>}>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <SkillBadge key={i} label={s} />
              ))}
            </div>
            <p className="mt-3 text-xs text-white/60">Includes both technical and people skills. Tailor this list to reflect your strengths.</p>
          </SectionCard>
        </div>
      </div>
    </section>
  );
};

export default About;
