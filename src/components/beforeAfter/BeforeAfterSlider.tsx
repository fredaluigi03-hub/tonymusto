import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'PRIMA',
  afterLabel = 'DOPO IL RITUALE',
  title,
  className = '',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div className={`relative select-none overflow-hidden rounded-xl border border-gold/40 shadow-luxury-card group ${className}`}>
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden cursor-ew-resize touch-none bg-neutral-950"
      >
        {/* "AFTER" Image (Full background layer) */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        {/* "BEFORE" Image (Clipped layer) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none filter contrast-[0.95] brightness-90"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          <span className="px-2.5 sm:px-3 py-1 rounded bg-neutral-950/80 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white">
            {beforeLabel}
          </span>
        </div>

        <div className="absolute top-4 right-4 z-20 pointer-events-none">
          <span className="px-2.5 sm:px-3 py-1 rounded bg-gold/90 backdrop-blur-md text-neutral-950 text-[10px] sm:text-xs font-mono uppercase tracking-widest font-bold shadow-md flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            {afterLabel}
          </span>
        </div>

        {/* Vertical Divider Line with Gold Styling */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-white to-gold z-30 pointer-events-none shadow-[0_0_10px_rgba(212,175,55,0.8)]"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Draggable Luxury Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 sm:w-11 sm:h-11 rounded-full bg-neutral-900 border-2 border-gold flex items-center justify-center text-gold shadow-[0_0_20px_rgba(212,175,55,0.6)] cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
            <MoveHorizontal className="w-5 h-5 animate-pulse" />
          </div>
        </div>

        {/* Hover Hint */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none bg-neutral-950/70 backdrop-blur-md px-3 py-1 rounded-full border border-gold/20 text-[10px] text-white/90 whitespace-nowrap opacity-80 group-hover:opacity-100 transition-opacity">
          Trascina a destra o sinistra per confrontare
        </div>
      </div>

      {title && (
        <div className="p-4 bg-neutral-900 border-t border-neutral-800 text-center">
          <h4 className="font-serif text-base text-white">{title}</h4>
        </div>
      )}
    </div>
  );
};
