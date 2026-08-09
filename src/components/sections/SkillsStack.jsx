import React from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal } from 'lucide-react';
import { fadeIn, staggerContainer, viewportOnce } from '../../lib/motion';
import { useLanguage } from '../../context/LanguageContext';

const stack = [
  {
    category: 'AI & LLMs · Production',
    skills: ['RAG', 'LangChain', 'LangGraph', 'OpenAI API', 'Groq', 'Gemini', 'Prompt Engineering', 'Multi-Provider Failover'],
  },
  {
    category: 'Security & Verification',
    skills: ['Identity Verification', 'Security Testing', 'Injection Protection', 'Session Isolation', 'Deterministic Logic', 'Zero-Trust Design'],
  },
  {
    category: 'Backend · FastAPI',
    skills: ['Python', 'FastAPI', 'Pydantic', 'PostgreSQL', 'REST APIs', 'Async/Await', 'Rate Limiting'],
  },
  {
    category: 'Automation & APIs',
    skills: ['n8n', 'Google APIs', 'Gmail API', 'OAuth 2.0', 'Webhooks', 'API Integration'],
  },
  {
    category: 'Infrastructure · DevOps',
    skills: ['Docker', 'Git', 'Linux', 'CI/CD', 'Vercel', 'Render', 'AWS Basics'],
  },
  {
    category: 'Frontend · TypeScript',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion', 'RTL Arabic'],
  },
];

const SkillsStack = () => {
  const { t } = useLanguage();

  return (
    <section id="stack" className="cv-section relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeIn('up', 0)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <SlidersHorizontal className="w-5 h-5 text-[var(--accent)]" strokeWidth={2.5} />
            <span className="text-sm font-mono text-[var(--accent)] tracking-wider uppercase">
              {t('skills.kicker')}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4">
            {t('skills.titleBefore')}{' '}
            <span className="accent-mark">{t('skills.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {stack.map((group, idx) => (
            <motion.div
              key={group.category}
              variants={fadeIn('up', idx * 0.05)}
              className="group p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--accent)]/30 transition-all duration-300"
            >
              <h3 className="text-sm font-mono text-[var(--accent)] mb-4 tracking-wider">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-[var(--bg-primary)] text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsStack;
