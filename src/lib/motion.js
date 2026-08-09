export const fadeIn = (direction = 'up', delay = 0) => ({
  hidden: {
    y: direction === 'up' ? 32 : direction === 'down' ? -32 : 0,
    x: direction === 'left' ? 32 : direction === 'right' ? -32 : 0,
    opacity: 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.75,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

export const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 18,
      delay,
    },
  },
});

export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const viewportOnce = {
  once: true,
  margin: '-60px 0px',
  amount: 0.2,
};
