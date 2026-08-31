import React, {
  HTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

/**
 * CircularGallery — caroselo 3D su un cilindro.
 *
 * Generalizzato dal componente di @ravikatiyar162 su 21st.dev.
 * Differenze rispetto all'originale:
 *  - rotazione legata allo scroll DELLA SEZIONE, non dell'intera pagina, cosi'
 *    si puo' incastrare a meta' documento senza che il progresso dipenda da
 *    quanto e' lunga la pagina;
 *  - rispetta prefers-reduced-motion (niente auto-rotazione, niente rAF);
 *  - trascinamento con mouse/dito;
 *  - nessun token shadcn: i colori arrivano da fuori via className;
 *  - `ReturnType<typeof setTimeout>` al posto di `NodeJS.Timeout`, cosi' non
 *    serve @types/node;
 *  - navigazione da tastiera e ancoraggio del focus.
 */

const cn = (...classes: (string | undefined | null | false)[]) =>
  classes.filter(Boolean).join(' ');

/**
 * Touch browsers synthesise `mouseenter` on tap but often never fire the
 * matching `mouseleave`, which left the carousel paused for good after the
 * first tap. Hover-pause is therefore bound only on devices that really hover.
 */
const CAN_HOVER =
  typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;

export interface CircularGalleryItem {
  id: string;
  title: string;
  subtitle?: string;
  meta?: string;
  image: string;
  /** object-position, es. '47% 35%' */
  imagePosition?: string;
  href?: string;
}

export interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: CircularGalleryItem[];
  /** distanza delle card dal centro, in px */
  radius?: number;
  /** gradi al frame (a 60fps) quando ruota da sola. 0.1 = un giro in ~60s */
  autoRotateSpeed?: number;
  /** true = la rotazione segue lo scroll della sezione */
  scrollDriven?: boolean;
  cardWidth?: number;
  cardHeight?: number;
  /** classi applicate alla singola card (bordo, sfondo, ombra) */
  cardClassName?: string;
  /** classi applicate al blocco di testo in basso */
  captionClassName?: string;
  /** selezione di una card: usa questo al posto di href per aprire una modale */
  onItemSelect?: (id: string) => void;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  (
    {
      items,
      className,
      radius = 600,
      autoRotateSpeed = 0.1,
      scrollDriven = true,
      cardWidth = 300,
      cardHeight = 400,
      cardClassName,
      captionClassName,
      onItemSelect,
      ...props
    },
    ref
  ) => {
    const hostRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState(0);
    const [paused, setPaused] = useState(false);
    const [reduced, setReduced] = useState(false);

    const drag = useRef<{ x: number; start: number } | null>(null);
    const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      const on = () => setReduced(mq.matches);
      on();
      mq.addEventListener('change', on);
      return () => mq.removeEventListener('change', on);
    }, []);

    const nudgeIdle = useCallback(() => {
      setPaused(true);
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setPaused(false), 900);
    }, []);

    // Rotazione da scroll, misurata sulla sezione e non sul documento.
    useEffect(() => {
      if (!scrollDriven || reduced) return;
      const onScroll = () => {
        const el = hostRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const span = r.height + window.innerHeight;
        const progress = span > 0 ? (window.innerHeight - r.top) / span : 0;
        setRotation(Math.max(0, Math.min(1, progress)) * 360);
        nudgeIdle();
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }, [scrollDriven, reduced, nudgeIdle]);

    // Auto-rotazione quando nessuno interagisce.
    // Scalata sul tempo trascorso e non "per frame": su un telefono a 120Hz
    // girerebbe al doppio della velocita', su un dispositivo sotto sforzo a
    // meta'. `autoRotateSpeed` resta espresso in gradi per frame a 60fps.
    useEffect(() => {
      if (reduced) return;
      let last = 0;
      const tick = (now: number) => {
        const frames = last ? Math.min(now - last, 100) / (1000 / 60) : 1;
        last = now;
        if (!paused && !drag.current) setRotation((p) => p + autoRotateSpeed * frames);
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }, [paused, autoRotateSpeed, reduced]);

    const anglePerItem = 360 / Math.max(1, items.length);

    const onPointerDown = (e: React.PointerEvent) => {
      drag.current = { x: e.clientX, start: rotation };
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e: React.PointerEvent) => {
      if (!drag.current) return;
      setRotation(drag.current.start + (e.clientX - drag.current.x) * 0.35);
    };
    const endDrag = () => {
      drag.current = null;
      nudgeIdle();
    };

    return (
      <div
        ref={(node) => {
          hostRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        role="region"
        aria-roledescription="carosello"
        aria-label="Galleria circolare"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') setRotation((r) => r - anglePerItem);
          if (e.key === 'ArrowLeft') setRotation((r) => r + anglePerItem);
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        {...(CAN_HOVER
          ? { onMouseEnter: () => setPaused(true), onMouseLeave: () => setPaused(false) }
          : {})}
        className={cn(
          'relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing touch-pan-y',
          className
        )}
        style={{ perspective: '2000px' }}
        {...props}
      >
        <div
          className="relative w-full h-full"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            const rel = (itemAngle + (rotation % 360) + 360) % 360;
            const normalized = Math.abs(rel > 180 ? 360 - rel : rel);
            const opacity = Math.max(0.28, 1 - normalized / 180);

            const Card = item.href ? 'a' : onItemSelect ? 'button' : 'div';

            return (
              <div
                key={item.id}
                role="group"
                aria-label={item.title}
                className="absolute"
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  left: '50%',
                  top: '50%',
                  marginLeft: -cardWidth / 2,
                  marginTop: -cardHeight / 2,
                  opacity,
                  transition: 'opacity .3s linear',
                  // le card sul retro non devono intercettare i click
                  pointerEvents: normalized > 100 ? 'none' : 'auto',
                }}
              >
                <Card
                  {...(item.href ? { href: item.href } : {})}
                  {...(!item.href && onItemSelect
                    ? {
                        type: 'button' as const,
                        onClick: () => onItemSelect(item.id),
                        // il drag del carosello non deve contare come click
                        onPointerDown: (e: React.PointerEvent) => e.stopPropagation(),
                      }
                    : {})}
                  className={cn(
                    'relative block w-full h-full rounded-lg overflow-hidden group shadow-2xl',
                    cardClassName
                  )}
                >
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: item.imagePosition || 'center' }}
                  />
                  <div
                    className={cn(
                      'absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/85 to-transparent text-white',
                      captionClassName
                    )}
                  >
                    <h3 className="text-lg font-bold leading-tight">{item.title}</h3>
                    {item.subtitle && (
                      <em className="block text-sm italic opacity-80">{item.subtitle}</em>
                    )}
                    {item.meta && <p className="text-xs mt-1.5 opacity-70">{item.meta}</p>}
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

CircularGallery.displayName = 'CircularGallery';

export { CircularGallery };
