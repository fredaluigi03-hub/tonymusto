import React from 'react';
import { motion } from 'framer-motion';
import { Camera, ArrowUpRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const galleryImages = [
    {
      url: 'https://tonymusto.it/wp-content/uploads/2022/06/IMG_6535-1-768x768.jpg',
      caption: 'Taglio Sartoriale Morfologico',
      tag: '#TonyMustoHair'
    },
    {
      url: 'https://tonymusto.it/wp-content/uploads/2022/06/1037aaf5-d290-4ea3-b26f-13d8e64f5b86-1-768x768.jpg',
      caption: 'Definizione Bio Organic Curl Up',
      tag: '#CurlySpecialist'
    },
    {
      url: 'https://tonymusto.it/wp-content/uploads/2022/06/IMG_8897-768x768.jpeg',
      caption: 'Color Couture & Armocromia',
      tag: '#ColorCouture'
    },
    {
      url: 'https://tonymusto.it/wp-content/uploads/2022/06/IMG_6247-768x768.jpeg',
      caption: 'Hair Spa Sensoriale BEE IT',
      tag: '#SaveTheBees'
    },
    {
      url: 'https://tonymusto.it/wp-content/uploads/2022/06/752F748E-514B-40F1-B3F0-7C80E0CAE228-768x768.jpg',
      caption: 'Acconciatura Sposa Couture',
      tag: '#BridalExcellence'
    },
    {
      url: 'https://tonymusto.it/wp-content/uploads/2022/06/Tony_8-2-768x768.jpg',
      caption: 'Shooting Tony Musto',
      tag: '#Montemiletto'
    }
  ];

  return (
    <section id="photos" className="py-24 bg-white relative overflow-hidden border-b border-neutral-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Real Text from tonymusto.it/photos */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pearl-100 border border-gold/30 text-gold text-xs uppercase tracking-[0.2em] font-bold mb-3 shadow-2xs">
              <Camera className="w-3.5 h-3.5" />
              <span>Photos & Shooting</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight">
              Un po' di noi...
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 font-light max-w-xl">
              Alcuni dei nostri lavori uniti alle nostre esperienze quotidiane in salone e durante i set fotografici.
            </p>
          </div>

          <a
            href="https://www.instagram.com/tonymustoparrucchieri/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-md border border-neutral-300 hover:border-gold hover:text-gold text-neutral-800 text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-2 self-start md:self-auto bg-white shadow-2xs"
          >
            <span>Instagram: @tonymustoparrucchieri</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-pearl-200 border border-neutral-200 hover:border-gold/60 transition-all duration-300 cursor-pointer shadow-2xs"
            >
              <img
                src={item.url}
                alt={item.caption}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-all duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-neutral-950/75 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3.5 flex flex-col justify-between text-left">
                <span className="text-[10px] font-mono text-gold-light uppercase font-bold">{item.tag}</span>
                <div>
                  <p className="font-serif text-xs text-white leading-snug font-medium">{item.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
