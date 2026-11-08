import React, { useState, useEffect } from 'react';
import { 
  Mail, Github, Linkedin, ExternalLink, 
  Languages, ChevronLeft, ChevronRight, Download, MessageCircle, 
  Check, Copy, MapPin
} from 'lucide-react';
import { translations } from './translations';

const ProjectPreview = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultiple = Array.isArray(project.images) && project.images.length > 1;

  if (hasMultiple) {
    return (
      <div className="relative w-full h-52 sm:h-60 rounded-xl overflow-hidden bg-slate-950/80 border border-slate-800/80 group">
        {project.images.map((src, i) => (
          <img 
            key={i}
            src={src} 
            alt={`${project.title} preview ${i + 1}`}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${i === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-between px-2.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={(e) => { e.preventDefault(); setCurrentIndex(prev => prev === 0 ? project.images.length - 1 : prev - 1); }}
            className="p-1.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 border border-slate-700/60"
            aria-label="Previous"
          >
            <ChevronLeft size={16} />
          </button>
          <button 
            onClick={(e) => { e.preventDefault(); setCurrentIndex(prev => (prev + 1) % project.images.length); }}
            className="p-1.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 border border-slate-700/60"
            aria-label="Next"
          >
            <ChevronRight size={16} />
          </button>
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
          {project.images.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all ${i === currentIndex ? 'w-4 bg-blue-500' : 'w-1.5 bg-white/30'}`} 
            />
          ))}
        </div>
      </div>
    );
  }

  if (project.isApi) {
    return (
      <div className="w-full h-52 sm:h-60 rounded-xl bg-[#090d16] border border-slate-800/80 p-4 flex flex-col justify-center font-mono text-xs">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] text-slate-400">
          <span className="font-semibold text-slate-300">guardrail_service.py</span>
          <span className="text-[10px] text-blue-400">FastAPI • Pydantic v2</span>
        </div>
        <pre className="text-slate-300 leading-relaxed text-[11px] overflow-x-auto font-mono py-1">
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
    <div className="w-full h-52 sm:h-60 rounded-xl overflow-hidden bg-slate-950/80 border border-slate-800/80">
      <img 
        src={project.image} 
        alt={project.title} 
        loading="lazy"
        className="w-full h-full object-cover object-top"
      />
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState('en');
  const [copiedEmail, setCopiedEmail] = useState(false);

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
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className={`min-h-screen bg-[#070b14] text-slate-200 ${isAr ? 'rtl font-arabic' : 'ltr font-sans'}`}>
      
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#070b14]/85 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          <a href="#" className="text-base font-bold text-white hover:text-blue-400 transition-colors">
            Ahmed Gaiter
          </a>

          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a>
            <a href="#projects" className="hover:text-white transition-colors">{t.nav.projects}</a>
            <a href="#experience" className="hover:text-white transition-colors">{t.nav.experience}</a>
            <a href="#skills" className="hover:text-white transition-colors">{t.nav.skills}</a>
            <a href="#education" className="hover:text-white transition-colors">{t.nav.education}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-3">
            <button 
              onClick={toggleLanguage}
              className="px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-all"
            >
              <Languages size={13} className="text-blue-400" />
              <span>{lang === 'en' ? 'عربي' : 'EN'}</span>
            </button>

            <a 
              href="/Ahmed_Gaiter_AI_Engineer_CV.pdf"
              download="Ahmed_Gaiter_AI_Engineer_CV.pdf"
              className="px-3.5 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
            >
              <Download size={13} />
              <span>{t.nav.resume}</span>
            </a>
          </div>

        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-20">
        
        {/* HERO SECTION */}
        <section className="pt-4 sm:pt-8">
          
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-4">
            <MapPin size={13} className="text-blue-400" />
            <span>{t.hero.location}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            {t.hero.name}
          </h1>

          <p className="text-lg sm:text-xl font-semibold text-blue-400 mb-5">
            {t.hero.role}
          </p>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-6 font-normal">
            {t.hero.bio}
          </p>

          <div className="flex flex-wrap gap-2 mb-8 max-w-2xl">
            {t.hero.stack.map((item, i) => (
              <span key={i} className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a 
              href="/Ahmed_Gaiter_AI_Engineer_CV.pdf"
              download="Ahmed_Gaiter_AI_Engineer_CV.pdf"
              className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all flex items-center gap-2 shadow-sm"
            >
              <Download size={15} />
              <span>{t.hero.btnResume}</span>
            </a>

            <a 
              href="mailto:ahmedekramy303@gmail.com"
              className="px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-xs transition-all flex items-center gap-2"
            >
              <Mail size={14} />
              <span>{t.hero.btnEmail}</span>
            </a>

            <a 
              href="https://wa.me/201069334256"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-lg bg-emerald-700/80 hover:bg-emerald-600 text-white font-semibold text-xs transition-all flex items-center gap-2"
            >
              <MessageCircle size={14} />
              <span>{t.hero.btnWhatsApp}</span>
            </a>

            <button
              onClick={copyEmail}
              className="px-3.5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 text-xs font-mono transition-all flex items-center gap-1.5"
              title="Copy Email"
            >
              {copiedEmail ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
              <span>{copiedEmail ? t.hero.copied : 'ahmedekramy303@gmail.com'}</span>
            </button>
          </div>

        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="pt-4 border-t border-slate-800/80">
          <div className="mb-6">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">
              {t.about.sectionTitle}
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t.about.headline}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed mb-8">
            <p className="bg-slate-900/40 p-5 rounded-xl border border-slate-800/80">
              {t.about.p1}
            </p>
            <p className="bg-slate-900/40 p-5 rounded-xl border border-slate-800/80">
              {t.about.p2}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.about.highlights.map((h, i) => (
              <div key={i} className="bg-slate-900/30 p-4 rounded-xl border border-slate-800/70">
                <h4 className="text-xs font-bold text-white mb-1.5">
                  {h.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="pt-4 border-t border-slate-800/80">
          <div className="mb-8">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">
              {t.projects.sectionTitle}
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t.projects.headline}
            </h3>
          </div>

          <div className="space-y-8">
            {t.projects.items.map((project) => (
              <div key={project.id} className="bg-slate-900/40 rounded-2xl border border-slate-800/80 p-5 sm:p-7">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  <div className="lg:col-span-5 w-full">
                    <ProjectPreview project={project} />
                  </div>

                  <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-3">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                        {project.title}
                      </h4>
                      <p className="text-xs font-medium text-blue-400 mb-3">
                        {project.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {project.desc}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-3 border-t border-slate-800/80">
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noreferrer"
                          className="px-3.5 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
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
                          className="px-3.5 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700/70 flex items-center gap-1.5 transition-all"
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

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="pt-4 border-t border-slate-800/80">
          <div className="mb-8">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">
              {t.experience.sectionTitle}
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t.experience.headline}
            </h3>
          </div>

          <div className="space-y-5">
            {t.experience.jobs.map((job, idx) => (
              <div key={idx} className="bg-slate-900/30 rounded-xl border border-slate-800/80 p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3 pb-2.5 border-b border-slate-800">
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {job.role}
                    </h4>
                    <span className="text-xs font-medium text-slate-400">
                      {job.company}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-blue-400">
                    {job.period}
                  </span>
                </div>

                <ul className="space-y-1.5 mb-4">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {job.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="text-[10.5px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800/80 text-slate-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="pt-4 border-t border-slate-800/80">
          <div className="mb-8">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">
              {t.skills.sectionTitle}
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t.skills.headline}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.skills.groups.map((group, idx) => (
              <div key={idx} className="bg-slate-900/30 rounded-xl border border-slate-800/80 p-5">
                <h4 className="text-xs font-bold text-white mb-3 pb-2 border-b border-slate-800">
                  {group.title}
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

        {/* EDUCATION SECTION */}
        <section id="education" className="pt-4 border-t border-slate-800/80">
          <div className="mb-8">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">
              {t.education.sectionTitle}
            </h2>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t.education.headline}
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-1 bg-slate-900/30 rounded-xl border border-slate-800/80 p-5 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-slate-400 block mb-1">{t.education.degree.period}</span>
                <h4 className="text-base font-bold text-white mb-1">
                  {t.education.degree.title}
                </h4>
                <span className="text-xs font-semibold text-blue-400 block mb-2">
                  {t.education.degree.institution}
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {t.education.degree.desc}
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-3">
              {t.education.certs.map((cert, i) => (
                <div key={i} className="bg-slate-900/30 rounded-xl border border-slate-800/80 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h5 className="text-sm font-bold text-white mb-0.5">
                      {cert.title}
                    </h5>
                    <span className="text-xs font-medium text-blue-400 block mb-1">
                      {cert.issuer} • {cert.year}
                    </span>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="pt-4 border-t border-slate-800/80 text-center">
          <div className="max-w-xl mx-auto bg-slate-900/40 rounded-2xl border border-slate-800/80 p-8 sm:p-10">
            <h2 className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-2">
              {t.contact.sectionTitle}
            </h2>
            <h3 className="text-2xl font-bold text-white mb-2">
              {t.contact.headline}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              {t.contact.desc}
            </p>

            <div className="flex flex-wrap justify-center gap-2.5 mb-6">
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
                className="px-4 py-2.5 rounded-lg bg-emerald-700/80 hover:bg-emerald-600 text-white font-semibold text-xs transition-all flex items-center gap-1.5"
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
                <span>{t.contact.btnLinkedIn}</span>
              </a>

              <a 
                href="https://github.com/ahmedgeeter"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-all flex items-center gap-1.5"
              >
                <Github size={14} />
                <span>{t.contact.btnGitHub}</span>
              </a>

              <a 
                href="/Ahmed_Gaiter_AI_Engineer_CV.pdf"
                download="Ahmed_Gaiter_AI_Engineer_CV.pdf"
                className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-all flex items-center gap-1.5"
              >
                <Download size={14} />
                <span>{t.contact.btnResume}</span>
              </a>
            </div>

            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
              <span>ahmedekramy303@gmail.com</span>
              <button onClick={copyEmail} className="text-blue-400 hover:text-blue-300">
                {copiedEmail ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
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

      {/* Subtle Floating WhatsApp Button */}
      <a 
        href="https://wa.me/201069334256"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-105 transition-all z-50 flex items-center justify-center focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={20} />
      </a>

    </div>
  );
}
