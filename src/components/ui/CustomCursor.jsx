import React, { useEffect, useRef } from 'react';

const SELECTOR =
  'a,button,input,textarea,select,[role="button"],[data-cursor-hover],.cursor-pointer,.github-card-lift,.project-card-tilt,.btn-hero-primary';

function shouldUseCustomCursor() {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  if (!window.matchMedia('(pointer: fine)').matches) return false;
  if (window.innerWidth < 768) return false;
  return true;
}

/** Lerp factors tuned to feel close to native pointer: core almost locked, halo trails softly */
const LERP = {
  nucleus: 0.97,
  frame: 0.88,
  bloom: 0.22,
};

export default function CustomCursor() {
  const nucleusRef = useRef(null);
  const frameRef = useRef(null);
  const bloomRef = useRef(null);
  const rootRef = useRef(null);
  const nucleusPos = useRef({ x: 0, y: 0 });
  const framePos = useRef({ x: 0, y: 0 });
  const bloomPos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);
  const hoverRef = useRef(false);
  const activeRef = useRef(false);
  const rotRef = useRef(0);

  useEffect(() => {
    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      let el = e.target;
      if (el?.nodeType !== 1) el = el?.parentElement;
      const interactive = el?.closest?.(SELECTOR);
      const next = !!interactive;
      if (next !== hoverRef.current) {
        hoverRef.current = next;
        rootRef.current?.classList.toggle('custom-cursor--hover', next);
      }
    };

    const onLeaveWin = () => {
      hoverRef.current = false;
      rootRef.current?.classList.remove('custom-cursor--hover');
    };

    const tick = () => {
      if (!activeRef.current) return;
      const tx = target.current.x;
      const ty = target.current.y;
      const h = hoverRef.current;

      nucleusPos.current.x += (tx - nucleusPos.current.x) * LERP.nucleus;
      nucleusPos.current.y += (ty - nucleusPos.current.y) * LERP.nucleus;
      framePos.current.x += (tx - framePos.current.x) * LERP.frame;
      framePos.current.y += (ty - framePos.current.y) * LERP.frame;
      bloomPos.current.x += (tx - bloomPos.current.x) * LERP.bloom;
      bloomPos.current.y += (ty - bloomPos.current.y) * LERP.bloom;

      rotRef.current += h ? 0.9 : 0.35;

      const nx = nucleusPos.current.x;
      const ny = nucleusPos.current.y;
      const fx = framePos.current.x;
      const fy = framePos.current.y;
      const bx = bloomPos.current.x;
      const by = bloomPos.current.y;

      const ns = h ? 0.85 : 1;
      const fs = h ? 1.35 : 1;
      const bloomS = h ? 1.2 : 1;

      if (nucleusRef.current) {
        nucleusRef.current.style.transform = `translate3d(${nx}px,${ny}px,0) translate(-50%,-50%) scale(${ns})`;
      }
      if (frameRef.current) {
        const diamond = 45 + rotRef.current * 0.015;
        frameRef.current.style.transform = `translate3d(${fx}px,${fy}px,0) translate(-50%,-50%) rotate(${diamond}deg) scale(${fs})`;
      }
      if (bloomRef.current) {
        bloomRef.current.style.transform = `translate3d(${bx}px,${by}px,0) translate(-50%,-50%) scale(${bloomS})`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    const stop = () => {
      if (!activeRef.current) return;
      activeRef.current = false;
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeaveWin);
      document.body.classList.remove('custom-cursor-on');
    };

    const start = () => {
      if (!shouldUseCustomCursor()) {
        stop();
        return;
      }
      if (activeRef.current) return;
      activeRef.current = true;
      document.body.classList.add('custom-cursor-on');
      window.addEventListener('mousemove', onMove, { passive: true });
      document.documentElement.addEventListener('mouseleave', onLeaveWin);
      rafRef.current = requestAnimationFrame(tick);
    };

    const onResize = () => {
      if (shouldUseCustomCursor()) start();
      else stop();
    };

    onResize();
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      window.removeEventListener('resize', onResize);
      stop();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="custom-cursor-root pointer-events-none fixed inset-0 z-[10050] hidden md:block"
      aria-hidden
    >
      <div ref={bloomRef} className="custom-cursor-bloom pointer-events-none fixed left-0 top-0 will-change-transform" />
      <div ref={frameRef} className="custom-cursor-frame pointer-events-none fixed left-0 top-0 will-change-transform" />
      <div ref={nucleusRef} className="custom-cursor-nucleus pointer-events-none fixed left-0 top-0 will-change-transform" />
    </div>
  );
}
