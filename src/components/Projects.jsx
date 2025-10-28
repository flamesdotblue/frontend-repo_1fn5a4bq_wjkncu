import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.08 } }),
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
      className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-1 text-sm text-white/70">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t, i) => (
            <span key={i} className="text-xs text-emerald-300/90 border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 rounded-full">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200"
            >
              <ExternalLink className="h-4 w-4" /> Live
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200"
            >
              <Github className="h-4 w-4" /> Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="relative w-full py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 flex items-end justify-between"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Projects</h2>
            <p className="mt-2 text-white/70">Highlights of work across the stack, with links to explore further.</p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
