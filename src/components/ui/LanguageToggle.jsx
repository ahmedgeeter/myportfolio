import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../lib/utils';

export default function LanguageToggle({ className, compact = false }) {
  const { locale, setLocale } = useLanguage();
  const isEn = locale === 'en';

  if (compact) {
    return (
      <motion.button
        type="button"
        onClick={() => setLocale(isEn ? 'ar' : 'en')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded-full',
          'bg-[var(--bg-secondary)] border border-[var(--border)]',
          'text-[var(--text-secondary)] hover:text-[var(--accent)]',
          'transition-colors duration-300',
          className
        )}
        aria-label="Toggle language"
      >
        <motion.div
          animate={{ rotate: isEn ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          <Globe size={18} className="text-[var(--accent)]" />
        </motion.div>
        <span className="text-sm font-medium">{isEn ? 'EN' : 'عربي'}</span>
      </motion.button>
    );
  }

  return (
    <div
      dir="ltr"
      className={cn(
        'relative h-10 w-[7.5rem] shrink-0 rounded-full',
        'bg-[var(--bg-secondary)] border border-[var(--border)]',
        'p-1 shadow-inner',
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {/* Animated Background Pill */}
      <motion.div
        className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--brand)] shadow-lg"
        initial={false}
        animate={{ 
          x: isEn ? 0 : 'calc(100% + 4px)',
        }}
        transition={{ 
          type: 'spring', 
          stiffness: 500, 
          damping: 30,
          mass: 1
        }}
        style={{ left: 4 }}
      />
      
      {/* Buttons */}
      <div className="relative z-10 flex h-full items-stretch">
        <button
          type="button"
          onClick={() => setLocale('en')}
          className={cn(
            'flex flex-1 items-center justify-center rounded-full',
            'text-xs font-semibold uppercase tracking-wider',
            'transition-colors duration-300',
            isEn ? 'text-[var(--bg-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
          )}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLocale('ar')}
          className={cn(
            'flex flex-1 items-center justify-center rounded-full',
            'text-xs font-semibold tracking-wider',
            'transition-colors duration-300',
            !isEn ? 'text-[var(--bg-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
          )}
        >
          عربي
        </button>
      </div>
    </div>
  );
}
