# Tony Musto Parrucchieri

Sito del salone Tony Musto a Montemiletto (AV): servizi, prenotazioni, shop
prodotti, lavora con noi. React 19 + Vite + Tailwind 4, nessun backend.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # output in dist/
npm run lint
```

Il video dell'hero ha due versioni in `public/`: `hero-video.mp4` per desktop e
`hero-video-sm.mp4` per mobile. Viene scaricata solo quella visibile.

Prenotazioni, ordini e candidature per ora restano nel browser (nessun invio a
un server): prima di andare in produzione vanno collegati a un servizio reale.
