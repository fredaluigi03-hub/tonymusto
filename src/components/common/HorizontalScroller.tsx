import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, MoveHorizontal } from 'lucide-react';

interface HorizontalScrollerProps {
  children: React.ReactNode;
  /** Extra classes on the scrolling track. */
  className?: string;
  /** Hint label shown under the track. */
  hint?: string;
  ariaLabel?: string;
  /** Classes on the arrows/progress row (use to keep controls inside the page gutter). */
  controlsClassName?: string;
}

/**
 * Full-bleed horizontal carousel: native CSS scroll-snap + drag-to-pan + arrows.
 * ponytail: native scroll-snap instead of a carousel lib; swap only if we need
 * autoplay/loop/virtualisation.
 */
export const HorizontalScroller: React.FC<HorizontalScrollerProps> = ({
  children,
  className = '',
  hint = 'Trascina o scorri lateralmente per esplorare',
  ariaLabel = 'Carosello',
  controlsClassName = '',
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const drag = useRef({ active: false, startX: 0, startLeft: 0, moved: false });

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(max - el.scrollLeft <= 2);
  }, []);

  useEffect(() => {
    sync();
    const el = trackRef.current;
    if (!el) return;
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => ro.disconnect();
  }, [sync, children]);

  const scrollByPage = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.8), behavior: 'smooth' });
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el || e.pointerType === 'touch') return; // touch already pans natively
    drag.current = { active: true, startX: e.clientX, startLeft: el.scrollLeft, moved: false };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el || !drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.startLeft - dx;
  };

  const endDrag = () => {
    drag.current.active = false;
  };

  // Suppress the click that ends a drag, so buttons inside cards don't fire.
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.stopPropagation();
      e.preventDefault();
      drag.current.moved = false;
    }
  };

  return (
    <div className="relative" role="region" aria-label={ariaLabel}>
      <div
        ref={trackRef}
        onScroll={sync}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
        className={`flex gap-6 overflow-x-auto overscroll-x-contain snap-x snap-mandatory scroll-smooth pb-6 pt-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden select-none cursor-grab active:cursor-grabbing ${className}`}
      >
        {children}
      </div>

      {/* Edge fades so the track reads as continuing off-canvas */}
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[var(--scroller-fade,#ffffff)] to-transparent transition-opacity duration-300 ${atStart ? 'opacity-0' : 'opacity-100'}`}
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[var(--scroller-fade,#ffffff)] to-transparent transition-opacity duration-300 ${atEnd ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* Controls + progress rail */}
      <div className={`mt-2 flex items-center gap-4 ${controlsClassName}`}>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByPage(-1)}
            disabled={atStart}
            aria-label="Scorri indietro"
            className="p-2.5 rounded-full border border-neutral-300 bg-white text-neutral-800 hover:text-gold hover:border-gold disabled:opacity-30 disabled:hover:text-neutral-800 disabled:hover:border-neutral-300 transition-all shadow-2xs"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollByPage(1)}
            disabled={atEnd}
            aria-label="Scorri avanti"
            className="p-2.5 rounded-full border border-neutral-300 bg-white text-neutral-800 hover:text-gold hover:border-gold disabled:opacity-30 disabled:hover:text-neutral-800 disabled:hover:border-neutral-300 transition-all shadow-2xs"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 h-[3px] rounded-full bg-neutral-200 overflow-hidden">
          <div
            className="h-full rounded-full bg-gold transition-[width] duration-150"
            style={{ width: `${Math.max(8, progress * 100)}%` }}
          />
        </div>

        <span className="hidden sm:flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-neutral-400 font-semibold">
          <MoveHorizontal className="w-3.5 h-3.5 text-gold" />
          {hint}
        </span>
      </div>
    </div>
  );
};
