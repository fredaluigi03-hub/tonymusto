import { useEffect, useState } from 'react';

// Hash routes: the site is static, so every page lives behind `#/…`.
export const ROUTES = {
  home: '#/',
  boutique: '#/hair-boutique',
  shop: '#/prodotti',
  wedding: '#/wedding',
  careers: '#/lavora-con-noi',
  awards: '#/premi',
  photos: '#/foto',
  contact: '#/contatti',
} as const;

export const useHashRoute = () => {
  const [route, setRoute] = useState(() => window.location.hash);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(window.location.hash);
      if (window.location.hash.startsWith('#/')) window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return route;
};
