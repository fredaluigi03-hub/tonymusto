import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, MotionValue } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';

/**
 * Sideways reveals only make sense next to the two-column layouts, which exist
 * from `lg` up. Below that a 50px horizontal slide pushes the element past the
 * viewport edge and gets clipped, so it falls back to a vertical reveal.
 * Reduced-motion users get no offset at all.
 */
const matches = (query: string) =>
  typeof window !== 'undefined' && window.matchMedia(query).matches;

/**
 * Touch devices reveal once and stay revealed.
 *
 * With `once: false` anything not currently intersecting is pushed back to
 * opacity 0, and mobile browsers defer IntersectionObserver callbacks until a
 * momentum scroll settles — so a flick lands you on a section that is still
 * blank and only appears once you nudge it. Desktop keeps the appear/disappear
 * behaviour, where a wheel scroll fires the observer continuously.
 *
 * Evaluated once at module load: a device does not grow a mouse at runtime.
 */
export const IS_TOUCH = matches('(hover: none)');

export const REVEAL_ONCE = IS_TOUCH;

/**
 * One shared trigger point for every scroll reveal.
 *
 * On touch this previously used margin '0px', which fires the moment the
 * element's top edge crosses the bottom of the viewport — while it is still
 * entirely off-screen. The 0.65s animation was over before you scrolled it into
 * view, so the content just appeared fully formed and the site looked frozen.
 * The -120px bottom inset delays the trigger until the element is properly on
 * screen, and `once: true` means a late observer callback can only make the
 * animation play a little late, never leave the section blank.
 *
 * Margins must be in px: framer rejects percentage rootMargins.
 */
export const REVEAL_VIEWPORT = IS_TOUCH
  ? ({ once: true, margin: '0px 0px -120px 0px' } as const)
  : ({ once: false, margin: '-50px' } as const);

/**
 * Reduced motion: drop the travel, keep a plain cross-fade. A fade is the
 * accepted substitute for motion, and it keeps the page from looking dead.
 */
export const REVEAL_STATIC = matches('(prefers-reduced-motion: reduce)');

const useRevealDirection = (direction: Direction): Direction => {
  // Read synchronously on the first render: framer captures `initial` at mount,
  // so a value that only arrives in an effect would leave the wrong offset stuck.
  const [narrow, setNarrow] = useState(() => matches('(max-width: 1023px)'));
  const [reduced, setReduced] = useState(() => matches('(prefers-reduced-motion: reduce)'));

  useEffect(() => {
    const narrowMq = window.matchMedia('(max-width: 1023px)');
    const motionMq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => {
      setNarrow(narrowMq.matches);
      setReduced(motionMq.matches);
    };
    sync();
    narrowMq.addEventListener('change', sync);
    motionMq.addEventListener('change', sync);
    return () => {
      narrowMq.removeEventListener('change', sync);
      motionMq.removeEventListener('change', sync);
    };
  }, []);

  if (reduced) return 'none';
  if (narrow && (direction === 'left' || direction === 'right')) return 'up';
  return direction;
};

const offsets: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 50 },
  right: { x: -50 },
  scale: { scale: 0.94 },
  none: {},
};

interface RevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  /** Overrides the shared default (once on touch, repeat on desktop). */
  once?: boolean;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'span';
}

/** Scroll-driven appear/disappear wrapper used across the whole site. */
export const Reveal: React.FC<RevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.65,
  once,
  className,
  as = 'div',
}) => {
  const Tag = motion[as];
  const resolved = useRevealDirection(direction);

  const from = REVEAL_STATIC ? {} : offsets[resolved];
  return (
    <Tag
      initial={{ opacity: 0, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      exit={{ opacity: 0, ...from }}
      viewport={{ ...REVEAL_VIEWPORT, once: once ?? REVEAL_VIEWPORT.once }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Tag>
  );
};

/** Staggered children: index-based delay helper. */
export const stagger = (index: number, step = 0.08) => index * step;

/** Vertical parallax bound to the element's own scroll progress. */
export const useParallax = (ref: React.RefObject<HTMLElement | null>, distance = 60) => {
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  return useTransform(scrollYProgress, [0, 1], [distance, -distance]);
};

/** Mouse-tracked 3D tilt. Returns handlers + motion values for rotateX/rotateY/glare. */
export const useTilt = (max = 12) => {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 220, damping: 20, mass: 0.4 };

  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring);
  const glareX = useTransform(px, [0, 1], ['0%', '100%']);
  const glareY = useTransform(py, [0, 1], ['0%', '100%']);

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const onMouseLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return { rotateX, rotateY, glareX, glareY, onMouseMove, onMouseLeave, px, py } as {
    rotateX: MotionValue<number>;
    rotateY: MotionValue<number>;
    glareX: MotionValue<string>;
    glareY: MotionValue<string>;
    onMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
    onMouseLeave: () => void;
    px: MotionValue<number>;
    py: MotionValue<number>;
  };
};
