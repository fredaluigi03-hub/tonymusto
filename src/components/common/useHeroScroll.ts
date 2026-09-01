import { useEffect, useRef } from 'react';

/** Ultimo tratto di video che non viene scrubbato: quando lo zoom finisce la
 *  scena scorre da sola invece di congelarsi sull'ultimo fotogramma.
 *  Gira una volta sola: rimandarlo indietro in loop e un taglio secco su una
 *  scena in movimento, e si vede. Per una coda ciclica servirebbe una clip che
 *  finisce nella stessa posa in cui inizia. */
const LIVE_TAIL = 1.2;

/**
 * Muro, cornice e zoom stanno dentro al video: lo scroll non scala un elemento,
 * fa avanzare il tempo del filmato. Scendendo si entra nella foto, risalendo si
 * torna indietro — uguale con la rotella e con lo swipe. Arrivati in fondo il
 * video riparte da solo sull'ultimo secondo e lo ripete.
 *
 * Scrive anche `--hero-zoom` (0 -> 1), che fa comparire il pannello del testo.
 * Un elemento nascosto dal breakpoint viene ignorato e non scarica nulla.
 */
export function useHeroScroll() {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = ref.current;
    const root = document.documentElement;
    if (!v) return;

    // nascosto dal breakpoint: non deve scaricare il proprio file
    const hidden = () => v.offsetParent === null;

    const unlock = () => {
      v.play().then(() => v.pause()).catch(() => {});
    };

    const tailStart = () => Math.max(0, v.duration - LIVE_TAIL);

    // un seek alla volta: durante uno scroll veloce le richieste si accavallano
    // e il video singhiozza. Teniamo solo l'ultima posizione e la applichiamo
    // quando il decoder ha finito la precedente.
    let pending: number | null = null;
    const seekTo = (t: number) => {
      if (v.seeking) {
        pending = t;
        return;
      }
      v.currentTime = t;
    };
    const flushPending = () => {
      if (pending === null) return;
      const t = pending;
      pending = null;
      v.currentTime = t;
    };

    const update = () => {
      if (hidden()) return;
      // la corsa e l'altezza della sezione hero meno una schermata: cosi il
      // video finisce esattamente quando l'hero smette di essere bloccato
      const hero = document.getElementById('hero');
      const start = hero ? hero.offsetTop : 0;
      const end = hero
        ? Math.max(1, hero.offsetHeight - window.innerHeight)
        : window.innerHeight;
      const progress = Math.min(1, Math.max(0, (window.scrollY - start) / end));
      root.style.setProperty('--hero-zoom', String(progress));

      if (!v.duration || Number.isNaN(v.duration)) return;

      if (progress >= 1) {
        // con un salto secco (ancora, scroll lungo) lo zoom potrebbe non essere
        // ancora arrivato in fondo: portacelo prima di lasciar correre la coda
        if (v.currentTime < tailStart()) v.currentTime = tailStart();
        if (v.paused) v.play().catch(() => {});
        return;
      }

      if (!v.paused) v.pause();
      const t = progress * tailStart();
      if (Math.abs(v.currentTime - t) > 1 / 60) seekTo(t);
    };

    // il download parte solo per il video effettivamente visibile
    if (!hidden()) {
      v.preload = 'auto';
      v.load();
      if (v.readyState >= 1) unlock();
      else v.addEventListener('loadedmetadata', unlock, { once: true });
    }

    update();
    v.addEventListener('loadedmetadata', update);
    v.addEventListener('seeked', flushPending);
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      v.removeEventListener('loadedmetadata', update);
      v.removeEventListener('seeked', flushPending);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return ref;
}
