import React, { useState } from 'react';
import { Reveal } from '../components/common/Reveal';
import { PageHeader } from '../components/common/PageHeader';
import { useBooking } from '../context/BookingContext';
import { useStrings } from '../i18n/strings';
import { contactStrings } from '../i18n/contact';

const CLOSED_DAYS = [0, 6];
const MAPS_URL = 'https://maps.google.com/?q=Via+XXIV+Maggio+13,+83038+Montemiletto+AV';

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

const kicker = 'text-[11px] font-medium uppercase tracking-[0.3em] text-gold';
const link =
  'inline-flex min-h-11 items-center transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-gold';
const field =
  'w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-base text-neutral-950 outline-none transition-colors placeholder:text-neutral-400 focus:border-gold focus:ring-2 focus:ring-gold/25 sm:text-sm';

export const ContactPage: React.FC = () => {
  const { openBooking } = useBooking();
  const common = useStrings(contactStrings);
  const t = common.page;
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 0, message: '' });
  const [sent, setSent] = useState(false);
  const [touched, setTouched] = useState(false);

  const valid = form.name.trim().length >= 2 && emailOk(form.email) && form.message.trim().length >= 10;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', phone: '', subject: 0, message: '' });
      setTouched(false);
    }, 5000);
  };

  return (
    <main className="bg-pearl-100">
      <PageHeader kicker={t.badge} title={t.title} intro={t.intro}>
        <button
          type="button"
          onClick={() => openBooking()}
          className="min-h-11 cursor-pointer rounded-full bg-neutral-950 px-8 text-sm text-white transition-colors hover:bg-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          {t.bookOnline}
        </button>
      </PageHeader>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
          <Reveal>
            <h2 className={kicker}>{common.address}</h2>
            <address className="mt-4 font-serif text-xl not-italic leading-snug text-neutral-950">
              Via XXIV Maggio 13/14
              <br />
              83038 Montemiletto (AV)
            </address>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${link} mt-2 text-sm text-neutral-600`}>
              {t.openMaps}
            </a>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className={kicker}>{t.workHours}</h2>
            <ul className="mt-4 space-y-1.5 text-sm">
              {t.days.map((day, i) => (
                <li key={day} className={`flex justify-between gap-6 ${CLOSED_DAYS.includes(i) ? 'text-neutral-600' : 'text-neutral-950'}`}>
                  <span>{day}</span>
                  <span>{CLOSED_DAYS.includes(i) ? common.closed : '8:30 – 19:00'}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.16}>
            <h2 className={kicker}>{t.badge}</h2>
            <ul className="mt-4 text-sm text-neutral-950">
              <li><a href="tel:+393770293092" className={link}>+39 377 0293092</a></li>
              <li><a href="tel:+390825968391" className={link}>0825 968391</a></li>
              <li><a href="mailto:info@tonymusto.it" className={link}>info@tonymusto.it</a></li>
              <li>
                <a href="https://www.instagram.com/tonymustoparrucchieri/" target="_blank" rel="noopener noreferrer" className={link}>
                  Instagram
                </a>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <form onSubmit={submit} noValidate className="space-y-5">
              <h2 className="font-serif text-3xl font-normal tracking-tight text-neutral-950">{t.formTitle}</h2>
              <p className="text-sm font-light text-neutral-600">{t.formNote}</p>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm text-neutral-600">{t.name}</span>
                  <input
                    className={field}
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder={t.namePlaceholder}
                    autoComplete="name"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm text-neutral-600">{t.email}</span>
                  <input
                    type="email"
                    className={field}
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder={t.emailPlaceholder}
                    autoComplete="email"
                  />
                  {touched && !emailOk(form.email) && <span className="mt-1 block text-xs text-red-600">{t.emailInvalid}</span>}
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm text-neutral-600">{t.phone}</span>
                  <input
                    type="tel"
                    className={field}
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    autoComplete="tel"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm text-neutral-600">{t.subject}</span>
                  <select className={field} value={form.subject} onChange={e => setForm({ ...form, subject: Number(e.target.value) })}>
                    {t.subjects.map((s, i) => (
                      <option key={s} value={i}>{s}</option>
                    ))}
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-sm text-neutral-600">{t.message}</span>
                  <textarea
                    rows={5}
                    className={`${field} resize-none`}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder={t.messagePlaceholder}
                  />
                </label>
              </div>

              <button
                type="submit"
                className="min-h-11 cursor-pointer rounded-full bg-neutral-950 px-8 text-sm text-white transition-colors hover:bg-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {sent ? t.sent : t.send}
              </button>
              <p className="text-xs text-neutral-600">{t.gdpr}</p>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="min-h-80 overflow-hidden rounded-2xl">
            <iframe
              loading="lazy"
              className="h-full min-h-80 w-full border-0"
              src="https://maps.google.com/maps?q=tony%20musto%20montemiletto&t=m&z=17&output=embed&iwloc=near"
              title={common.mapTitle}
            />
          </Reveal>
        </div>
      </section>
    </main>
  );
};
