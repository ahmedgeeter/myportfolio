import React, { memo, useCallback, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, FolderKanban, Send, ChevronLeft, ChevronRight } from 'lucide-react';
import { fadeIn, viewportOnce } from '../../lib/motion';
import { cn } from '../../lib/utils';

// Hardcoded for the new aesthetic
const projects = [
  {
    title: 'Shiphny AI Support Agent',
    description: 'Bilingual AI support agent handling 100% of tier-1 inquiries. Deterministic identity verification preventing data leakage. 99.9% uptime via 4-layer AI failover chain. <500ms response time.',
    tags: ['FastAPI', 'React', 'Multi-Provider AI', 'Bilingual NLP'],
    category: 'Production AI',
    github: 'https://github.com/ahmedgeeter/shiphny-ai-support',
    demo: 'https://shiphny-ai-support.vercel.app/',
    thumb: '/project-shiphny.png',
    bentoSpan: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-2', // Large Feature
  },
  {
    title: 'ReqLens',
    description: 'Turns messy engineering notes into clean, structured requirements powered by Gemini 2.5 Flash. Built with structured JSON output.',
    tags: ['Python', 'Streamlit', 'Gemini'],
    category: 'AI Tool',
    github: 'https://github.com/ahmedgeeter/ReqLens',
    demo: 'https://reqlens.streamlit.app',
    thumb: '/project-reqlens.png',
    bentoSpan: 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1',
  },
  {
    title: 'Coremont Premium Gym',
    description: 'Luxury gym brand site with a fluid 3D-style front end and a RAG chatbot tied to real catalog data.',
    tags: ['Next.js', 'Framer Motion', 'RAG'],
    category: 'Full-Stack',
    github: 'https://github.com/ahmedgeeter/fullstack-gym-rag-chatbot',
    demo: 'https://fullstack-gym-rag-chatbot.vercel.app/',
    thumb: '/project-coremont.png',
    bentoSpan: 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1',
  },
  {
    title: 'Meridian AI Auditor',
    description: 'Production-grade AI document auditing platform with dynamic multimodal OCR. Meta Llama-4 Scout vision auto-detects document types.',
    tags: ['React 18', 'Llama 4', 'Whisper'],
    category: 'AI Platform',
    github: 'https://github.com/ahmedgeeter/ai-auditor-ocr-voice',
    demo: 'https://ai-auditor-ocr-voice.vercel.app/',
    thumb: '/project-ai-auditor/Screenshot 2026-04-13 210744.png',
    bentoSpan: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1',
  },
  {
    title: 'AI Medical Email',
    description: 'Hands-free first response for clinic inboxes via n8n. Gemini 2.5 Flash agent drafts structured HTML replies.',
    tags: ['n8n', 'Gmail API', 'Gemini'],
    category: 'Healthcare',
    thumb: '/project-medical-email/thumb.png',
    inquiryOnly: true,
    bentoSpan: 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1',
  },
];

const ProjectCard = memo(function ProjectCard({ project, idx }) {
  return (
    <motion.article
      variants={fadeIn('up', idx * 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn(
        'group gradient-border flex flex-col overflow-hidden',
        project.bentoSpan
      )}
    >
      <div className="relative flex-1 p-6 z-10 flex flex-col h-full bg-[var(--bg-secondary)] rounded-lg">
        {/* Top Header */}
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] uppercase tracking-widest font-mono text-[var(--accent-light)] border border-[var(--accent-light)]/30 bg-[var(--accent-light)]/10 px-2 py-1 rounded">
            {project.category}
          </span>
          <div className="flex gap-2">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-white transition-colors">
                <Github size={18} />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-white transition-colors">
                <ExternalLink size={18} />
              </a>
            )}
            {project.inquiryOnly && (
              <a href="#contact" className="text-[var(--text-muted)] hover:text-white transition-colors">
                <Send size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="mt-auto">
          <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2 group-hover:text-[var(--accent-light)] transition-colors">
            {project.title}
          </h3>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[var(--border)]">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-modern">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)] rounded-full mix-blend-screen filter blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.article>
  );
});

const FeaturedProjects = () => {
  return (
    <section id="projects" className="cv-section relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeIn('up', 0)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FolderKanban className="w-5 h-5 text-[var(--accent)]" strokeWidth={2.5} />
              <span className="text-sm font-mono text-[var(--accent-light)] tracking-wider uppercase">
                Architecture Catalog
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight">
              Production <span className="accent-mark">Systems</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl">
              A selection of high-availability backend infrastructures, AI integrations, and developer tools.
            </p>
          </div>
          
          <motion.a
            href="#github"
            whileHover={{ x: 4 }}
            className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-white transition-colors"
          >
            View all repositories
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </motion.a>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 auto-rows-[minmax(250px,auto)] gap-4 md:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
