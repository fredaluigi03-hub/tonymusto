import React, { useEffect, useRef, useState } from 'react';

interface StackingBlockProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * A section that stays put while the next one slides up over it. Stacking
 * order follows DOM order, so blocks just go one after another.
 *
 * A plain `top: 0` would freeze a block taller than the screen with its lower
 * half never shown. Sticking at `viewport - height` instead lets it scroll
 * through completely and pins it only once its bottom edge is on screen.
 */
export const StackingBlock: React.FC<StackingBlockProps> = ({ id, className = '', children }) => {
  const ref = useRef<HTMLElement>(null);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setTop(Math.min(0, window.innerHeight - el.offsetHeight));
    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener('resize', update);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      style={{ top }}
      className={`sticky min-h-svh rounded-t-[28px] md:rounded-t-[44px] shadow-[0_-24px_60px_-24px_rgba(20,20,20,0.28)] ${className}`}
    >
      {children}
    </section>
  );
};
