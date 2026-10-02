import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Zap, GitCommit, Users, BookOpen, Mic } from 'lucide-react';
import { fadeIn, viewportOnce } from '../../lib/motion';
import { useLanguage } from '../../context/LanguageContext';

const achievements = [
  {
    icon: Zap,
    title: 'Streaming Latency',
    value: '<300ms',
    desc: 'Full-duplex WebSocket responsiveness',
    color: 'var(--accent)',
  },
  {
    icon: Trophy,
    title: 'Production Architectures',
    value: '5+',
    desc: 'Reference AI systems deployed',
    color: 'var(--brand)',
  },
  {
    icon: GitCommit,
    title: 'Evaluated Benchmarks',
    value: '1,000+',
    desc: 'RLHF code & reasoning trajectories',
    color: 'var(--accent)',
  },
  {
    icon: Users,
    title: 'Failover Reliability',
    value: '99.9%',
    desc: 'Multi-provider routing across Groq & Gemini',
    color: 'var(--brand)',
  },
];

const certifications = [
  { name: 'Kali Linux Essentials', issuer: 'Linux Professional Institute', year: '2024' },
  { name: 'Ethics in the Age of Generative AI', issuer: 'IBM / Educational', year: '2024' },
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco Networking Academy', year: '2024' },
  { name: 'Deep Learning: Getting Started', issuer: 'LinkedIn Learning', year: '2023' },
];

const highlights = [
  { icon: BookOpen, text: 'Graduated B.Sc. in Computer Science (Mansoura University) focusing on Distributed Systems & AI' },
  { icon: Star, text: 'Architected stateful LangGraph agentic workflows with Redis Checkpointing' },
  { icon: Award, text: 'Designed audited 5-layer prompt injection defense & deterministic Pydantic guardrails' },
  { icon: Zap, text: 'Engineered asynchronous Celery & Redis queuing pipelines cutting API response times by 45%' },
];

export default function Achievements() {
  const { t } = useLanguage();

  return (
    <section id="achievements" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeIn('up', 0)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-[var(--accent)] tracking-wider uppercase mb-4 block">
            Track Record
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4">
            Achievements & <span className="text-gradient-animated">Impact</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Numbers that speak louder than words. Real results delivered to real clients.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeIn('up', index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="glass-panel rounded-2xl p-6 text-center group hover:border-[var(--accent)]/50 transition-all duration-300"
            >
              <div 
                className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ background: `${item.color}15` }}
              >
                <item.icon className="w-6 h-6" style={{ color: item.color }} />
              </div>
              <div className="text-3xl sm:text-4xl font-display font-bold text-[var(--text-primary)] mb-1">
                {item.value}
              </div>
              <div className="text-sm font-medium text-[var(--text-primary)] mb-1">
                {item.title}
              </div>
              <div className="text-xs text-[var(--text-muted)]">
                {item.desc}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Highlights */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <motion.div
            variants={fadeIn('up', 0)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="glass-panel rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-3">
              <Award className="w-5 h-5 text-[var(--accent)]" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-xl bg-[var(--bg-secondary)]/50 border border-[var(--border)] hover:border-[var(--accent)]/30 transition-colors"
                >
                  <div>
                    <div className="font-medium text-[var(--text-primary)]">{cert.name}</div>
                    <div className="text-sm text-[var(--text-muted)]">{cert.issuer}</div>
                  </div>
                  <div className="text-sm font-mono text-[var(--accent)]">{cert.year}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="glass-panel rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-3">
              <Star className="w-5 h-5 text-[var(--accent)]" />
              Highlights
            </h3>
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-3 rounded-xl bg-[var(--bg-secondary)]/50 border border-[var(--border)] hover:border-[var(--accent)]/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--accent)]/20 transition-colors">
                    <highlight.icon className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <div className="text-[var(--text-secondary)] pt-2">
                    {highlight.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
