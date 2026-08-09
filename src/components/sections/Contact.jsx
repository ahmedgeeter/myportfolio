import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { fadeIn, viewportOnce } from '../../lib/motion';
import { useLanguage } from '../../context/LanguageContext';

const Contact = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="contact" className="cv-section relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <motion.div
            variants={fadeIn('up', 0)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-[var(--accent)]" strokeWidth={2.5} />
                <span className="text-sm font-mono text-[var(--accent)] tracking-wider uppercase">
                  {t('contact.kicker')}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight">
                {t('contact.titleBefore')}{' '}
                <span className="text-gradient">{t('contact.titleHighlight')}</span>
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-md">
                {t('contact.subtitle')}
              </p>
            </div>

            {/* Contact Cards - Balanced Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <a
                href="mailto:ahmedekramy303@gmail.com"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-[var(--bg-secondary)]/60 border border-[var(--border)] hover:border-[var(--accent)]/40 hover:bg-[var(--bg-secondary)] transition-all duration-300 sm:col-span-2"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--brand)]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[var(--text-muted)] uppercase tracking-wide mb-1">Email</p>
                  <p className="font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors truncate">
                    ahmedekramy303@gmail.com
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all flex-shrink-0" />
              </a>

              {/* Phone */}
              <a
                href="tel:+201069334256"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-[var(--bg-secondary)]/60 border border-[var(--border)] hover:border-[var(--accent)]/40 hover:bg-[var(--bg-secondary)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--brand)]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[var(--text-muted)] uppercase tracking-wide mb-1">Phone</p>
                  <p className="font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    +20 106 933 4256
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ahmed-ai-dev"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-[var(--bg-secondary)]/60 border border-[var(--border)] hover:border-[var(--accent)]/40 hover:bg-[var(--bg-secondary)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--brand)]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[var(--text-muted)] uppercase tracking-wide mb-1">LinkedIn</p>
                  <p className="font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors truncate">
                    /in/ahmed-ai-dev
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] flex-shrink-0" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/ahmedgeeter"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-[var(--bg-secondary)]/60 border border-[var(--border)] hover:border-[var(--accent)]/40 hover:bg-[var(--bg-secondary)] transition-all duration-300 sm:col-span-2"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--brand)]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[var(--text-muted)] uppercase tracking-wide mb-1">GitHub</p>
                  <p className="font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    @ahmedgeeter
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] flex-shrink-0" />
              </a>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            variants={fadeIn('up', 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--text-secondary)]">
                    {t('contact.formName')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] focus:border-[var(--accent)]/50 focus:outline-none transition-all"
                    placeholder={t('contact.formNamePh')}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--text-secondary)]">
                    {t('contact.formEmail')}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] focus:border-[var(--accent)]/50 focus:outline-none transition-all"
                    placeholder={t('contact.formEmailPh')}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--text-secondary)]">
                  {t('contact.formMessage')}
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] focus:border-[var(--accent)]/50 focus:outline-none transition-all resize-none"
                  placeholder={t('contact.formMessagePh')}
                />
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary rounded-xl py-4 font-semibold text-white flex items-center justify-center gap-2"
              >
                <span>{t('contact.submit')}</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
