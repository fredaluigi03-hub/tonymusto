import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

export const DarkMap: React.FC = () => {
  const googleMapsUrl = "https://maps.google.com/?q=Via+XXIV+Maggio+13+Montemiletto+AV";

  return (
    <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-gold/30 shadow-luxury bg-obsidian-950">
      
      {/* Stylized Dark Mode Map Canvas / Mockup with Grid Lines and Gold Radar Pin */}
      <div className="absolute inset-0 bg-[#0c0c10] overflow-hidden">
        {/* Vector Road Lines Map Effect */}
        <svg className="w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#22222d" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Main roads */}
          <path d="M-50,200 Q200,180 350,150 T800,90" fill="none" stroke="#383848" strokeWidth="6" />
          <path d="M200,-50 Q230,150 250,300 T300,500" fill="none" stroke="#383848" strokeWidth="5" />
          <path d="M-10,80 L500,280" fill="none" stroke="#2a2a38" strokeWidth="3" />
          <path d="M300,-10 L650,400" fill="none" stroke="#2a2a38" strokeWidth="3" />
          
          {/* Accent Gold Route to Salon */}
          <path d="M120,380 C180,300 220,240 280,180" fill="none" stroke="#D4AF37" strokeWidth="2.5" strokeDasharray="6,4" className="animate-pulse" />
        </svg>

        {/* Topographic glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold/10 rounded-full blur-2xl pointer-events-none" />

        {/* Central Luxury Gold Pin at Montemiletto */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-12 h-12 rounded-full bg-gold/20 animate-ping" />
            <div className="w-10 h-10 rounded-full bg-obsidian-950 border-2 border-gold flex items-center justify-center text-gold shadow-[0_0_25px_rgba(212,175,55,0.7)]">
              <MapPin className="w-5 h-5 fill-gold/20" />
            </div>
          </div>
          
          <div className="mt-2 px-3 py-1 rounded bg-obsidian-950/95 border border-gold/40 text-center shadow-lg backdrop-blur-md">
            <span className="text-[11px] font-serif font-bold text-ivory-50 block">TONY MUSTO ATELIER</span>
            <span className="text-[9px] font-mono text-gold-muted block">Via XXIV Maggio 13/14, Montemiletto</span>
          </div>
        </div>

        {/* Corner Controls */}
        <div className="absolute bottom-4 right-4 z-20">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-obsidian-900/90 border border-gold/40 text-gold text-xs font-semibold hover:bg-gold hover:text-obsidian-950 transition-all flex items-center gap-2 shadow-lg backdrop-blur-md"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Apri Indicazioni Stradali</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
