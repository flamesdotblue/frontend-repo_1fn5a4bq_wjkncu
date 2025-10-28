import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-neutral-900 dark:text-white"
        >
          Contact
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-6 flex items-center justify-between gap-6"
        >
          <p className="text-neutral-700 dark:text-neutral-300">
            Have a project in mind or just want to say hi? I’d love to hear from you.
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-md bg-yellow-400 text-neutral-900 font-medium px-4 py-2 hover:shadow-md transition-shadow"
          >
            <Mail size={16} /> Email me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
