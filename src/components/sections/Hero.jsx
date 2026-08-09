import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { cn } from '../../lib/utils';

const bootSequence = [
  "> Initializing AI backend...",
  "> Connecting to WebSockets...",
  "> Loading neural models...",
  "> Status: System Production-Ready."
];

const TerminalEmulator = () => {
  const [lines, setLines] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < bootSequence.length) {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, bootSequence[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, 800); // delay between lines
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <div className="w-full max-w-md bg-[#050505] border border-[var(--border)] rounded-lg overflow-hidden font-mono text-xs sm:text-sm mt-8 shadow-card">
      <div className="flex items-center px-3 py-2 bg-[var(--bg-secondary)] border-b border-[var(--border)] gap-2">
        <Terminal size={14} className="text-[var(--text-muted)]" />
        <span className="text-[var(--text-muted)]">system_boot.sh</span>
      </div>
      <div className="p-4 text-[var(--accent-light)] min-h-[120px]">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            className={cn(
              "mb-1",
              i === bootSequence.length - 1 ? "text-green-400 font-medium" : "text-[var(--text-secondary)]"
            )}
          >
            {line}
          </motion.div>
        ))}
        {currentIndex < bootSequence.length && (
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-3 bg-[var(--accent-light)] ml-1"
          />
        )}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 sm:pt-24 lg:pt-0"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-mesh opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center min-h-[calc(100vh-8rem)] py-12 sm:py-16 lg:py-20">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 sm:gap-8 lg:gap-10 order-2 lg:order-1"
          >
            {/* Title */}
            <div className="space-y-3 sm:space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-[var(--accent-light)] font-mono text-xs sm:text-sm tracking-wider uppercase"
              >
                Senior AI & Backend Engineer
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight"
              >
                I Engineer <br className="hidden sm:block" />
                <span className="accent-mark">AI Backends</span><br />
                That Survive Reality.
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] max-w-xl leading-relaxed mt-4"
              >
                Architecting high-performance, low-latency, and highly secure AI systems. Specialized in Python, Node.js, and advanced neural implementations.
              </motion.p>
            </div>

            {/* Terminal Emulator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <TerminalEmulator />
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mt-4"
            >
              <a
                href="#projects"
                className="group btn-primary inline-flex items-center justify-center gap-2 rounded-lg px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-medium"
              >
                View Architecture
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a
                href="#sandbox"
                className="group btn-secondary inline-flex items-center justify-center gap-2 rounded-lg px-5 sm:px-7 py-3 sm:py-4 text-sm font-medium"
              >
                Test Live Sandbox
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <motion.div 
              className="relative group"
            >
              {/* Subtle Glow Effect */}
              <div 
                className="absolute -inset-6 sm:-inset-10 bg-[var(--accent)] blur-[80px] rounded-full opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
              />
              
              {/* Image Container */}
              <div className="relative">
                {/* Frame - Circular with subtle border */}
                <div className="absolute -inset-2 sm:-inset-3 rounded-full border border-[var(--border)] transition-colors duration-500 group-hover:border-[var(--accent-light)]" />
                
                {/* Image - Perfect Circle with Grayscale -> Color hover */}
                <div className="relative w-[240px] sm:w-[280px] md:w-[320px] lg:w-[380px] aspect-square rounded-full overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border)]">
                  <img
                    src="/profile.png"
                    alt="Ahmed Gaiter"
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                    decoding="async"
                    fetchpriority="high"
                    loading="eager"
                  />
                  {/* Subtle inner shadow for depth */}
                  <div className="absolute inset-0 shadow-inset rounded-full pointer-events-none" />
                </div>
                
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden sm:flex"
      >
        <span className="text-xs font-mono text-[var(--text-muted)] tracking-wider">SYSTEM ONLINE</span>
        <div className="w-6 h-10 rounded-full border border-[var(--border)] flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-[var(--accent-light)]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
