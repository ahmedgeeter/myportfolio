import React, { useState, useEffect } from 'react';
import { 
  Mail, Github, Linkedin, ArrowRight, ExternalLink, 
  Languages, ChevronLeft, ChevronRight, Download, MessageCircle, 
  GraduationCap, Award, Briefcase, Code, Check, Copy, 
  MapPin, Sparkles, Terminal, Cpu, Database, Server, Cloud, Bot,
  ShieldCheck, Zap, Layers, CheckCircle2
} from 'lucide-react';
import { translations } from './translations';

const ProjectImageCarousel = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const hasMultiple = Array.isArray(project.images) && project.images.length > 1;

  useEffect(() => {
    if (!hasMultiple || isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % project.images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [hasMultiple, project.images, isHovered]);

  const next = (e) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  const prev = (e) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  if (hasMultiple) {
    return (
      <div 
        className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-slate-950/80 border border-white/5 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {project.images.map((src, i) => (
          <img 
            key={i}
            src={src} 
            alt={`${project.title} preview ${i + 1}`}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${i === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-between px-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button 
            onClick={prev} 
            className="p-1.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 backdrop-blur-md border border-white/10 transition-all"
            aria-label="Previous"
          >
            <ChevronLeft size={16} />
          </button>
          <button 
            onClick={next} 
            className="p-1.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 backdrop-blur-md border border-white/10 transition-all"
            aria-label="Next"
          >
            <ChevronRight size={16} />
          </button>
        </div>
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {project.images.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-5 bg-blue-400' : 'w-1.5 bg-white/30'}`} 
            />
          ))}
        </div>
      </div>
    );
  }

  if (project.isApi) {
    return (
      <div className="w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-[#070b14] border border-white/5 p-4 flex flex-col justify-center font-mono text-xs">
        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10 text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold text-slate-200">guardrail_validator.py</span>
          </div>
          <span className="text-[10px] text-blue-400 font-mono">FastAPI • Pydantic v2</span>
        </div>
        <pre className="text-slate-300 leading-relaxed text-[11px] overflow-x-auto font-mono py-1">
          <span className="text-blue-400">@router.post</span>(<span className="text-emerald-400">"/v1/guardrails/sanitize"</span>){'\n'}
          <span className="text-purple-400">async def</span> <span className="text-amber-300">sanitize_prompt</span>(req: <span className="text-cyan-300">PromptRequest</span>):{'\n'}
          {'  '}sanitized = <span className="text-blue-400">await</span> guardrail.filter_pii(req.text){'\n'}
          {'  '}passed = <span className="text-blue-400">await</span> guardrail.detect_injection(sanitized){'\n'}
          {'  '}<span className="text-purple-400">return</span> <span className="text-cyan-300">SanitizedResponse</span>(text=sanitized, safe=passed)
        </pre>
        <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
          <span className="flex items-center gap-1 text-emerald-400"><CheckCircle2 size={12} /> Strict Regex + Semantic Check</span>
          <span className="text-slate-500">&lt;15ms latency</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-slate-950/80 border border-white/5 group relative">
      <img 
        src={project.image} 
        alt={project.title} 
        loading="lazy"
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState('en');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[lang];
  const isAr = lang === 'ar';

  const toggleLanguage = () => {
    const nextLang = lang === 'en' ? 'ar' : 'en';
    setLang(nextLang);
    document.documentElement.dir = nextLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = nextLang;
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('ahmedekramy303@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className={`min-h-screen bg-[#050811] text-slate-200 selection:bg-blue-600 selection:text-white ${isAr ? 'rtl' : 'ltr'}`}>
      
      {/* Liquid Jelly Ambient Orbs */}
      <div className="fixed top-[-15%] left-[-10%] w-[550px] h-[550px] rounded-full bg-blue-600/15 blur-[130px] pointer-events-none -z-10" />
      <div className="fixed top-[25%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600/15 blur-[150px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-10%] left-[20%] w-[650px] h-[650px] rounded-full bg-emerald-500/10 blur-[150px] pointer-events-none -z-10" />

      {/* FLOATING GLASS NAVBAR */}
      <header className="sticky top-4 z-50 max-w-5xl mx-auto px-4 sm:px-6">
        <div className={`glass-nav rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-300 ${scrolled ? 'shadow-2xl border-white/15' : ''}`}>
          
          {/* Logo / Brand with availability pill */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-bold text-white text-sm shadow-md group-hover:scale-105 transition-transform">
              AG
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors leading-none">
                {t.hero.name}
              </span>
              <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>{t.nav.status}</span>
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-medium text-slate-300">
            <a href="#about" className="px-3 py-1.5 rounded-full hover:bg-white/10 hover:text-white transition-all">{t.nav.about}</a>
            <a href="#projects" className="px-3 py-1.5 rounded-full hover:bg-white/10 hover:text-white transition-all">{t.nav.projects}</a>
            <a href="#experience" className="px-3 py-1.5 rounded-full hover:bg-white/10 hover:text-white transition-all">{t.nav.experience}</a>
            <a href="#skills" className="px-3 py-1.5 rounded-full hover:bg-white/10 hover:text-white transition-all">{t.nav.skills}</a>
            <a href="#education" className="px-3 py-1.5 rounded-full hover:bg-white/10 hover:text-white transition-all">{t.nav.education}</a>
            <a href="#contact" className="px-3 py-1.5 rounded-full hover:bg-white/10 hover:text-white transition-all">{t.nav.contact}</a>
          </nav>

          {/* Action Tools: Lang Switcher & CV Button */}
          <div className="flex items-center gap-2">
            <button 
              onClick={toggleLanguage}
              className="glass-pill px-2.5 py-1.5 text-xs text-slate-200 hover:text-white"
              title="Toggle Language"
            >
              <Languages size={14} className="text-blue-400" />
              <span className="font-semibold">{lang === 'en' ? 'عربي' : 'EN'}</span>
            </button>

            <a 
              href="/Ahmed_Gaiter_AI_Engineer_CV.pdf"
              download="Ahmed_Gaiter_AI_Engineer_CV.pdf"
              className="jelly-btn inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold shadow-md shadow-blue-500/20"
            >
              <Download size={13} />
              <span className="hidden sm:inline">CV</span>
            </a>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT CONTAINER */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-24 space-y-24">
        
        {/* HERO SECTION */}
        <section className="relative pt-6 sm:pt-12">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 font-medium mb-6 backdrop-blur-md">
            <Sparkles size={13} className="text-blue-400 animate-pulse" />
            <span>{t.hero.statusBadge}</span>
          </div>

          {/* Headline */}
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              <span className="text-slate-400 block text-lg sm:text-2xl font-semibold mb-1">
                {t.hero.rolePrefix}
              </span>
              <span className="bg-gradient-to-r from-white via-slate-100 to-blue-300 bg-clip-text text-transparent">
                {t.hero.roleHighlight}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal mb-8 max-w-2xl">
              {t.hero.bio}
            </p>
          </div>

          {/* Quick Technical Badges */}
          <div className="flex flex-wrap gap-2 mb-10 max-w-2xl">
            {t.hero.quickBadges.map((badge, i) => (
              <span key={i} className="glass-pill text-xs font-mono text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                <span>{badge}</span>
              </span>
            ))}
          </div>

          {/* Primary Action Buttons (For HR & Founders) */}
          <div className="flex flex-wrap items-center gap-3 mb-14">
            <a 
              href="/Ahmed_Gaiter_AI_Engineer_CV.pdf"
              download="Ahmed_Gaiter_AI_Engineer_CV.pdf"
              className="jelly-btn px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-blue-500/25"
            >
              <Download size={16} />
              <span>{t.hero.btnResume}</span>
            </a>

            <a 
              href="https://wa.me/201069334256?text=Hi%20Ahmed,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noreferrer"
              className="jelly-btn px-5 py-3 rounded-full bg-emerald-600/90 hover:bg-emerald-500 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/20 backdrop-blur-md"
            >
              <MessageCircle size={16} />
              <span>{t.hero.btnWhatsApp}</span>
            </a>

            <a 
              href="#projects" 
              className="glass-pill px-5 py-3 rounded-full text-sm font-medium text-slate-200 hover:text-white flex items-center gap-1.5"
            >
              <span>{t.hero.btnProjects}</span>
              <ArrowRight size={15} className={isAr ? 'rotate-180' : ''} />
            </a>

            <button
              onClick={copyEmail}
              className="glass-pill px-3.5 py-3 rounded-full text-xs font-mono text-slate-300 hover:text-white"
              title="Copy Email"
            >
              {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copiedEmail ? t.hero.copied : 'ahmedekramy303@gmail.com'}</span>
            </button>
          </div>

          {/* HR Fast-Scan 4-Metric Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
            {t.hero.stats.map((stat, i) => (
              <div key={i} className="glass-card p-4 rounded-2xl flex flex-col justify-between">
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono tracking-tight">
                  {stat.value}
                </span>
                <div className="mt-1">
                  <span className="text-xs font-semibold text-white block">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {stat.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* ABOUT & PHILOSOPHY SECTION */}
        <section id="about" className="pt-8">
          <div className="mb-8">
            <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 font-bold inline-block mb-3">
              {t.about.sectionBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.about.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Story & Philosophy */}
            <div className="lg:col-span-1 glass-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between">
              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-blue-400" />
                  Cairo, Egypt
                </span>
                <span className="text-emerald-400 font-medium">Remote Worldwide</span>
              </div>
            </div>

            {/* Core Pillars (Glass Grid) */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.about.highlights.map((item, i) => (
                <div key={i} className="glass-card p-5 rounded-2xl flex flex-col justify-between group">
                  <div>
                    <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3 group-hover:scale-105 transition-transform">
                      {i === 0 && <Bot size={16} />}
                      {i === 1 && <Server size={16} />}
                      {i === 2 && <ShieldCheck size={16} />}
                      {i === 3 && <GraduationCap size={16} />}
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300/90 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* PRODUCTION SYSTEMS (PROJECTS) */}
        <section id="projects" className="pt-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 font-bold inline-block mb-3">
                {t.projects.sectionBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {t.projects.headline}
              </h2>
            </div>
          </div>

          <div className="space-y-8">
            {t.projects.items.map((project) => (
              <div key={project.id} className="glass-card p-6 sm:p-8 rounded-3xl group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Column: Visual / Code Preview (5 cols) */}
                  <div className="lg:col-span-5 w-full">
                    <ProjectImageCarousel project={project} />
                  </div>

                  {/* Right Column: Architectural Depth & Narrative (7 cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-4">
                    
                    <div>
                      {/* Performance Metric Badge */}
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-[11px] font-mono font-bold text-blue-300">
                          <Zap size={11} className="text-blue-400" />
                          <span>{project.metric}</span>
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-400 mb-3">
                        {project.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {project.desc}
                      </p>

                      {/* Tech Lead Architecture Callout */}
                      <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 font-mono text-[11px] text-slate-300 mb-4">
                        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider block mb-1">
                          Architecture Pipeline:
                        </span>
                        <div className="text-slate-300/90 leading-normal flex items-center gap-1.5 flex-wrap">
                          {project.architecture}
                        </div>
                      </div>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="glass-pill text-[10.5px] font-mono text-slate-300 py-0.5 px-2.5">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/10">
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noreferrer"
                          className="jelly-btn inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm"
                        >
                          <span>{t.projects.viewDemo}</span>
                          <ExternalLink size={13} />
                        </a>
                      )}

                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer"
                          className="glass-pill px-4 py-2 rounded-full text-xs font-medium text-slate-200 hover:text-white inline-flex items-center gap-1.5"
                        >
                          <Github size={13} />
                          <span>{t.projects.viewCode}</span>
                        </a>
                      )}
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section id="experience" className="pt-8">
          <div className="mb-8">
            <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 font-bold inline-block mb-3">
              {t.experience.sectionBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.experience.headline}
            </h2>
          </div>

          <div className="space-y-4">
            {t.experience.jobs.map((job, idx) => (
              <div key={idx} className="glass-card p-6 sm:p-7 rounded-3xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {job.role}
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400">
                        {job.badge}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-slate-400">
                      {job.company}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-slate-400">
                    {job.period}
                  </span>
                </div>

                <ul className="space-y-2 mb-4">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {job.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="glass-pill text-[10.5px] font-mono text-slate-300 py-0.5 px-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNICAL ARSENAL (SKILLS) */}
        <section id="skills" className="pt-8">
          <div className="mb-8">
            <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 font-bold inline-block mb-3">
              {t.skills.sectionBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.skills.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.skills.groups.map((group, idx) => (
              <div key={idx} className="glass-card p-5 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-white/10">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      {group.icon === 'Bot' && <Bot size={15} />}
                      {group.icon === 'Server' && <Server size={15} />}
                      {group.icon === 'Cloud' && <Cloud size={15} />}
                      {group.icon === 'Database' && <Database size={15} />}
                    </div>
                    <h3 className="text-xs font-bold text-white">
                      {group.title}
                    </h3>
                  </div>

                  <ul className="space-y-2">
                    {group.skills.map((skill, i) => (
                      <li key={i} className="text-xs font-mono text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <section id="education" className="pt-8">
          <div className="mb-8">
            <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 font-bold inline-block mb-3">
              {t.education.sectionBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.education.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            
            {/* Degree Card */}
            <div className="lg:col-span-1 glass-card p-6 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                  <GraduationCap size={18} />
                </div>
                <span className="text-[11px] font-mono text-slate-400 block mb-1">{t.education.degree.period}</span>
                <h3 className="text-base font-bold text-white mb-1">
                  {t.education.degree.title}
                </h3>
                <span className="text-xs font-semibold text-blue-400 block mb-3">
                  {t.education.degree.institution}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.education.degree.desc}
                </p>
              </div>
            </div>

            {/* Certifications (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              {t.education.certs.map((cert, i) => (
                <div key={i} className="glass-card p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm font-bold text-white">
                        {cert.title}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                        {cert.year}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-blue-400 block mb-1">
                      {cert.issuer}
                    </span>
                    <p className="text-xs text-slate-300/90 leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>
                  <span className="self-start sm:self-center shrink-0 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-300">
                    {cert.badge}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* HIRE ME & CONTACT SECTION */}
        <section id="contact" className="pt-8">
          <div className="glass-card p-8 sm:p-12 rounded-3xl text-center relative overflow-hidden">
            
            {/* Ambient Background Glow inside contact card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-xl mx-auto">
              <span className="text-[11px] font-mono uppercase tracking-wider px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold inline-block mb-3">
                {t.contact.sectionBadge}
              </span>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                {t.contact.headline}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
                {t.contact.desc}
              </p>

              {/* Action Buttons Grid */}
              <div className="flex flex-wrap justify-center gap-2.5 mb-8">
                <a 
                  href="mailto:ahmedekramy303@gmail.com"
                  className="jelly-btn px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all flex items-center gap-2 shadow-md shadow-blue-500/20"
                >
                  <Mail size={15} />
                  <span>{t.contact.btnEmail}</span>
                </a>

                <a 
                  href="https://wa.me/201069334256?text=Hello%20Ahmed,%20I'm%20reaching%20out%20regarding%20an%20engineering%20opportunity."
                  target="_blank"
                  rel="noreferrer"
                  className="jelly-btn px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all flex items-center gap-2 shadow-md shadow-emerald-500/20"
                >
                  <MessageCircle size={15} />
                  <span>{t.contact.btnWhatsApp}</span>
                </a>

                <a 
                  href="https://www.linkedin.com/in/ahmed-ai-dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="glass-pill px-4 py-3 rounded-full text-xs font-semibold text-slate-200 hover:text-white flex items-center gap-2"
                >
                  <Linkedin size={15} />
                  <span>{t.contact.btnLinkedIn}</span>
                </a>

                <a 
                  href="https://github.com/ahmedgeeter"
                  target="_blank"
                  rel="noreferrer"
                  className="glass-pill px-4 py-3 rounded-full text-xs font-semibold text-slate-200 hover:text-white flex items-center gap-2"
                >
                  <Github size={15} />
                  <span>{t.contact.btnGitHub}</span>
                </a>

                <a 
                  href="/Ahmed_Gaiter_AI_Engineer_CV.pdf"
                  download="Ahmed_Gaiter_AI_Engineer_CV.pdf"
                  className="glass-pill px-4 py-3 rounded-full text-xs font-semibold text-slate-200 hover:text-white flex items-center gap-2"
                >
                  <Download size={15} />
                  <span>{t.contact.btnResume}</span>
                </a>
              </div>

              {/* Direct Info Copy Box */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                <span>ahmedekramy303@gmail.com</span>
                <button 
                  onClick={copyEmail} 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  title="Copy"
                >
                  {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-xs text-slate-400">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>{t.contact.footer.replace('{year}', new Date().getFullYear())}</div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/ahmedgeeter" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/ahmed-ai-dev/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:ahmedekramy303@gmail.com" className="hover:text-white transition-colors">ahmedekramy303@gmail.com</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Pill */}
      <a 
        href="https://wa.me/201069334256?text=Hi%20Ahmed,%20I'm%20contacting%20you%20from%20your%20portfolio."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 jelly-btn bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={22} />
      </a>

    </div>
  );
}
