import React, { useState } from 'react';
import { Linkedin, Github, Twitter, Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.08 } }),
};

const Contact = ({ email, socials }) => {
  const [form, setForm] = useState({ name: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${form.subject} — from ${form.name}`);
    const body = encodeURIComponent(form.message);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative w-full py-20 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold">Get in touch</h2>
          <p className="mt-2 text-white/70">Let's connect for opportunities, collaborations, or a friendly chat.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <h3 className="text-white font-semibold mb-3">Reach me on</h3>
            <div className="space-y-3">
              <a href={`mailto:${email}`} className="flex items-center gap-3 text-white/80 hover:text-white">
                <Mail className="h-5 w-5 text-emerald-400" /> {email}
              </a>
              {socials.linkedin && (
                <a href={socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white">
                  <Linkedin className="h-5 w-5 text-emerald-400" /> LinkedIn
                </a>
              )}
              {socials.github && (
                <a href={socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white">
                  <Github className="h-5 w-5 text-emerald-400" /> GitHub
                </a>
              )}
              {socials.twitter && (
                <a href={socials.twitter} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white">
                  <Twitter className="h-5 w-5 text-emerald-400" /> Twitter / X
                </a>
              )}
            </div>

            <div className="mt-6">
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-white/70">Subject</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  placeholder="What's it about?"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-white/70">Message</label>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                placeholder="Write your message..."
              />
            </div>
            <div className="mt-4">
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 font-medium text-slate-900 shadow-lg shadow-emerald-500/30 hover:scale-[1.01] active:scale-100 transition">
                <Send className="h-4 w-4" /> Send
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
