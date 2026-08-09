import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../lib/utils';

const Footer = () => {
  const { t, isRTL } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div>
              <p className="font-display font-semibold text-[var(--text-primary)]">Ahmed Gaiter</p>
              <p className="text-xs text-[var(--text-muted)]">AI Engineer</p>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="flex items-center gap-6"
          >
            <a
              href="https://www.linkedin.com/in/ahmed-ai-dev"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ahmedgeeter"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              GitHub
            </a>
            <a
              href="#contact"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              {t('footer.contact')}
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm text-[var(--text-muted)]"
          >
            © {year} Ahmed Gaiter
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
