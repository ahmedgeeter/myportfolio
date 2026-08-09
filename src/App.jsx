import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ArrowRight, ExternalLink, Moon, Sun, Monitor, Languages, ChevronLeft, ChevronRight, Download, MessageCircle, GraduationCap, Award, Briefcase, Code } from 'lucide-react';
import { translations } from './translations';
import { motion } from 'framer-motion';

const ProjectImage = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const hasMultiple = Array.isArray(project.images) && project.images.length > 0;

  useEffect(() => {
    if (!hasMultiple || isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % project.images.length);
    }, 2500);
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
        className="relative w-full h-full min-h-[250px] group/carousel overflow-hidden" 
        style={{ maxHeight: '350px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {project.images.map((src, i) => (
          <img 
            key={i}
            src={src} 
            alt={`${project.title} screenshot ${i + 1}`}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 transform group-hover:scale-105 ${i === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-between px-3 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
          <button onClick={goToPrev} className="p-1.5 rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white">
            <ChevronLeft size={24} />
          </button>
          <button onClick={goToNext} className="p-1.5 rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[250px]" style={{ maxHeight: '350px' }}>
      <img 
        src={project.image} 
        alt={project.title} 
        loading="lazy"
        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
      />
    </div>
  );
};

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'system');
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    let effectiveTheme = theme;
    if (theme === 'system') {
      effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    root.classList.add(effectiveTheme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    window.document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = translations[lang];
  const isAr = lang === 'ar';

  const projectsData = [
    {
      title: t.projects.items[0].title, // Shiphny
      description: t.projects.items[0].desc,
      link: 'https://shiphny-ai-support.vercel.app/',
      codeLink: 'https://github.com/ahmedgeeter/shiphny-ai-support',
      image: '/project-shiphny.png',
      colSpan: 'md:col-span-2'
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
      colSpan: 'md:col-span-1'
    },
    {
      title: t.projects.items[2].title, // Coremont
      description: t.projects.items[2].desc,
      link: 'https://fullstack-gym-rag-chatbot.vercel.app/',
      codeLink: 'https://github.com/ahmedgeeter/fullstack-gym-rag-chatbot',
      image: '/project-coremont.png',
      colSpan: 'md:col-span-1'
    },
    {
      title: t.projects.items[3].title, // RAG
      description: t.projects.items[3].desc,
      link: 'https://ai-helpdesk-rag.vercel.app/',
      codeLink: 'https://github.com/ahmedgeeter/ai-rag-chatbot',
      image: '/project-rag.png',
      colSpan: 'md:col-span-2'
    },
    {
      title: t.projects.items[4].title, // Meridian
      description: t.projects.items[4].desc,
      link: 'https://ai-auditor-ocr-voice.vercel.app/',
      codeLink: 'https://github.com/ahmedgeeter/ai-auditor-ocr-voice',
      images: [
        '/project-ai-auditor/Screenshot%202026-04-13%20210744.png',
        '/project-ai-auditor/Screenshot%202026-04-13%20210815.png',
        '/project-ai-auditor/Screenshot%202026-04-13%20210827.png',
        '/project-ai-auditor/Screenshot%202026-04-13%20210850.png',
        '/project-ai-auditor/Screenshot%202026-04-13%20210857.png'
      ],
      colSpan: 'md:col-span-3'
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className={`min-h-screen bg-[#FDFDFD] dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900/50 dark:selection:text-blue-100 ${isAr ? 'font-arabic' : 'font-sans'}`}>
      
      {/* Header Navigation */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4 sticky top-0 z-50 bg-[#FDFDFD]/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-transparent dark:border-slate-800/50 transition-colors">
        <div className="text-xl font-bold tracking-tight">Ahmed Gaiter</div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t.nav.about}</a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t.nav.projects}</a>
          <a href="#tech" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t.nav.tech}</a>
          <a href="#education" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t.nav.education}</a>
        </nav>
        
        <div className="flex items-center gap-3 md:gap-4">
          <button 
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
          >
            <Languages size={16} />
            {lang === 'en' ? 'العربية' : 'EN'}
          </button>

          <div className="flex items-center p-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
            <button onClick={() => setTheme('light')} className={`p-1.5 rounded-md transition-colors ${theme === 'light' ? 'bg-white shadow-sm dark:bg-slate-800' : 'text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'}`} aria-label="Light mode">
              <Sun size={16} />
            </button>
            <button onClick={() => setTheme('system')} className={`p-1.5 rounded-md transition-colors ${theme === 'system' ? 'bg-white shadow-sm dark:bg-slate-800' : 'text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'}`} aria-label="System mode">
              <Monitor size={16} />
            </button>
            <button onClick={() => setTheme('dark')} className={`p-1.5 rounded-md transition-colors ${theme === 'dark' ? 'bg-white shadow-sm dark:bg-slate-800' : 'text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'}`} aria-label="Dark mode">
              <Moon size={16} />
            </button>
          </div>

          <a href="https://github.com/ahmedgeeter" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/ahmed-ai-dev/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden max-w-6xl mx-auto px-6 pt-24 md:pt-36 pb-24 md:pb-32 flex flex-col items-center justify-center min-h-[70vh]">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet-500/10 dark:bg-violet-600/10 rounded-full blur-3xl pointer-events-none -z-10 translate-x-20"></div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto z-10"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              {t.hero.headlinePart1} <span className="gradient-text">{t.hero.headlineHighlight}</span><br /> {t.hero.headlinePart2}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5">
              <a href="#projects" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 hover:scale-105 transition-all shadow-lg shadow-blue-900/10 dark:shadow-white/5">
                {t.hero.btnPortfolio} <ArrowRight size={18} className={isAr ? 'mr-2 rotate-180' : 'ml-2'} />
              </a>
              <a href="https://drive.google.com/file/d/1LQYa5QLU3q8cB27JuKM2fqafNsjNXLTC/view?usp=sharing" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-semibold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-105 transition-all shadow-sm">
                <Download size={18} className={isAr ? 'ml-2' : 'mr-2'} /> {t.hero.btnResume}
              </a>
            </div>
          </motion.div>
        </section>

        {/* About / Experience Section */}
        <section id="about" className="bg-slate-50 dark:bg-[#0a0f1c] border-y border-slate-200 dark:border-slate-800/50 py-24 md:py-32 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-16 lg:gap-20">
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:w-5/12"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-semibold text-sm mb-6">
                <Code size={16} />
                <span>{t.about.sectionTitle}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{t.about.headline}</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                {t.about.description}
              </p>
              <a href="mailto:ahmedekramy303@gmail.com" target="_blank" rel="noreferrer" className="inline-flex items-center font-bold text-lg text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 group transition-colors">
                {t.about.contact} <ArrowRight size={20} className={`transform transition-transform group-hover:translate-x-1 ${isAr ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2'}`} />
              </a>
            </motion.div>
            
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:w-7/12"
            >
              <div className="flex items-center gap-3 mb-10">
                <Briefcase size={28} className="text-blue-500" />
                <h3 className="text-2xl font-bold">{t.about.experience}</h3>
              </div>
              <div className={`relative border-slate-200 dark:border-slate-800 space-y-12 ${isAr ? 'border-r-2 pr-8 mr-3' : 'border-l-2 pl-8 ml-3'}`}>
                {t.experience.jobs.map((job, idx) => (
                  <div key={idx} className="relative">
                    <div className={`absolute w-4 h-4 rounded-full ring-4 ring-slate-50 dark:ring-[#0a0f1c] top-1.5 ${idx === 0 ? 'bg-blue-600 dark:bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.5)]' : 'bg-slate-300 dark:bg-slate-700'} ${isAr ? '-right-[41px]' : '-left-[41px]'}`}></div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">{job.title}</h4>
                      <span className="inline-block px-3 py-1 rounded-full bg-slate-200/50 dark:bg-slate-800 text-sm font-semibold text-slate-600 dark:text-slate-300 shrink-0">{job.date}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                      {job.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech" className="py-24 md:py-32 bg-white dark:bg-slate-950 transition-colors duration-300">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto px-6"
          >
            <div className="text-center mb-16 md:mb-20">
              <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">{t.tech.sectionTitle}</span>
              <h2 className="text-3xl md:text-5xl font-bold">
                {t.tech.headlinePart1} <span className="gradient-text">{t.tech.headlineHighlight}</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: t.tech.cat1, items: ['PyTorch', 'Scikit-learn', 'LLMs & NLP', 'RAG & FAISS', 'LangChain & Agentic Workflows'] },
                { title: t.tech.cat2, items: ['Python', 'JavaScript/TypeScript', 'React.js & Next.js', 'FastAPI & REST APIs', 'WebSockets'] },
                { title: t.tech.cat3, items: ['AWS (EC2, EKS, ECR)', 'Docker & Kubernetes', 'Terraform', 'CI/CD (GitHub Actions, ArgoCD)', 'Linux'] },
                { title: t.tech.cat4, items: ['PostgreSQL', 'Redis', 'Prisma', 'Vector Databases', 'Supabase'] }
              ].map((category, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">{category.title}</h3>
                  <ul className="space-y-3 text-slate-600 dark:text-slate-400 font-medium">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-500 transition-colors"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Education Section */}
        <section id="education" className="bg-slate-50 dark:bg-[#0a0f1c] border-y border-slate-200 dark:border-slate-800/50 py-24 md:py-32 transition-colors duration-300">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto px-6 text-center"
          >
            <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">{t.education.sectionTitle}</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-16">
              {t.education.headlinePart1} <span className="gradient-text">{t.education.headlineHighlight}</span>
            </h2>

            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-200/60 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-8 text-start">
              <div className="flex-1 w-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600 dark:text-blue-400">
                    <GraduationCap size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t.education.degree}</h3>
                    <p className="text-slate-500 dark:text-slate-400 font-medium mt-1">{t.education.university}</p>
                  </div>
                </div>
              </div>
              <div className="md:border-l md:border-slate-200 md:dark:border-slate-800 md:pl-8 flex-1 w-full">
                <div className="flex items-center gap-2 mb-3 text-slate-900 dark:text-white font-bold">
                  <Award size={20} className="text-violet-500" />
                  <h4>{t.education.certTitle}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t.education.certs}
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 md:py-32 max-w-6xl mx-auto px-6">
          <motion.div
             variants={fadeUp}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-center mb-16 md:mb-20">
              <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">{t.projects.sectionTitle}</span>
              <h2 className="text-3xl md:text-5xl font-bold">
                {t.projects.headlinePart1} <span className="gradient-text">{t.projects.headlineHighlight}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projectsData.map((project, idx) => (
                <div key={idx} className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl flex flex-col group overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-blue-900/10 transition-all duration-300 ${project.colSpan}`}>
                  <div className="bg-slate-100 dark:bg-slate-950 relative overflow-hidden border-b border-slate-200 dark:border-slate-800 w-full rounded-t-3xl">
                    <ProjectImage project={project} />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-6 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/50">
                      {project.link !== '#' && (
                        <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                          {t.projects.viewBtn} <ExternalLink size={16} className={isAr ? 'mr-1.5' : 'ml-1.5'} />
                        </a>
                      )}
                      {project.codeLink && project.codeLink !== '#' && (
                        <a href={project.codeLink} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-bold text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                          <Github size={16} className={isAr ? 'ml-1.5' : 'mr-1.5'} /> {t.projects.codeBtn}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="py-24 md:py-32 max-w-4xl mx-auto px-6 text-center border-t border-slate-200 dark:border-slate-800/50">
          <motion.div
             variants={fadeUp}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">{t.contact.sectionTitle}</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {t.contact.headlinePart1} <span className="gradient-text">{t.contact.headlineHighlight}</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              {t.contact.desc}
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <a href="mailto:ahmedekramy303@gmail.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 hover:scale-105 shadow-lg shadow-blue-500/20 transition-all">
                <Mail size={20} className={isAr ? 'ml-2' : 'mr-2'} /> {t.contact.btn}
              </a>
              <a href="https://wa.me/201069334256" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#20b858] hover:scale-105 shadow-lg shadow-[#25D366]/20 transition-all">
                <MessageCircle size={20} className={isAr ? 'ml-2' : 'mr-2'} /> {t.contact.btnWhatsApp}
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="bg-slate-50 dark:bg-[#0a0f1c] py-10 border-t border-slate-200 dark:border-slate-800/50 text-center transition-colors duration-300">
        <p className="text-slate-500 dark:text-slate-500 text-sm font-medium">
          {t.contact.footer.replace('{year}', new Date().getFullYear())}
        </p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/201069334256" 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-green-500/50 hover:shadow-[#25D366]/30"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
        </svg>
      </a>

    </div>
  );
}
