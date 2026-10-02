import React, { useState, useEffect } from 'react';
import { 
  Mail, Github, Linkedin, ArrowRight, ExternalLink, 
  Languages, ChevronLeft, ChevronRight, Download, MessageCircle, 
  GraduationCap, Award, Briefcase, Code, Check, Copy, 
  Cpu, Layers, Sparkles, Server, Terminal, ShieldCheck
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
    }, 3000);
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
        className="relative w-full h-full min-h-[220px] group/carousel overflow-hidden" 
        style={{ maxHeight: '320px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {project.images.map((src, i) => (
          <img 
            key={i}
            src={src} 
            alt={`${project.title} screenshot ${i + 1}`}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${i === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-between px-3 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200">
          <button 
            onClick={goToPrev} 
            className="p-1.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-all focus:outline-none"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            onClick={goToNext} 
            className="p-1.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-all focus:outline-none"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {project.images.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-4 bg-blue-500' : 'w-1.5 bg-white/40'}`} 
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[220px]" style={{ maxHeight: '320px' }}>
      <img 
        src={project.image} 
        alt={project.title} 
        loading="lazy"
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState('en');
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    window.document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = translations[lang] || translations.en;
  const isAr = lang === 'ar';

  const copyEmail = () => {
    navigator.clipboard.writeText('ahmedekramy303@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const projectsData = [
    {
      ...t.projects.items[0], // AutoHire
      images: ['/project-AutoHire1.png', '/project-AutoHire2.png'],
      colSpan: 'lg:col-span-1'
    },
    {
      ...t.projects.items[1], // Shiphny AI
      image: '/project-shiphny.png',
      colSpan: 'lg:col-span-2'
    },
    {
      ...t.projects.items[2], // Meridian
      images: [
        '/project-ai-auditor/Screenshot%202026-04-13%20210744.png',
        '/project-ai-auditor/Screenshot%202026-04-13%20210815.png',
        '/project-ai-auditor/Screenshot%202026-04-13%20210827.png'
      ],
      colSpan: 'lg:col-span-1'
    },
    {
      ...t.projects.items[3], // LLM Safety Guardrail API
      image: '/project-rag.png',
      colSpan: 'lg:col-span-1'
    },
    {
      ...t.projects.items[4], // Coremont
      image: '/project-coremont.png',
      colSpan: 'lg:col-span-1'
    }
  ];

  return (
    <div className={`min-h-screen bg-[#090d16] text-slate-100 selection:bg-blue-600 selection:text-white ${isAr ? 'font-arabic' : 'font-sans'}`}>
      
      {/* Top Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#090d16]/85 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
          
          {/* Logo & Availability Status */}
          <div className="flex items-center gap-3">
            <a href="#" className="font-bold text-lg sm:text-xl tracking-tight text-white hover:text-blue-400 transition-colors">
              Ahmed Gaiter
            </a>
            
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{t.hero.status}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a>
            <a href="#experience" className="hover:text-white transition-colors">{t.nav.experience}</a>
            <a href="#projects" className="hover:text-white transition-colors">{t.nav.projects}</a>
            <a href="#education" className="hover:text-white transition-colors">{t.nav.education}</a>
            <a href="#skills" className="hover:text-white transition-colors">{t.nav.skills}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="px-3 py-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-xs font-semibold text-slate-300 border border-slate-700/60 transition-colors flex items-center gap-1.5"
            >
              <Languages size={14} className="text-blue-400" />
              <span>{lang === 'en' ? 'العربية' : 'EN'}</span>
            </button>

            <a 
              href="https://drive.google.com/file/d/1LQYa5QLU3q8cB27JuKM2fqafNsjNXLTC/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition-all"
            >
              <Download size={14} />
              <span className="hidden sm:inline">Resume</span>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* HERO SECTION */}
        <section className="pt-20 sm:pt-28 pb-16 sm:pb-24 border-b border-slate-800/80">
          <div className="max-w-3xl">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-medium mb-6">
              <span>{t.hero.title}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              {t.hero.greeting}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all flex items-center gap-2 shadow-sm"
              >
                <span>{t.hero.btnProjects}</span>
                <ArrowRight size={16} className={isAr ? 'rotate-180' : ''} />
              </a>

              <a 
                href="https://drive.google.com/file/d/1LQYa5QLU3q8cB27JuKM2fqafNsjNXLTC/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-all flex items-center gap-2"
              >
                <Download size={16} />
                <span>{t.hero.btnResume}</span>
              </a>

              <a 
                href="mailto:ahmedekramy303@gmail.com"
                className="px-5 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 font-medium text-sm border border-slate-800 transition-all flex items-center gap-2"
              >
                <Mail size={16} />
                <span>{t.hero.btnContact}</span>
              </a>
            </div>

            {/* Quick Metrics (HR Magnet) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
              <div>
                <div className="text-2xl font-bold font-mono text-white">2+ Years</div>
                <div className="text-xs text-slate-400 mt-0.5">Production AI & Backend</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-blue-400">&lt;300ms</div>
                <div className="text-xs text-slate-400 mt-0.5">Real-Time WebSockets</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-emerald-400">99.9%</div>
                <div className="text-xs text-slate-400 mt-0.5">Multi-Provider Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-violet-400">1,000+</div>
                <div className="text-xs text-slate-400 mt-0.5">RLHF Evals & Benchmarks</div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-16 sm:py-24 border-b border-slate-800/80">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-3">
              {t.about.sectionTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              {t.about.headline}
            </h2>
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section id="experience" className="py-16 sm:py-24 border-b border-slate-800/80">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-3">
              {t.experience.sectionTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {t.experience.headline}
            </h2>
          </div>

          <div className="space-y-8">
            {t.experience.jobs.map((job, idx) => (
              <div key={idx} className="clean-card p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{job.role}</h3>
                    <div className="text-sm font-semibold text-blue-400 mt-0.5">{job.company}</div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 shrink-0">{job.period}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="text-slate-300 text-sm leading-relaxed flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {job.skills.map((skill, i) => (
                    <span key={i} className="tech-pill">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section id="projects" className="py-16 sm:py-24 border-b border-slate-800/80">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-3">
              {t.projects.sectionTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {t.projects.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {projectsData.map((project, idx) => (
              <div key={idx} className={`clean-card overflow-hidden flex flex-col group ${project.colSpan}`}>
                
                {/* Image */}
                <div className="bg-slate-950 border-b border-slate-800/80 overflow-hidden">
                  <ProjectImage project={project} />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-xs font-medium text-slate-400 mt-0.5">
                      {project.subtitle}
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-1">
                    {project.desc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tech-pill">{tag}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 mt-auto">
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <span>{t.projects.viewDemo}</span>
                        <ExternalLink size={13} className={isAr ? 'mr-1' : 'ml-1'} />
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white transition-colors"
                      >
                        <Github size={13} />
                        <span>{t.projects.viewCode}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS (DR. MAHMOUD EID MASTERCLASS SPOTLIGHT) */}
        <section id="education" className="py-16 sm:py-24 border-b border-slate-800/80">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-3">
              {t.education.sectionTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {t.education.headline}
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Academic Degree */}
            <div className="lg:col-span-5 clean-card p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-5">
                  <GraduationCap size={26} />
                </div>
                <span className="text-xs font-mono text-slate-400 block mb-2">{t.education.degree.period}</span>
                <h3 className="text-xl font-bold text-white mb-1">{t.education.degree.title}</h3>
                <div className="text-sm font-semibold text-blue-400 mb-4">{t.education.degree.institution}</div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {t.education.degree.desc}
                </p>
              </div>
              <div className="pt-5 border-t border-slate-800/80 mt-6 flex items-center gap-2 text-xs text-emerald-400 font-medium">
                <Check size={14} />
                <span>Verified B.Sc. Degree</span>
              </div>
            </div>

            {/* Certifications List */}
            <div className="lg:col-span-7 space-y-4">
              {t.education.certs.map((cert, idx) => (
                <div 
                  key={idx} 
                  className={`clean-card p-6 ${idx === 0 ? 'border-blue-500/40 bg-slate-900/90 shadow-md' : ''}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <div className="flex items-center gap-2.5">
                      <Award size={18} className={idx === 0 ? 'text-blue-400' : 'text-slate-400'} />
                      <h4 className="text-base font-bold text-white">{cert.title}</h4>
                    </div>
                    <span className="text-xs font-mono text-blue-400 font-semibold">{cert.issuer} ({cert.period})</span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pl-7">
                    {cert.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNICAL SKILLS */}
        <section id="skills" className="py-16 sm:py-24 border-b border-slate-800/80">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-3">
              {t.skills.sectionTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {t.skills.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.skills.groups.map((group, idx) => (
              <div key={idx} className="clean-card p-6">
                <h3 className="text-sm font-bold text-white mb-4 pb-3 border-b border-slate-800/80">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.skills.map((skill, i) => (
                    <li key={i} className="text-xs font-mono text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT / HIRE ME */}
        <section id="contact" className="py-16 sm:py-24 text-center">
          <div className="max-w-2xl mx-auto clean-card p-8 sm:p-12">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-3">
              {t.contact.sectionTitle}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              {t.contact.headline}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              {t.contact.desc}
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a 
                href="mailto:ahmedekramy303@gmail.com"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all flex items-center gap-2 shadow-sm"
              >
                <Mail size={16} />
                <span>{t.contact.btnEmail}</span>
              </a>

              <a 
                href="https://wa.me/201069334256"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all flex items-center gap-2"
              >
                <MessageCircle size={16} />
                <span>{t.contact.btnWhatsApp}</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/ahmed-ai-dev/"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-all flex items-center gap-2"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={copyEmail}
                className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-sm border border-slate-700 transition-all flex items-center gap-1.5"
                title="Copy Email"
              >
                {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                <span className="text-xs">{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500 font-medium">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>{t.contact.footer.replace('{year}', new Date().getFullYear())}</div>
          <div className="flex items-center gap-6 text-slate-400">
            <a href="https://github.com/ahmedgeeter" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/ahmed-ai-dev/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:ahmedekramy303@gmail.com" className="hover:text-white transition-colors">ahmedekramy303@gmail.com</a>
          </div>
        </div>
      </footer>

      {/* Direct WhatsApp Quick Chat Float */}
      <a 
        href="https://wa.me/201069334256"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:scale-105 transition-all z-50 flex items-center justify-center focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

    </div>
  );
}
