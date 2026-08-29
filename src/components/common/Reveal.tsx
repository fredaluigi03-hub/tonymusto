import React from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, MotionValue } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';

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
  /** false = re-animates out when it leaves the viewport (comparsa/scomparsa) */
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
  once = false,
  className,
  as = 'div',
}) => {
  const Tag = motion[as];
  const from = offsets[direction];
  return (
    <Tag
      initial={{ opacity: 0, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      exit={{ opacity: 0, ...from }}
      viewport={{ once, margin: '-60px 0px -60px 0px' }}
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
