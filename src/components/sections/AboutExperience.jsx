import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import { fadeIn, viewportOnce } from '../../lib/motion';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../lib/utils';

const experience = [
  {
    dates: '2023 — Present',
    org: 'Freelance',
    title: 'AI Engineer (RAG & Applied AI)',
    desc: 'Building production RAG systems, LLM backends with FastAPI/LangChain, and AI automation. Delivered multilingual document chat systems and ML APIs with 95%+ accuracy.',
  },
  {
    dates: 'May 2025 — Sep 2025',
    org: 'Springer Capital',
    title: 'AI Backend Engineer',
    desc: 'Built FastAPI services and Python automation for AI trading workflows. Containerized deployments with Docker, improving reliability in Agile sprints.',
  },
  {
    dates: 'Dec 2024 — Apr 2025',
    org: 'Outlier / Alignerr',
    title: 'AI Model Alignment Specialist (RLHF)',
    desc: 'Evaluated LLM code generation (Python/SQL) through RLHF review and red-teaming. Designed adversarial test cases to surface reasoning failures.',
  },
  {
    dates: 'Aug 2023 — Aug 2024',
    org: 'Hamza Emam Company',
    title: 'IT Specialist',
    desc: 'Provided technical support and maintained reliable IT operations for enterprise infrastructure.',
  },
];

const AboutExperience = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className="cv-section relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - About */}
          <motion.div
            variants={fadeIn('up', 0)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <BadgeCheck className="w-5 h-5 text-[var(--accent)]" strokeWidth={2.5} />
              <span className="text-sm font-mono text-[var(--accent)] tracking-wider uppercase">
                {t('about.kicker')}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight">
              {t('about.headline')}
            </h2>
            
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              {t('about.intro')}
            </p>
            
            <div className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
              <p className="text-[var(--text-secondary)] italic">
                "{t('about.focusLine')}"
              </p>
            </div>
          </motion.div>

          {/* Right - Experience */}
          <motion.div
            variants={fadeIn('up', 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-6"
          >
            <h3 className="text-xl font-display font-semibold text-[var(--text-primary)]">
              {t('about.experience')}
            </h3>
            
            <div className="space-y-0">
              {experience.map((exp, idx) => (
                <motion.div
                  key={`${exp.org}-${exp.title}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: idx * 0.1 }}
                  className={cn(
                    'group relative pl-8 pb-8',
                    idx !== experience.length - 1 && 'border-l border-[var(--border)]'
                  )}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent)] group-hover:scale-110 transition-transform" />
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="font-mono text-[var(--accent)]">{exp.dates}</span>
                      <span className="text-[var(--text-muted)]">•</span>
                      <span className="font-medium text-[var(--text-primary)]">{exp.org}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-[var(--text-primary)]">
                      {exp.title}
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {exp.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutExperience;
