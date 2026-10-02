import React, { useState, useEffect } from 'react';
import { 
  Mail, Github, Linkedin, ArrowRight, ExternalLink, 
  Languages, ChevronLeft, ChevronRight, Download, MessageCircle, 
  GraduationCap, Award, Briefcase, Code, Check, Copy, 
  MapPin, ArrowUpRight
} from 'lucide-react';
import { translations } from './translations';

const ProjectImage = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const hasMultiple = Array.isArray(project.images) && project.images.length > 1;

  useEffect(() => {
    if (!hasMultiple || isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % project.images.length);
    }, 3200);
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
        className="relative w-full h-full min-h-[220px] group/carousel overflow-hidden bg-[#0a0d14]" 
        style={{ maxHeight: '300px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {project.images.map((src, i) => (
          <img 
            key={i}
            src={src} 
            alt={`${project.title} preview ${i + 1}`}
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
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1 z-20">
          {project.images.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-4 bg-blue-500' : 'w-1.5 bg-white/30'}`} 
            />
          ))}
        </div>
      </div>
    );
  }

  if (project.isApi) {
    return (
      <div className="w-full h-full min-h-[220px] bg-[#070a12] p-5 flex flex-col justify-center font-mono text-xs border-b border-slate-800/80 text-slate-300" style={{ maxHeight: '300px' }}>
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80 text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            <span className="font-semibold text-slate-300">guardrail_service.py</span>
          </div>
          <span className="text-[10px] text-slate-500">FastAPI • Pydantic V2</span>
        </div>
        <pre className="text-slate-300 leading-relaxed text-[11.5px] overflow-x-auto font-mono">
          <span className="text-blue-400">@router.post</span>(<span className="text-emerald-400">"/v1/guardrails/sanitize"</span>){'\n'}
          <span className="text-purple-400">async def</span> <span className="text-amber-300">sanitize_prompt</span>(req: <span className="text-cyan-300">PromptRequest</span>):{'\n'}
          {'  '}sanitized = <span className="text-blue-400">await</span> guardrail.filter_pii(req.text){'\n'}
          {'  '}passed = <span className="text-blue-400">await</span> guardrail.detect_injection(sanitized){'\n'}
          {'  '}<span className="text-purple-400">return</span> <span className="text-cyan-300">SanitizedResponse</span>(text=sanitized, safe=passed)
        </pre>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[220px] bg-[#0a0d14] overflow-hidden" style={{ maxHeight: '300px' }}>
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
      isApi: true,
      colSpan: 'lg:col-span-1'
    },
    {
      ...t.projects.items[4], // Coremont
      image: '/project-coremont.png',
      colSpan: 'lg:col-span-1'
    }
  ];

  return (
    <div className={`min-h-screen bg-[#0b0f19] text-slate-100 selection:bg-blue-600 selection:text-white ${isAr ? 'font-arabic' : 'font-sans'}`}>
      
      {/* Top Header / Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0b0f19]/85 border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          
          {/* Brand Name */}
          <a href="#" className="font-bold text-base sm:text-lg tracking-tight text-white hover:text-blue-400 transition-colors">
            Ahmed Gaiter
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a>
            <a href="#experience" className="hover:text-white transition-colors">{t.nav.experience}</a>
            <a href="#projects" className="hover:text-white transition-colors">{t.nav.projects}</a>
            <a href="#education" className="hover:text-white transition-colors">{t.nav.education}</a>
            <a href="#skills" className="hover:text-white transition-colors">{t.nav.skills}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a>
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="px-2.5 py-1 rounded-md bg-slate-800/70 hover:bg-slate-800 text-xs font-medium text-slate-300 border border-slate-700/60 transition-colors flex items-center gap-1.5"
            >
              <Languages size={13} className="text-blue-400" />
              <span>{lang === 'en' ? 'العربية' : 'EN'}</span>
            </button>

            <a 
              href="https://drive.google.com/file/d/1LQYa5QLU3q8cB27JuKM2fqafNsjNXLTC/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition-all"
            >
              <Download size={13} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* HERO SECTION */}
        <section className="pt-16 sm:pt-24 pb-14 sm:pb-20 border-b border-slate-800/80">
          <div className="max-w-3xl">
            
            {/* Location & Work Type */}
            <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-4">
              <MapPin size={13} className="text-blue-400" />
              <span>{t.hero.location}</span>
            </div>

            {/* Name & Role */}
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
              {t.hero.name}
            </h1>
            
            <p className="text-lg sm:text-xl font-semibold text-blue-400 mb-6">
              {t.hero.role}
            </p>

            {/* Bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              {t.hero.bio}
            </p>

            {/* Key Technical Focus Areas */}
            <div className="flex flex-wrap gap-2 mb-8">
              {t.hero.specialties.map((spec, i) => (
                <span key={i} className="text-xs px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-300">
                  {spec}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a 
                href="https://drive.google.com/file/d/1LQYa5QLU3q8cB27JuKM2fqafNsjNXLTC/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all flex items-center gap-2 shadow-sm"
              >
                <Download size={15} />
                <span>{t.hero.btnResume}</span>
              </a>

              <a 
                href="#projects" 
                className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm border border-slate-700 transition-all flex items-center gap-2"
              >
                <span>{t.hero.btnProjects}</span>
                <ArrowRight size={15} className={isAr ? 'rotate-180' : ''} />
              </a>

              <a 
                href="mailto:ahmedekramy303@gmail.com"
                className="px-4 py-2.5 rounded-lg bg-transparent hover:bg-slate-800/60 text-slate-300 font-medium text-sm border border-slate-700/60 transition-all flex items-center gap-1.5"
              >
                <Mail size={15} />
                <span>{t.hero.btnContact}</span>
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-14 sm:py-20 border-b border-slate-800/80">
          <div className="max-w-3xl mb-8">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-2">
              {t.about.sectionTitle}
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              {t.about.headline}
            </h3>
            <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>
          </div>

          {/* Quick Highlights for HR & Tech Leads */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.about.highlights.map((h, i) => (
              <div key={i} className="clean-card p-4">
                <div className="text-sm font-bold text-white mb-1">{h.title}</div>
                <div className="text-xs text-slate-400 leading-relaxed">{h.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section id="experience" className="py-14 sm:py-20 border-b border-slate-800/80">
          <div className="max-w-3xl mb-10">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-2">
              {t.experience.sectionTitle}
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t.experience.headline}
            </h3>
          </div>

          <div className="space-y-6">
            {t.experience.jobs.map((job, idx) => (
              <div key={idx} className="clean-card p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-3">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white">{job.role}</h4>
                    <div className="text-xs sm:text-sm font-semibold text-blue-400 mt-0.5">{job.company}</div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 shrink-0">{job.period}</span>
                </div>

                <ul className="space-y-2 mb-5">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="text-slate-300 text-xs sm:text-sm leading-relaxed flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/70">
                  {job.skills.map((skill, i) => (
                    <span key={i} className="tech-pill">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section id="projects" className="py-14 sm:py-20 border-b border-slate-800/80">
          <div className="max-w-3xl mb-10">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-2">
              {t.projects.sectionTitle}
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t.projects.headline}
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projectsData.map((project, idx) => (
              <div key={idx} className={`clean-card overflow-hidden flex flex-col group ${project.colSpan}`}>
                
                {/* Project Image */}
                <div className="border-b border-slate-800/80 overflow-hidden">
                  <ProjectImage project={project} />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="mb-2.5">
                    <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h4>
                    <div className="text-xs font-medium text-slate-400 mt-0.5">
                      {project.subtitle}
                    </div>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 flex-1">
                    {project.desc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tech-pill">{tag}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-3 border-t border-slate-800/70 mt-auto">
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <span>{t.projects.viewDemo}</span>
                        <ExternalLink size={12} className={isAr ? 'mr-0.5' : 'ml-0.5'} />
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-1 text-xs font-bold text-slate-300 hover:text-white transition-colors"
                      >
                        <Github size={12} />
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
        <section id="education" className="py-14 sm:py-20 border-b border-slate-800/80">
          <div className="max-w-3xl mb-10">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-2">
              {t.education.sectionTitle}
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t.education.headline}
            </h3>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Academic Degree Card */}
            <div className="lg:col-span-5 clean-card p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                  <GraduationCap size={22} />
                </div>
                <span className="text-xs font-mono text-slate-400 block mb-1">{t.education.degree.period}</span>
                <h4 className="text-lg font-bold text-white mb-1">{t.education.degree.title}</h4>
                <div className="text-xs sm:text-sm font-semibold text-blue-400 mb-3">{t.education.degree.institution}</div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {t.education.degree.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/70 mt-5 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                <Check size={13} />
                <span>Verified B.Sc. Degree</span>
              </div>
            </div>

            {/* Certifications List */}
            <div className="lg:col-span-7 space-y-3.5">
              {t.education.certs.map((cert, idx) => (
                <div 
                  key={idx} 
                  className={`clean-card p-5 ${idx === 0 ? 'border-blue-500/40 bg-slate-900/80' : ''}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                    <div className="flex items-center gap-2">
                      <Award size={16} className={idx === 0 ? 'text-blue-400' : 'text-slate-400'} />
                      <h4 className="text-sm sm:text-base font-bold text-white">{cert.title}</h4>
                    </div>
                    <span className="text-xs font-mono text-blue-400 font-medium">{cert.issuer} ({cert.period})</span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pl-6">
                    {cert.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNICAL SKILLS */}
        <section id="skills" className="py-14 sm:py-20 border-b border-slate-800/80">
          <div className="max-w-3xl mb-10">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-2">
              {t.skills.sectionTitle}
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t.skills.headline}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.skills.groups.map((group, idx) => (
              <div key={idx} className="clean-card p-5">
                <h4 className="text-sm font-bold text-white mb-3 pb-2.5 border-b border-slate-800/80">
                  {group.category}
                </h4>
                <ul className="space-y-1.5">
                  {group.skills.map((skill, i) => (
                    <li key={i} className="text-xs font-mono text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-16 sm:py-24 text-center">
          <div className="max-w-xl mx-auto clean-card p-8 sm:p-10">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-2">
              {t.contact.sectionTitle}
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {t.contact.headline}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {t.contact.desc}
            </p>

            <div className="flex flex-wrap justify-center gap-2.5">
              <a 
                href="mailto:ahmedekramy303@gmail.com"
                className="px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all flex items-center gap-1.5 shadow-sm"
              >
                <Mail size={14} />
                <span>{t.contact.btnEmail}</span>
              </a>

              <a 
                href="https://wa.me/201069334256"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all flex items-center gap-1.5"
              >
                <MessageCircle size={14} />
                <span>{t.contact.btnWhatsApp}</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/ahmed-ai-dev/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-all flex items-center gap-1.5"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={copyEmail}
                className="px-3.5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs border border-slate-700 transition-all flex items-center gap-1"
                title="Copy Email"
              >
                {copiedEmail ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 py-6 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>{t.contact.footer.replace('{year}', new Date().getFullYear())}</div>
          <div className="flex items-center gap-5 text-slate-400">
            <a href="https://github.com/ahmedgeeter" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/ahmed-ai-dev/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:ahmedekramy303@gmail.com" className="hover:text-white transition-colors">ahmedekramy303@gmail.com</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Quick Action Button */}
      <a 
        href="https://wa.me/201069334256"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-105 transition-all z-50 flex items-center justify-center focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={22} />
      </a>

    </div>
  );
}
