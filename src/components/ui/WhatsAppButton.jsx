import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../lib/utils';

const WhatsAppButton = ({ phoneNumber = '+201069334256' }) => {
  const { t, isRTL } = useLanguage();
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="group fixed bottom-6 end-6 z-[100] flex items-center justify-center"
      aria-label={t('whatsapp.tooltip')}
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" style={{ animationDuration: '2.2s' }} />
      <span className="absolute inset-[-6px] rounded-full border-2 border-[#25D366]/50 animate-pulse" />
      <span className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-2xl shadow-[#25D366]/40 ring-4 ring-white/10 dark:ring-black/20">
        <MessageCircle size={30} className="fill-white" />
      </span>
      <span
        className={cn(
          'pointer-events-none absolute end-full me-4 hidden md:block px-4 py-2 rounded-xl glass-panel border border-[var(--glass-border)] text-[#25D366] font-bold text-sm shadow-xl opacity-0 transition-all whitespace-nowrap group-hover:opacity-100',
          isRTL ? 'translate-x-2 group-hover:translate-x-0' : '-translate-x-2 group-hover:translate-x-0',
        )}
      >
        {t('whatsapp.tooltip')}
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
