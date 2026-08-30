import React, { useEffect } from 'react';
import { useBodyScrollLock } from './useBodyScrollLock';

interface ModalOverlayProps {
  children: React.ReactNode;
  onClose: () => void;
  /** Backdrop classes (tint / blur). */
  className?: string;
  /** Padding around the panel. */
  padding?: string;
  label?: string;
}

/**
 * Scrollable, centred overlay.
 *
 * The important bit is `min-h-full` on the inner flex box. A taller-than-viewport
 * panel inside a plain `overflow-y-auto` + `items-center` container has its top
 * pushed above the scroll origin, and since scrollTop cannot go negative the
 * panel's header — the close button — becomes physically unreachable. Centring
 * inside a `min-h-full` child keeps the panel inside the scrollable range and it
 * simply top-aligns once it outgrows the viewport.
 *
 * Also wires up the two ways people expect to dismiss a modal: Escape, and a
 * click on the backdrop.
 */
export const ModalOverlay: React.FC<ModalOverlayProps> = ({
  children,
  onClose,
  className = 'bg-black/60 backdrop-blur-md',
  padding = 'p-3 sm:p-6',
  label,
}) => {
  useBodyScrollLock(true);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Close on backdrop press only when the gesture starts *and* ends on the
  // backdrop, so a drag that finishes outside the panel doesn't dismiss it.
  const pressedBackdrop = React.useRef(false);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className={`fixed inset-0 z-50 overflow-y-auto overscroll-contain ${className}`}
    >
      <div
        className={`flex min-h-full items-center justify-center ${padding}`}
        onMouseDown={e => {
          pressedBackdrop.current = e.target === e.currentTarget;
        }}
        onMouseUp={e => {
          if (pressedBackdrop.current && e.target === e.currentTarget) onClose();
          pressedBackdrop.current = false;
        }}
      >
        {children}
      </div>
    </div>
  );
};
