import React from 'react';
import logo from '../../assets/logo.webp';
import { useBooking } from '../../context/BookingContext';
import { ROUTES } from '../../routes';
import { useStrings } from '../../i18n/strings';
import { footerStrings } from '../../i18n/footer';

// The legal documents stay on the official site, where they are maintained.
const LEGAL_LINKS = [
  { key: 'privacy', href: 'https://tonymusto.it/informativa-sulla-privacy/' },
  { key: 'cookies', href: 'https://tonymusto.it/cookie-policy/' },
  { key: 'terms', href: 'https://tonymusto.it/condizioni-generali-di-vendita/' },
] as const;

const link =
  'inline-flex min-h-11 items-center text-neutral-600 transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-gold';

export const Footer: React.FC = () => {
  const t = useStrings(footerStrings);
  const { openBooking } = useBooking();

  const pages = [
    { name: t.links.services, href: ROUTES.boutique },
    { name: t.links.shop, href: ROUTES.shop },
    { name: t.links.wedding, href: ROUTES.wedding },
    { name: t.links.photos, href: ROUTES.photos },
    { name: t.links.awards, href: ROUTES.awards },
    { name: t.links.careers, href: ROUTES.careers },
    { name: t.links.contact, href: ROUTES.contact },
  ];

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img src={logo} alt={t.logoAlt} width={1400} height={681} className="h-16 w-auto" />
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-neutral-600">{t.about}</p>
            <button
              type="button"
              onClick={() => openBooking()}
              className="mt-8 min-h-11 cursor-pointer rounded-full bg-neutral-950 px-8 text-sm text-white transition-colors hover:bg-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              {t.book}
            </button>
          </div>

          <nav aria-label={t.navigation} className="lg:col-span-3 lg:col-start-7">
            <h4 className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">{t.navigation}</h4>
            <ul className="mt-4 text-sm">
              {pages.map(page => (
                <li key={page.href}>
                  <a href={page.href} className={link}>{page.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">{t.salonHours}</h4>
            <address className="mt-4 text-sm not-italic leading-relaxed text-neutral-600">
              <p>Via XXIV Maggio 13/14<br />83038 Montemiletto (AV)</p>
              <p className="mt-3">{t.hours}</p>
              <ul className="mt-3">
                <li><a href="tel:+393770293092" className={link}>+39 377 0293092</a></li>
                <li><a href="tel:+390825968391" className={link}>0825 968391</a></li>
                <li><a href="mailto:info@tonymusto.it" className={link}>info@tonymusto.it</a></li>
                <li>
                  <a href="https://www.instagram.com/tonymustoparrucchieri/" target="_blank" rel="noopener noreferrer" className={link}>
                    Instagram
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div className="mt-16 space-y-1 border-t border-neutral-200 pt-8 text-xs text-neutral-600">
          <p>© {new Date().getFullYear()} Tony Musto srls. {t.rights}</p>
          <p>
            {t.vat} 09331041211 · PEC{' '}
            <a href="mailto:tonymustoparrucchieri@pec.it" className="transition-colors hover:text-gold">
              tonymustoparrucchieri@pec.it
            </a>
          </p>
          <p className="flex flex-wrap gap-x-4">
            {LEGAL_LINKS.map(({ key, href }) => (
              <a key={key} href={href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-8 items-center transition-colors hover:text-gold">
                {t.legal[key]}
              </a>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
};
