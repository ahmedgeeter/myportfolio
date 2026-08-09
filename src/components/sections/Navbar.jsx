import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Github, Linkedin, Hexagon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../lib/utils';
import LanguageToggle from '../ui/LanguageToggle';

// Stable navigation config
const NAV_ITEMS = [
  { id: 'projects', href: '#projects', label: 'projects', num: '01' },
  { id: 'stack', href: '#stack', label: 'skills', num: '02' },
  { id: 'github', href: '#github', label: 'github', num: '03' },
  { id: 'about', href: '#about', label: 'about', num: '04' },
  { id: 'contact', href: '#contact', label: 'contact', num: '05' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState('');
  const { isDarkMode, toggleTheme } = useTheme();
  const { t } = useLanguage();

  // Stable scroll handler
  useEffect(() => {
    let rafId = null;
    let lastScrollY = 0;

    const handleScroll = () => {
      if (rafId) return;
      
      rafId = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        if (Math.abs(currentScrollY - lastScrollY) > 5) {
          setScrolled(currentScrollY > 50);
          lastScrollY = currentScrollY;
        }
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Stable intersection observer for active section with improved accuracy
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -70% 0px',
      threshold: [0, 0.25, 0.5],
    };

    const observerCallback = (entries) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        // Pick the one with highest intersection ratio
        const mostVisible = visibleEntries.reduce((prev, current) =>
          prev.intersectionRatio > current.intersectionRatio ? prev : current
        );
        setActiveId(mostVisible.target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = useCallback((href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pt-3 sm:pt-4">
          <div
            className={cn(
              'flex items-center justify-between gap-2 sm:gap-4 rounded-full px-3 sm:px-4 py-2 sm:py-3 transition-all duration-300',
              scrolled
                ? 'glass-panel shadow-lg'
                : 'bg-transparent'
            )}
          >
            {/* Logo - Text Only */}
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-2 sm:gap-3 group shrink-0"
            >
              <div className="hidden sm:flex flex-col items-start">
                <span className="text-sm font-display font-semibold text-[var(--text-primary)] leading-tight whitespace-nowrap">
                  Ahmed Gaiter
                </span>
                <span className="text-[10px] text-[var(--text-muted)] font-mono whitespace-nowrap">
                  AI Engineer
                </span>
              </div>
              <span className="sm:hidden text-lg font-display font-semibold text-[var(--text-primary)]">
                AG
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center gap-1 p-1.5 rounded-full bg-[var(--bg-secondary)]/80 border border-[var(--border)] backdrop-blur-sm">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full',
                      activeId === item.id
                        ? 'text-white font-semibold bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-md shadow-emerald-500/25'
                        : 'text-[var(--text-secondary)] hover:text-white hover:bg-gradient-to-r hover:from-emerald-500/90 hover:to-emerald-600/90'
                    )}
                  >
                    <span className="relative z-10">{t(`nav.${item.label}`)}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              {/* Social */}
              <div className="hidden sm:flex items-center gap-1">
                <a
                  href="https://github.com/ahmedgeeter"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--glass-hover)] transition-all duration-200"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ahmed-ai-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full text-[var(--text-secondary)] hover:text-[#0077B5] hover:bg-[var(--glass-hover)] transition-all duration-200"
                >
                  <Linkedin size={18} />
                </a>
              </div>
              
              {/* Language Toggle */}
              <div className="hidden sm:block">
                <LanguageToggle />
              </div>
              <div className="sm:hidden">
                <LanguageToggle compact />
              </div>
              
              {/* Theme Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all duration-200"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)]"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-[var(--bg-primary)]/95 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />
            
            <nav className="relative h-full flex flex-col pt-24 pb-8 px-6 overflow-auto">
              <div className="flex-1 flex flex-col justify-center gap-1">
                {NAV_ITEMS.map((item, idx) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={cn(
                      'flex items-center gap-4 py-4 px-4 rounded-xl transition-all duration-300',
                      activeId === item.id
                        ? 'bg-gradient-to-r from-emerald-500/20 to-emerald-600/10 text-emerald-400 border border-emerald-500/30'
                        : 'text-[var(--text-secondary)] border-b border-[var(--border)]'
                    )}
                  >
                    <span className="text-sm font-mono opacity-50">{item.num}</span>
                    <span className="text-2xl sm:text-3xl font-display font-semibold">
                      {t(`nav.${item.label}`)}
                    </span>
                  </motion.a>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-6 border-t border-[var(--border)]">
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/ahmedgeeter"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ahmed-ai-dev"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
                <LanguageToggle compact />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
