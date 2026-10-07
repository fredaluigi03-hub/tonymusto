import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

interface BackdropProps {
  word: string;
  photo?: string;
  dark?: boolean;
}

/**
 * Fills its (relative) parent: an optional photo drifting slowly with the
 * scroll, plus an oversized script word that slides across behind the content.
 */
export const Backdrop: React.FC<BackdropProps> = ({ word, photo, dark = false }) => {
  const ref = useRef<HTMLDivElement>(null);
  const still = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], still ? [1.05, 1.05] : [1.18, 1.02]);
  const x = useTransform(scrollYProgress, [0, 1], still ? ['0%', '0%'] : ['12%', '-12%']);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      {photo && (
        <>
          <motion.img src={photo} alt="" loading="lazy" style={{ scale }} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/85 via-neutral-950/55 to-neutral-950/20" />
        </>
      )}
      <motion.span
        style={{ x }}
        className={`absolute bottom-[4%] right-0 whitespace-nowrap font-script leading-none text-[48vw] md:text-[30vw] ${
          dark || photo ? 'text-white/20' : 'text-gold/25'
        }`}
      >
        {word}
      </motion.span>
    </div>
  );
};
