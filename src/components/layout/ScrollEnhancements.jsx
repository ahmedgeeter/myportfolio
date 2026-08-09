import React, { useEffect, useRef } from 'react';

export default function ScrollEnhancements() {
  const barRef = useRef(null);
  const rafRef = useRef(0);
  const lastRef = useRef(-1);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const main = document.querySelector('main');
    if (!main) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-inview');
          }
        });
      },
      { rootMargin: '-5% 0px -8% 0px', threshold: [0, 0.12, 0.25] },
    );
    const wireSection = (s) => {
      if (!(s instanceof HTMLElement) || s.tagName !== 'SECTION') return;
      if (s.id === 'home') return;
      if (s.dataset.revealWired === '1') return;
      s.dataset.revealWired = '1';
      s.classList.add('section-reveal-init');
      io.observe(s);
    };

    main.querySelectorAll('section').forEach(wireSection);

    const mo = new MutationObserver(() => {
      main.querySelectorAll('section').forEach(wireSection);
    });
    mo.observe(main, { childList: true, subtree: true });

    const tick = () => {
      if (mq.matches) {
        if (barRef.current) barRef.current.style.transform = 'scaleX(0)';
        return;
      }
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, scrollTop / max) : 0;
      if (Math.abs(p - lastRef.current) > 0.002 && barRef.current) {
        lastRef.current = p;
        barRef.current.style.transform = `scaleX(${p})`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      mo.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <div
      ref={barRef}
      className="progress-bar-scroll fixed top-0 start-0 z-[60] h-[2px] w-full origin-left rtl:origin-right bg-gradient-to-r from-teal-500 via-teal-400 to-slate-500 shadow-[0_0_10px_rgba(13,148,136,0.25)] pointer-events-none"
      style={{ transform: 'scaleX(0)' }}
      aria-hidden
    />
  );
}
