import React from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal } from 'lucide-react';
import { fadeIn, staggerContainer, viewportOnce } from '../../lib/motion';
import { useLanguage } from '../../context/LanguageContext';

const stack = [
  {
    category: 'Agentic AI & LLM Systems',
    skills: ['LangGraph (Cyclic Graphs)', 'Production RAG', 'Tool Calling Nodes', 'LiteLLM', 'Redis Checkpointing', 'Groq & Gemini Fallback', 'Whisper & Vision Models'],
  },
  {
    category: 'Backend & Distributed Systems',
    skills: ['Python (AsyncIO)', 'FastAPI', 'WebSockets (Full-Duplex)', 'Celery Task Queues', 'Redis (Pub/Sub & Caching)', 'Pydantic V2', 'SQLAlchemy / Alembic', 'RESTful APIs'],
  },
  {
    category: 'AI Alignment & Security',
    skills: ['Adversarial Red-Teaming', 'Prompt Injection Mitigation', 'Deterministic Schemas', 'PII Anonymization', 'Zero-Trust Isolation', 'Output Guardrails'],
  },
  {
    category: 'Cloud, DevOps & Infra',
    skills: ['Docker & Multi-Stage Builds', 'Kubernetes (EKS Manifests)', 'Terraform (IaC)', 'GitHub Actions CI/CD', 'Prometheus & Observability', 'Linux / Bash', 'AWS (EC2, S3)'],
  },
  {
    category: 'Databases & Storage',
    skills: ['PostgreSQL (ACID)', 'Redis AsyncSaver', 'Vector Embeddings (FAISS / PGVector)', 'Alembic Migrations', 'Connection Pooling'],
  },
  {
    category: 'Frontend & Real-Time Streaming',
    skills: ['React 18', 'TypeScript', 'Next.js', 'Tailwind CSS', 'WebSockets Client', 'Framer Motion', 'RTL Arabic Support'],
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
