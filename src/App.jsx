import React, { useState, useEffect } from 'react';
import { 
  Mail, Github, Linkedin, ArrowRight, ExternalLink, Moon, Sun, 
  Languages, ChevronLeft, ChevronRight, Download, MessageCircle, 
  GraduationCap, Award, Briefcase, Code, Terminal, Zap, ShieldCheck, 
  Cpu, Layers, Sparkles, Check, Copy, Activity, Server, Radio, Database
} from 'lucide-react';
import { translations } from './translations';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectImage = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const hasMultiple = Array.isArray(project.images) && project.images.length > 0;

  useEffect(() => {
    if (!hasMultiple || isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % project.images.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [hasMultiple, project.images, isHovered]);

  const goToNext = (e) => {
    e.preventDefault();
    setCurrentIndex(prev => (prev + 1) % project.images.length);
  };

  const goToPrev = (e) => {
    e.preventDefault();
    setCurrentIndex(prev => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  if (hasMultiple) {
    return (
      <div 
        className="relative w-full h-full min-h-[260px] group/carousel overflow-hidden" 
        style={{ maxHeight: '360px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {project.images.map((src, i) => (
          <img 
            key={i}
            src={src} 
            alt={`${project.title} screenshot ${i + 1}`}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 transform group-hover/carousel:scale-105 ${i === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-between px-3 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
          <button 
            onClick={goToPrev} 
            className="p-2 rounded-full bg-black/60 text-white hover:bg-black/90 backdrop-blur-md transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={goToNext} 
            className="p-2 rounded-full bg-black/60 text-white hover:bg-black/90 backdrop-blur-md transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {project.images.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-5 bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'w-1.5 bg-white/40'}`} 
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[260px]" style={{ maxHeight: '360px' }}>
      <img 
        src={project.image} 
        alt={project.title} 
        loading="lazy"
        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
      />
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState('en');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simOutput, setSimOutput] = useState('');
  const [hasSimRun, setHasSimRun] = useState(false);

  useEffect(() => {
    window.document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = translations[lang] || translations.en;
  const isAr = lang === 'ar';

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('ahmedekramy303@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const simulationLog = `> [LangGraph Engine] Initializing state graph: session_id='prod_hr_assessment'
> [Redis Checkpointer] Loaded state memory checkpoint [200 OK]
> [Router Node] Multi-provider failover: Dispatched to Groq (LLaMA-3.3-70B)
> [Tool Invocation] verify_identity(tracking_id='SHP-4091') -> Verified [OK]
> [Tool Invocation] query_postgres(order_id='SHP-4091') -> Status: In-Transit (Alexandria -> Cairo)
> [Guardrail Layer] Deterministic Pydantic validation & zero PII leakage [PASSED]
> [State Transition] human_in_the_loop_check -> Auto-approved by security policy

[RESOLVED RESPONSE]
"Shipment #SHP-4091 cleared the Tanta distribution facility at 14:15 UTC. Delivery scheduled today before 18:00 UTC."

[METRICS] Latency: 240ms | Checkpointer: Redis | Failover: Nominal | Tokens: 84`;

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setHasSimRun(true);
    setSimOutput('');

    let i = 0;
    const interval = setInterval(() => {
      setSimOutput(prev => prev + simulationLog.charAt(i));
      i++;
      if (i >= simulationLog.length) {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 10);
  };

  const projectsData = [
    {
      title: t.projects.items[0].title, // Shiphny
      description: t.projects.items[0].desc,
      link: 'https://shiphny-ai-support.vercel.app/',
      codeLink: 'https://github.com/ahmedgeeter/shiphny-ai-support',
      image: '/project-shiphny.png',
      badge: 'Flagship Multi-Agent System',
      colSpan: 'lg:col-span-2'
    },
    {
      title: t.projects.items[1].title, // AutoHire
      description: t.projects.items[1].desc,
      link: 'https://ai-automation-interview.vercel.app/',
      codeLink: 'https://github.com/ahmedgeeter/ai-interview-automation',
      images: [
        '/project-AutoHire1.png',
        '/project-AutoHire2.png'
      ],
      badge: 'Sub-300ms WebSockets + Celery',
      colSpan: 'lg:col-span-1'
    },
    {
      title: t.projects.items[2].title, // Meridian
      description: t.projects.items[2].desc,
      link: 'https://ai-auditor-ocr-voice.vercel.app/',
      codeLink: 'https://github.com/ahmedgeeter/ai-auditor-ocr-voice',
      images: [
        '/project-ai-auditor/Screenshot%202026-04-13%20210744.png',
        '/project-ai-auditor/Screenshot%202026-04-13%20210815.png',
        '/project-ai-auditor/Screenshot%202026-04-13%20210827.png',
        '/project-ai-auditor/Screenshot%202026-04-13%20210850.png',
        '/project-ai-auditor/Screenshot%202026-04-13%20210857.png'
      ],
      badge: 'Vision & Speech Compliance',
      colSpan: 'lg:col-span-1'
    },
    {
      title: t.projects.items[3].title, // LLM Safety Guardrail API
      description: t.projects.items[3].desc,
      link: 'https://github.com/ahmedgeeter/LLM-Safety-Guardrail-API',
      codeLink: 'https://github.com/ahmedgeeter/LLM-Safety-Guardrail-API',
      image: '/project-rag.png',
      badge: 'Deterministic Pydantic Security',
      colSpan: 'lg:col-span-1'
    },
    {
      title: t.projects.items[4].title, // Coremont
      description: t.projects.items[4].desc,
      link: 'https://fullstack-gym-rag-chatbot.vercel.app/',
      codeLink: 'https://github.com/ahmedgeeter/fullstack-gym-rag-chatbot',
      image: '/project-coremont.png',
      badge: 'Production Hybrid RAG',
      colSpan: 'lg:col-span-1'
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className={`min-h-screen bg-[#07090e] text-slate-100 transition-colors duration-300 relative overflow-x-hidden ${isAr ? 'font-arabic' : 'font-sans'}`}>
      
      {/* Background Ambient Glows & Cyber Grid */}
      <div className="fixed inset-0 bg-grid-cyber pointer-events-none opacity-40 z-0" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] radial-glow-top pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] radial-glow-accent pointer-events-none z-0" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07090e]/80 border-b border-white/[0.08] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo & Live Status Ping */}
          <div className="flex items-center gap-3">
            <a href="#" className="text-xl sm:text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 p-0.5 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                <div className="w-full h-full bg-[#07090e] rounded-[10px] flex items-center justify-center font-mono font-bold text-cyan-400">
                  AG
                </div>
              </div>
              <span className="hidden sm:inline">Ahmed Gaiter</span>
            </a>

            {/* Recruiter / HR Availability Pill */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for AI Roles</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">{t.nav.about}</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">{t.nav.projects}</a>
            <a href="#sandbox" className="hover:text-cyan-400 transition-colors">Live Architecture</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">{t.nav.education}</a>
            <a href="#tech" className="hover:text-cyan-400 transition-colors">{t.nav.tech}</a>
          </nav>

          {/* Header Action Tools */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button 
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-xs font-semibold hover:border-cyan-400/50 hover:bg-white/[0.08] transition-all text-slate-200"
            >
              <Languages size={14} className="text-cyan-400" />
              {lang === 'en' ? 'العربية' : 'EN'}
            </button>

            {/* Resume Button */}
            <a 
              href="https://drive.google.com/file/d/1LQYa5QLU3q8cB27JuKM2fqafNsjNXLTC/view?usp=sharing" 
              target="_blank" 
              rel="noreferrer" 
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-bold shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:scale-105 transition-all"
            >
              <Download size={14} />
              <span>Resume (PDF)</span>
            </a>

            {/* Social Icons */}
            <a 
              href="https://github.com/ahmedgeeter" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20 transition-all"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/ahmed-ai-dev/" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="relative pt-16 sm:pt-24 pb-20 sm:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Floating Technology Badges (Animated Micro-Interactions) */}
          <div className="hidden xl:block pointer-events-none">
            {/* LangGraph Badge */}
            <div className="absolute top-24 left-10 badge-floating luxury-glass px-4 py-2.5 rounded-2xl flex items-center gap-3 border border-cyan-500/30 shadow-[0_0_25px_rgba(6,182,212,0.2)]">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Layers size={18} />
              </div>
              <div>
                <div className="text-xs font-bold text-white">LangGraph</div>
                <div className="text-[10px] font-mono text-cyan-300">Stateful Cyclic Graphs</div>
              </div>
            </div>

            {/* WebSockets Badge */}
            <div className="absolute top-52 right-12 badge-floating-delayed luxury-glass px-4 py-2.5 rounded-2xl flex items-center gap-3 border border-indigo-500/30 shadow-[0_0_25px_rgba(99,102,241,0.2)]">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Radio size={18} />
              </div>
              <div>
                <div className="text-xs font-bold text-white">WebSockets</div>
                <div className="text-[10px] font-mono text-indigo-300">Sub-300ms Streaming</div>
              </div>
            </div>

            {/* Redis + Celery Badge */}
            <div className="absolute bottom-28 left-16 badge-floating-slow luxury-glass px-4 py-2.5 rounded-2xl flex items-center gap-3 border border-emerald-500/30 shadow-[0_0_25px_rgba(16,185,129,0.2)]">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Database size={18} />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Redis Checkpointing</div>
                <div className="text-[10px] font-mono text-emerald-300">Async Inference Decoupling</div>
              </div>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            
            {/* Top Subtitle Pill */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs sm:text-sm font-mono text-cyan-300 mb-8"
            >
              <Sparkles size={15} className="text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>AI Systems & Backend Infrastructure</span>
            </motion.div>

            {/* Main Headline with Shimmering Gradient */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
            >
              {t.hero.headlinePart1} <span className="shimmer-text">{t.hero.headlineHighlight}</span> <br />
              {t.hero.headlinePart2}
            </motion.h1>

            {/* Sub-text */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-16"
            >
              <a 
                href="#projects" 
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-sm sm:text-base shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] hover:scale-105 transition-all flex items-center gap-2 group"
              >
                <span>{t.hero.btnPortfolio}</span>
                <ArrowRight size={18} className={`transition-transform group-hover:translate-x-1 ${isAr ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </a>

              <a 
                href="https://drive.google.com/file/d/1LQYa5QLU3q8cB27JuKM2fqafNsjNXLTC/view?usp=sharing" 
                target="_blank" 
                rel="noreferrer" 
                className="px-7 py-4 rounded-2xl luxury-glass text-slate-200 font-bold text-sm sm:text-base border border-white/[0.12] hover:border-cyan-400/50 hover:bg-white/[0.08] hover:scale-105 transition-all flex items-center gap-2"
              >
                <Download size={18} className="text-cyan-400" />
                <span>{t.hero.btnResume}</span>
              </a>

              <button 
                onClick={copyEmailToClipboard}
                className="px-5 py-4 rounded-2xl luxury-glass text-slate-300 hover:text-white font-medium text-sm border border-white/[0.1] hover:border-white/20 transition-all flex items-center gap-2"
                title="Copy Email"
              >
                {copiedEmail ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} className="text-slate-400" />}
                <span className="text-xs">{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
              </button>
            </motion.div>

            {/* Recruiter / HR Key Technical Metrics Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto"
            >
              {[
                { value: '<300ms', label: 'Streaming Latency', desc: 'Full-Duplex WebSockets', icon: Zap, color: 'text-cyan-400', border: 'border-cyan-500/20' },
                { value: '99.9%', label: 'Failover Reliability', desc: 'Groq + Gemini Routing', icon: ShieldCheck, color: 'text-indigo-400', border: 'border-indigo-500/20' },
                { value: '1,000+', label: 'Evaluated Benchmarks', desc: 'RLHF Code & Reasoning', icon: Activity, color: 'text-emerald-400', border: 'border-emerald-500/20' },
                { value: '5+', label: 'Production Architectures', desc: 'LangGraph, FastAPI, EKS', icon: Cpu, color: 'text-violet-400', border: 'border-violet-500/20' },
              ].map((stat, i) => (
                <div key={i} className={`luxury-glass p-4 sm:p-5 rounded-2xl text-start border ${stat.border} hover:scale-105 transition-all`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-2xl sm:text-3xl font-extrabold font-mono ${stat.color}`}>{stat.value}</span>
                    <stat.icon size={20} className={stat.color} />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white">{stat.label}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{stat.desc}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* INTERACTIVE ARCHITECTURE SIMULATOR (LIVE SANDBOX) */}
        <section id="sandbox" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="luxury-glass p-6 sm:p-10 rounded-3xl border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.1)]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono mb-3">
                  <Terminal size={14} />
                  <span>Real-Time Execution Simulator</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                  Test Stateful <span className="shimmer-text">LangGraph</span> Architecture
                </h2>
                <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                  Simulate an enterprise multi-agent request with deterministic tool execution, Redis checkpoint restoration, and sub-300ms failover routing.
                </p>
              </div>

              <button
                onClick={runSimulation}
                disabled={isSimulating}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105 disabled:opacity-60 transition-all shrink-0"
              >
                {isSimulating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Executing Graph Nodes...</span>
                  </>
                ) : (
                  <>
                    <Zap size={16} />
                    <span>Run Live Architecture Simulation</span>
                  </>
                )}
              </button>
            </div>

            {/* Terminal Window */}
            <div className="bg-[#05070c] rounded-2xl border border-white/[0.08] p-5 font-mono text-xs sm:text-sm text-slate-300 min-h-[220px] overflow-x-auto shadow-inner">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-slate-400">agent_execution_runtime.log</span>
                </div>
                <span className="text-cyan-400">Environment: Production Sandbox</span>
              </div>
              <pre className="whitespace-pre-wrap leading-relaxed text-cyan-300">
                {!hasSimRun && !isSimulating ? (
                  <span className="text-slate-500">
                    // Ready to execute state machine.{'\n'}
                    // Click "Run Live Architecture Simulation" to dispatch agent state graph and verify telemetry.
                  </span>
                ) : (
                  simOutput
                )}
                {isSimulating && <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-1 align-middle" />}
              </pre>
            </div>
          </div>
        </section>

        {/* EXPERIENCE TIMELINE */}
        <section id="about" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Context */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 text-xs font-mono">
                <Briefcase size={14} />
                <span>Career Milestones</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Engineering <br /><span className="shimmer-text">Experience</span>
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {t.about.description}
              </p>
              
              <div className="luxury-glass p-6 rounded-2xl border border-white/[0.08] space-y-3">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Engineering Philosophy</div>
                <p className="text-sm text-slate-300 italic leading-relaxed">
                  "Production AI is not about chaining API calls in Jupyter notebooks. It is about deterministic state machines, resilient failover routing, and low-latency microservices that never break under stress."
                </p>
              </div>
            </div>

            {/* Right Timeline Cards */}
            <div className="lg:col-span-7 space-y-6">
              {t.experience.jobs.map((job, idx) => (
                <div 
                  key={idx} 
                  className="luxury-glass-interactive p-6 sm:p-8 rounded-3xl border border-white/[0.08] relative overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                      {job.title}
                    </h3>
                    <span className="inline-block px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-mono text-cyan-300 shrink-0">
                      {job.date}
                    </span>
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {job.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono mb-4">
              <Code size={14} />
              <span>Production Architectures</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Featured <span className="shimmer-text">AI Systems</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-3">
              Full-stack reference implementations engineered for low latency, determinism, and high availability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {projectsData.map((project, idx) => (
              <div 
                key={idx} 
                className={`luxury-glass-interactive rounded-3xl overflow-hidden flex flex-col group border border-white/[0.08] ${project.colSpan}`}
              >
                {/* Image Container with Badge */}
                <div className="relative bg-[#0c101d] border-b border-white/[0.08] overflow-hidden">
                  <ProjectImage project={project} />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono font-semibold text-cyan-300 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                      {project.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.08] mt-auto">
                    {project.link && project.link !== '#' && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>{t.projects.viewBtn}</span>
                        <ExternalLink size={15} className={isAr ? 'mr-1' : 'ml-1'} />
                      </a>
                    )}
                    {project.codeLink && (
                      <a 
                        href={project.codeLink} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-300 hover:text-white transition-colors"
                      >
                        <Github size={15} />
                        <span>{t.projects.codeBtn}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION & SPECIALIZED CERTIFICATIONS (AI MASTERCLASS SPOTLIGHT) */}
        <section id="education" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/30 text-xs font-mono mb-4">
              <Award size={14} />
              <span>{t.education.sectionTitle}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              {t.education.headlinePart1} <span className="shimmer-text">{t.education.headlineHighlight}</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-3">
              Rigorous academic foundation combined with top-tier specialized generative AI credentials.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Degree Card */}
            <div className="lg:col-span-5 luxury-glass p-8 rounded-3xl border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 shadow-[0_0_25px_rgba(6,182,212,0.2)]">
                  <GraduationCap size={32} />
                </div>
                <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-mono text-slate-300 inline-block mb-3">
                  {t.education.date}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{t.education.degree}</h3>
                <p className="text-cyan-400 font-semibold text-base mb-4">{t.education.university}</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Focus: Data Structures & Algorithms, Distributed Systems, Operating Systems, Artificial Intelligence, Database Architectures.
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.08] mt-8 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Verified B.Sc. Degree</span>
                <span className="text-emerald-400 flex items-center gap-1"><Check size={14} /> Confirmed</span>
              </div>
            </div>

            {/* Certifications Spotlight */}
            <div className="lg:col-span-7 space-y-4">
              {t.education.certList?.map((cert, idx) => (
                <div 
                  key={idx}
                  className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 ${
                    cert.highlight 
                      ? 'bg-gradient-to-br from-indigo-950/60 via-slate-900/80 to-[#07090e] border-cyan-400/40 shadow-[0_0_30px_rgba(6,182,212,0.15)] relative overflow-hidden' 
                      : 'luxury-glass border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  {cert.highlight && (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-xl ${cert.highlight ? 'bg-cyan-500/20 text-cyan-300' : 'bg-white/[0.05] text-slate-400'}`}>
                        <Award size={20} />
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-white">
                        {cert.title}
                      </h4>
                    </div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-bold shrink-0 ${
                      cert.highlight 
                        ? 'bg-cyan-400/10 text-cyan-300 border border-cyan-400/30' 
                        : 'bg-white/[0.05] text-slate-400 border border-white/[0.08]'
                    }`}>
                      {cert.badge}
                    </span>
                  </div>

                  <div className="text-sm font-semibold text-cyan-400 mb-1.5">{cert.issuer}</div>
                  <p className="text-slate-300 text-sm leading-relaxed">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNICAL STACK ARSENAL */}
        <section id="tech" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono mb-4">
              <Cpu size={14} />
              <span>Production Stack</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              {t.tech.headlinePart1} <span className="shimmer-text">{t.tech.headlineHighlight}</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-3">
              Engineered with modern, deterministic, enterprise-tested tooling.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: t.tech.cat1, 
                icon: Layers, 
                color: 'text-cyan-400',
                items: ['LangGraph (Cyclic Graphs)', 'Production Hybrid RAG', 'Tool Calling Nodes', 'LiteLLM Routing', 'Groq & Gemini 2.5', 'Whisper & Vision AI'] 
              },
              { 
                title: t.tech.cat2, 
                icon: Server, 
                color: 'text-indigo-400',
                items: ['Python (AsyncIO)', 'FastAPI Microservices', 'WebSockets (Full-Duplex)', 'Celery Task Queues', 'Redis Pub/Sub & Caching', 'Pydantic V2 Schemas'] 
              },
              { 
                title: t.tech.cat3, 
                icon: ShieldCheck, 
                color: 'text-emerald-400',
                items: ['Docker & Multi-Stage', 'Kubernetes (EKS Manifests)', 'Terraform (IaC)', 'CI/CD (GitHub Actions)', 'Prometheus & Grafana', 'Linux / Bash'] 
              },
              { 
                title: t.tech.cat4, 
                icon: Database, 
                color: 'text-violet-400',
                items: ['PostgreSQL (ACID)', 'Redis (AsyncSaver)', 'PGVector & FAISS', 'SQLAlchemy / Alembic', 'Connection Pooling', 'Schema Migrations'] 
              }
            ].map((cat, i) => (
              <div key={i} className="luxury-glass p-7 rounded-3xl border border-white/[0.08] hover:border-cyan-500/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.08]">
                    <div className={`p-2.5 rounded-xl bg-white/[0.05] ${cat.color}`}>
                      <cat.icon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-wide">{cat.title}</h3>
                  </div>

                  <ul className="space-y-3 text-sm text-slate-300 font-medium">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RECRUITER & HR CALL TO ACTION */}
        <section id="contact" className="py-24 sm:py-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="luxury-glass p-8 sm:p-14 rounded-3xl border border-cyan-500/30 shadow-[0_0_60px_rgba(6,182,212,0.15)] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Direct HR & Engineering Leadership Channel</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">
              {t.contact.headlinePart1} <span className="shimmer-text">{t.contact.headlineHighlight}</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              {t.contact.desc}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:ahmedekramy303@gmail.com" 
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-sm sm:text-base shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-105 transition-all flex items-center gap-2"
              >
                <Mail size={18} />
                <span>{t.contact.btn} (ahmedekramy303@gmail.com)</span>
              </a>

              <a 
                href="https://wa.me/201069334256" 
                target="_blank" 
                rel="noreferrer" 
                className="px-8 py-4 rounded-2xl bg-[#25D366] text-white font-bold text-sm sm:text-base shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:scale-105 transition-all flex items-center gap-2"
              >
                <MessageCircle size={18} />
                <span>{t.contact.btnWhatsApp} (+20 106 933 4256)</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/ahmed-ai-dev/" 
                target="_blank" 
                rel="noreferrer" 
                className="px-6 py-4 rounded-2xl luxury-glass text-cyan-400 font-bold text-sm sm:text-base border border-cyan-500/30 hover:bg-white/[0.08] hover:scale-105 transition-all flex items-center gap-2"
              >
                <Linkedin size={18} />
                <span>LinkedIn Message</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.08] py-10 text-center text-xs sm:text-sm text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Ahmed Gaiter. Engineered for production resilience.</div>
          <div className="flex items-center gap-6 text-slate-400">
            <a href="https://github.com/ahmedgeeter" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/ahmed-ai-dev/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:ahmedekramy303@gmail.com" className="hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP QUICK CHAT BUTTON */}
      <a 
        href="https://wa.me/201069334256" 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-green-400"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>

    </div>
  );
}
