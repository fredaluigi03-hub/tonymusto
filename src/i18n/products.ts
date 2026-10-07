import type { Lang } from './LanguageContext';
import type { ProductItem } from '../types';

type ProductText = Pick<ProductItem, 'name' | 'description' | 'benefits' | 'keyIngredients' | 'ecoAction' | 'badge'>;

// Italian lives in productsData; every other language is keyed by product id.
const productTexts: Record<Exclude<Lang, 'it'>, Record<string, ProductText>> = {
  en: {
    'curl-me-crema-ricci': {
      name: 'Curl Me — Curl Defining Cream',
      description: 'Professional cream for defining curly and wavy hair. It banishes frizz, gives lasting elasticity and protects the natural structure of the curl without weighing it down.',
      benefits: [
        'Elastic, shape-memory curl definition',
        'Professional anti-frizz and humidity protection',
        'Natural shine with no residue or stiffness',
      ],
      keyIngredients: ['Natural Botanical Extracts', 'Pure Emollient Oils', 'Shaping Proteins'],
      badge: 'Curly Bestseller',
    },
    'shampoo-bee-it-250ml': {
      name: 'Bee It Shampoo — Nourishing Save-the-Bees',
      description: 'Organic shampoo, exceptionally gentle on the scalp, for soft, shiny hair. The BEE IT line actively supports bee conservation by planting flowering oases.',
      benefits: [
        'Gentle, nourishing cleansing for scalp and fibre',
        'Eco-friendly formula with no heavy silicones',
        'Helps protect biodiversity',
      ],
      keyIngredients: ['Organic Honey and Propolis', 'Chamomile Extract', 'Plant-Based Cleansing Base'],
      ecoAction: 'Funds nectar-rich oases to help save the bees',
      badge: 'Save the Bees',
    },
    'maschera-ristrutturante-bee-it': {
      name: 'Bee It Restructuring Mask',
      description: 'Deep restructuring treatment for frizzy, dry or damaged hair. It repairs the hair fibre, leaving it extraordinarily silky and instantly easy to comb.',
      benefits: [
        'Intensive rebuilding of damaged cuticles',
        'Deep nourishment and velvety softness',
        'Mirror-like shine and heat protection',
      ],
      keyIngredients: ['Royal Jelly and Beeswax', 'Organic Shea Butter', 'Regenerating Amino Acids'],
      ecoAction: 'Recyclable packaging and support for ethical beekeeping',
      badge: 'Eco Repair',
    },
    'bagnodoccia-bee-it-250ml': {
      name: 'Bee It Sensorial Shower Gel',
      description: 'Gentle, emollient body cleanser. It turns the daily shower into a relaxing aromatherapy ritual while respecting the skin’s natural hydrolipidic film.',
      benefits: [
        'Soft, velvety skin, hydrated for hours',
        'Warm, enveloping fragrance',
        'Eco-friendly formula that respects the environment',
      ],
      keyIngredients: ['Organic Wildflower Honey', 'Mallow Extract', 'Pure Essential Oils'],
      ecoAction: 'Every bottle helps protect the bees',
      badge: 'Body Spa',
    },
    'argan-me-olio-dargan': {
      name: 'Argan Me — Pure Argan Oil',
      description: 'Smoothing, illuminating fluid made with pure Argan Oil. It nourishes deeply, seals split ends and protects against flat irons and hairdryers for instant shine.',
      benefits: [
        'Concentrated nourishment and a silky touch',
        'Anti-frizz and heat-protecting action',
        'Fast absorption, never greasy',
      ],
      keyIngredients: ['Certified Pure Argan Oil', 'Natural Vitamin E', 'Protective UV Filters'],
      badge: 'Luxury Oil',
    },
    'dont-frizz-me-lacca': {
      name: 'Don’t Frizz Me — Anti-Frizz Hairspray',
      description: 'Professional water-based anti-frizz hairspray. It sets your style with a light, flexible hold while preserving the softness and natural radiance of your hair.',
      benefits: [
        'Invisible, flexible hold with no residue',
        'Quick-drying anti-humidity formula',
        'Brushes out with ease',
      ],
      keyIngredients: ['Water-Soluble Polymers', 'Panthenol B5', 'Anti-Humidity Filter'],
      badge: 'Pro Styling',
    },
    'texture-me-spray-sea-salt': {
      name: 'Texture Me — Sea Salt Spray',
      description: 'Texturising sea salt spray for natural “beach waves”. It adds body, volume and a naturally matte texture, ideal for effortless, contemporary looks.',
      benefits: [
        'Voluminous beach-wave effect',
        'Defined texture with a natural medium hold',
        'Won’t dry out hair thanks to moisturising actives',
      ],
      keyIngredients: ['Mineral Sea Salt', 'Brown Algae Extract', 'Vegetable Glycerin'],
      badge: 'Beach Waves',
    },
    'style-me-cera-opaca': {
      name: 'Style Me — Texturising Matte Wax',
      description: 'Strong-hold matte modelling wax for short and medium cuts. Sculpt and redefine your shape at any time of day with a completely matte finish.',
      benefits: [
        'Strong, long-lasting hold',
        'Natural matte finish, zero shine',
        'Easy to work with and restylable',
      ],
      keyIngredients: ['Natural Clay', 'Carnauba Wax', 'Essential Oils'],
      badge: 'Matt Finish',
    },
    'control-me-cera-lucida': {
      name: 'Control Me — Water-Based Shine Wax',
      description: 'Flexible-hold, water-based shine wax. It gives flawless brilliance, neatness and control without weighing hair down or leaving white residue.',
      benefits: [
        'Instant shine and control',
        'Water-based and ultra-washable',
        'Elastic, natural hold',
      ],
      keyIngredients: ['Pure Water-Soluble Base', 'Shine-Boosting Panthenol'],
      badge: 'Gloss Control',
    },
  },
  fr: {
    'curl-me-crema-ricci': {
      name: 'Curl Me — Crème Définition Boucles',
      description: 'Crème professionnelle pour définir les cheveux bouclés et ondulés. Elle élimine les frisottis, offre une élasticité durable et protège la structure naturelle de la boucle sans l’alourdir.',
      benefits: [
        'Définition élastique de la boucle, à mémoire de forme',
        'Action anti-frisottis et anti-humidité professionnelle',
        'Brillance naturelle sans résidu ni rigidité',
      ],
      keyIngredients: ['Extraits botaniques naturels', 'Huiles émollientes pures', 'Protéines modelantes'],
      badge: 'Curly Bestseller',
    },
    'shampoo-bee-it-250ml': {
      name: 'Shampoing Bee It — Nourrissant Sauve-Abeilles',
      description: 'Shampoing biologique très doux pour le cuir chevelu, pour des cheveux souples et brillants. La ligne BEE IT soutient activement la sauvegarde des abeilles grâce à la plantation d’oasis fleuries.',
      benefits: [
        'Nettoyage doux et nourrissant pour le cuir chevelu et la fibre',
        'Formule éco-responsable sans silicones lourds',
        'Contribue à la protection de la biodiversité',
      ],
      keyIngredients: ['Miel et propolis biologiques', 'Extrait de camomille', 'Base lavante végétale'],
      ecoAction: 'Finance la création d’oasis mellifères pour sauver les abeilles',
      badge: 'Save the Bees',
    },
    'maschera-ristrutturante-bee-it': {
      name: 'Masque Restructurant Bee It',
      description: 'Soin restructurant profond pour cheveux crépus, secs ou abîmés. Il répare la fibre capillaire et offre une extraordinaire douceur soyeuse et un démêlage immédiat.',
      benefits: [
        'Reconstruction intensive des cuticules abîmées',
        'Nutrition profonde et douceur veloutée',
        'Brillance miroir et protection contre la chaleur',
      ],
      keyIngredients: ['Gelée royale et cire d’abeille', 'Beurre de karité bio', 'Acides aminés régénérants'],
      ecoAction: 'Emballage recyclable et soutien à l’apiculture éthique',
      badge: 'Eco Repair',
    },
    'bagnodoccia-bee-it-250ml': {
      name: 'Gel Douche Sensoriel Bee It',
      description: 'Nettoyant corps doux et émollient. Il transforme la douche quotidienne en un rituel d’aromathérapie relaxant, dans le respect du film hydrolipidique naturel de la peau.',
      benefits: [
        'Peau douce, veloutée et hydratée longtemps',
        'Parfum chaud et enveloppant',
        'Formule écologique respectueuse de l’environnement',
      ],
      keyIngredients: ['Miel de mille fleurs bio', 'Extrait de mauve', 'Huiles essentielles pures'],
      ecoAction: 'Chaque flacon contribue à la sauvegarde des abeilles',
      badge: 'Body Spa',
    },
    'argan-me-olio-dargan': {
      name: 'Argan Me — Huile d’Argan Pure',
      description: 'Fluide disciplinant et illuminateur à l’huile d’argan pure. Il nourrit en profondeur, scelle les pointes fourchues et protège du fer et du sèche-cheveux pour un éclat instantané.',
      benefits: [
        'Nutrition concentrée et toucher soyeux',
        'Action anti-frisottis et thermoprotectrice',
        'Absorption rapide, sans effet gras',
      ],
      keyIngredients: ['Huile d’argan pure certifiée', 'Vitamine E naturelle', 'Filtres UV protecteurs'],
      badge: 'Luxury Oil',
    },
    'dont-frizz-me-lacca': {
      name: 'Don’t Frizz Me — Laque Spray Anti-Frisottis',
      description: 'Laque en spray professionnelle anti-frisottis à base d’eau. Elle fixe la coiffure avec une tenue légère et souple, en préservant la douceur et l’éclat naturel de la chevelure.',
      benefits: [
        'Tenue invisible et souple, sans résidu',
        'Formule anti-humidité à séchage rapide',
        'Se retire d’un simple coup de brosse',
      ],
      keyIngredients: ['Polymères hydrosolubles', 'Panthénol B5', 'Filtre anti-humidité'],
      badge: 'Pro Styling',
    },
    'texture-me-spray-sea-salt': {
      name: 'Texture Me — Spray Sel Marin',
      description: 'Spray texturisant au sel marin pour des ondulations naturelles « beach waves ». Il apporte du corps, du volume et une texture mate naturelle, parfaite pour des looks décontractés et contemporains.',
      benefits: [
        'Effet vagues de plage volumineuses',
        'Texture définie à tenue moyenne naturelle',
        'Ne dessèche pas les cheveux grâce aux actifs hydratants',
      ],
      keyIngredients: ['Sel marin minéral', 'Extrait d’algues brunes', 'Glycérine végétale'],
      badge: 'Beach Waves',
    },
    'style-me-cera-opaca': {
      name: 'Style Me — Cire Mate Texturisante',
      description: 'Cire modelante mate à tenue forte pour les coupes courtes et mi-longues. Elle permet de sculpter et de redessiner la forme à tout moment de la journée, avec un fini totalement mat.',
      benefits: [
        'Tenue forte et durable',
        'Fini mat naturel, zéro brillance',
        'Facile à travailler et remodelable',
      ],
      keyIngredients: ['Argile naturelle', 'Cire de carnauba', 'Huiles essentielles'],
      badge: 'Matt Finish',
    },
    'control-me-cera-lucida': {
      name: 'Control Me — Cire Brillante à Base d’Eau',
      description: 'Cire brillante à tenue souple et à base d’eau. Elle offre un éclat impeccable, de l’ordre et du contrôle, sans alourdir ni laisser de résidus blancs.',
      benefits: [
        'Brillance et contrôle instantanés',
        'Base aqueuse ultra-lavable',
        'Tenue élastique et naturelle',
      ],
      keyIngredients: ['Base hydrosoluble pure', 'Panthénol brillance'],
      badge: 'Gloss Control',
    },
  },
  es: {
    'curl-me-crema-ricci': {
      name: 'Curl Me — Crema Definidora de Rizos',
      description: 'Crema profesional para definir el cabello rizado y ondulado. Elimina el encrespamiento, aporta elasticidad duradera y protege la estructura natural del rizo sin apelmazarlo.',
      benefits: [
        'Definición elástica del rizo con memoria de forma',
        'Acción antiencrespamiento y antihumedad profesional',
        'Brillo natural sin residuos ni rigidez',
      ],
      keyIngredients: ['Extractos botánicos naturales', 'Aceites emolientes puros', 'Proteínas modeladoras'],
      badge: 'Curly Bestseller',
    },
    'shampoo-bee-it-250ml': {
      name: 'Champú Bee It — Nutritivo Salva-Abejas',
      description: 'Champú ecológico de alta tolerancia cutánea para un cabello suave y brillante. La línea BEE IT apoya activamente la protección de las abejas mediante la plantación de oasis florales.',
      benefits: [
        'Limpieza suave y nutritiva para el cuero cabelludo y la fibra',
        'Fórmula ecológica sin siliconas pesadas',
        'Contribuye a la protección de la biodiversidad',
      ],
      keyIngredients: ['Miel y propóleo ecológicos', 'Extracto de manzanilla', 'Base lavante vegetal'],
      ecoAction: 'Financia la creación de oasis de néctar para salvar a las abejas',
      badge: 'Save the Bees',
    },
    'maschera-ristrutturante-bee-it': {
      name: 'Mascarilla Reestructurante Bee It',
      description: 'Tratamiento reestructurante profundo para cabello encrespado, seco o dañado. Repara la fibra capilar y aporta una sedosidad extraordinaria y un peinado inmediato.',
      benefits: [
        'Reconstrucción intensiva de las cutículas dañadas',
        'Nutrición profunda y suavidad aterciopelada',
        'Brillo espejo y protección frente al calor',
      ],
      keyIngredients: ['Jalea real y cera de abeja', 'Manteca de karité ecológica', 'Aminoácidos regeneradores'],
      ecoAction: 'Envase reciclable y apoyo a la apicultura ética',
      badge: 'Eco Repair',
    },
    'bagnodoccia-bee-it-250ml': {
      name: 'Gel de Ducha Sensorial Bee It',
      description: 'Limpiador corporal suave y emoliente. Convierte la ducha diaria en un ritual de aromaterapia relajante, respetando la película hidrolipídica natural de la piel.',
      benefits: [
        'Piel suave, aterciopelada e hidratada durante horas',
        'Fragancia cálida y envolvente',
        'Fórmula ecológica respetuosa con el medio ambiente',
      ],
      keyIngredients: ['Miel de mil flores ecológica', 'Extracto de malva', 'Aceites esenciales puros'],
      ecoAction: 'Cada frasco contribuye a la protección de las abejas',
      badge: 'Body Spa',
    },
    'argan-me-olio-dargan': {
      name: 'Argan Me — Aceite de Argán Puro',
      description: 'Fluido disciplinante e iluminador con aceite de argán puro. Nutre en profundidad, sella las puntas abiertas y protege de la plancha y el secador, con un brillo instantáneo.',
      benefits: [
        'Nutrición concentrada y tacto sedoso',
        'Acción antiencrespamiento y termoprotectora',
        'Absorción rápida sin efecto graso',
      ],
      keyIngredients: ['Aceite de argán puro certificado', 'Vitamina E natural', 'Filtros UV protectores'],
      badge: 'Luxury Oil',
    },
    'dont-frizz-me-lacca': {
      name: 'Don’t Frizz Me — Laca en Spray Antiencrespamiento',
      description: 'Laca en spray profesional antiencrespamiento de base acuosa. Fija el peinado con una sujeción ligera y flexible, preservando la suavidad y la luminosidad natural del cabello.',
      benefits: [
        'Fijación invisible y flexible sin residuos',
        'Fórmula antihumedad de secado rápido',
        'Se elimina con un simple cepillado',
      ],
      keyIngredients: ['Polímeros hidrosolubles', 'Pantenol B5', 'Filtro antihumedad'],
      badge: 'Pro Styling',
    },
    'texture-me-spray-sea-salt': {
      name: 'Texture Me — Spray de Sal Marina',
      description: 'Spray texturizante con sal marina para lograr ondas naturales «beach waves». Aporta cuerpo, volumen y una textura mate natural, perfecta para looks desenfadados y actuales.',
      benefits: [
        'Efecto ondas de playa con volumen',
        'Textura definida con fijación media natural',
        'No reseca el cabello gracias a sus activos hidratantes',
      ],
      keyIngredients: ['Sal marina mineral', 'Extracto de algas pardas', 'Glicerina vegetal'],
      badge: 'Beach Waves',
    },
    'style-me-cera-opaca': {
      name: 'Style Me — Cera Mate Texturizante',
      description: 'Cera mate modeladora de fijación fuerte para cortes cortos y medios. Permite esculpir y redefinir la forma en cualquier momento del día con un acabado totalmente mate.',
      benefits: [
        'Fijación fuerte y duradera',
        'Acabado mate natural, cero brillo',
        'Fácil de trabajar y remodelable',
      ],
      keyIngredients: ['Arcilla natural', 'Cera de carnauba', 'Aceites esenciales'],
      badge: 'Matt Finish',
    },
    'control-me-cera-lucida': {
      name: 'Control Me — Cera Brillante de Base Acuosa',
      description: 'Cera brillante de fijación flexible y base acuosa. Aporta un brillo impecable, orden y control sin apelmazar ni dejar residuos blancos.',
      benefits: [
        'Brillo y control instantáneos',
        'Base acuosa ultralavable',
        'Fijación elástica y natural',
      ],
      keyIngredients: ['Base hidrosoluble pura', 'Pantenol abrillantador'],
      badge: 'Gloss Control',
    },
  },
  de: {
    'curl-me-crema-ricci': {
      name: 'Curl Me — Locken-Definitionscreme',
      description: 'Professionelle Creme zur Definition von lockigem und welligem Haar. Sie beseitigt Frizz, schenkt langanhaltende Elastizität und schützt die natürliche Struktur der Locke, ohne zu beschweren.',
      benefits: [
        'Elastische Lockendefinition mit Formgedächtnis',
        'Professioneller Schutz gegen Frizz und Feuchtigkeit',
        'Natürlicher Glanz ohne Rückstände oder Steifheit',
      ],
      keyIngredients: ['Natürliche Pflanzenextrakte', 'Reine pflegende Öle', 'Formgebende Proteine'],
      badge: 'Curly Bestseller',
    },
    'shampoo-bee-it-250ml': {
      name: 'Bee It Shampoo — Nährend, Rettet die Bienen',
      description: 'Bio-Shampoo mit besonders hoher Hautverträglichkeit für weiches, glänzendes Haar. Die Linie BEE IT setzt sich mit dem Anlegen blühender Oasen aktiv für den Schutz der Bienen ein.',
      benefits: [
        'Sanfte, nährende Reinigung für Kopfhaut und Haarfaser',
        'Umweltfreundliche Formel ohne schwere Silikone',
        'Trägt zum Schutz der Artenvielfalt bei',
      ],
      keyIngredients: ['Bio-Honig und Propolis', 'Kamillenextrakt', 'Pflanzliche Waschbasis'],
      ecoAction: 'Finanziert Nektaroasen zur Rettung der Bienen',
      badge: 'Save the Bees',
    },
    'maschera-ristrutturante-bee-it': {
      name: 'Bee It Aufbaumaske',
      description: 'Intensive Aufbaupflege für krauses, trockenes oder strapaziertes Haar. Sie repariert die Haarfaser und schenkt außergewöhnliche Geschmeidigkeit und sofortige Kämmbarkeit.',
      benefits: [
        'Intensiver Wiederaufbau geschädigter Schuppenschichten',
        'Tiefenpflege und samtige Weichheit',
        'Spiegelglanz und Hitzeschutz',
      ],
      keyIngredients: ['Gelée Royale und Bienenwachs', 'Bio-Sheabutter', 'Regenerierende Aminosäuren'],
      ecoAction: 'Recycelbare Verpackung und Unterstützung der ethischen Imkerei',
      badge: 'Eco Repair',
    },
    'bagnodoccia-bee-it-250ml': {
      name: 'Bee It Sensorisches Duschgel',
      description: 'Sanfte, pflegende Körperreinigung. Sie macht die tägliche Dusche zu einem entspannenden Aromatherapie-Ritual und respektiert den natürlichen Hydrolipidfilm der Haut.',
      benefits: [
        'Weiche, samtige Haut, lang anhaltend gepflegt',
        'Warmer, umhüllender Duft',
        'Umweltfreundliche Formel, die die Natur respektiert',
      ],
      keyIngredients: ['Bio-Blütenhonig', 'Malvenextrakt', 'Reine ätherische Öle'],
      ecoAction: 'Jede Flasche trägt zum Schutz der Bienen bei',
      badge: 'Body Spa',
    },
    'argan-me-olio-dargan': {
      name: 'Argan Me — Reines Arganöl',
      description: 'Glättendes, glanzgebendes Fluid mit reinem Arganöl. Es pflegt intensiv, versiegelt Spliss und schützt vor Glätteisen und Föhn für sofortigen Glanz.',
      benefits: [
        'Konzentrierte Pflege und seidiges Gefühl',
        'Anti-Frizz- und Hitzeschutzwirkung',
        'Zieht schnell ein, ohne zu fetten',
      ],
      keyIngredients: ['Zertifiziertes reines Arganöl', 'Natürliches Vitamin E', 'Schützende UV-Filter'],
      badge: 'Luxury Oil',
    },
    'dont-frizz-me-lacca': {
      name: 'Don’t Frizz Me — Anti-Frizz-Haarspray',
      description: 'Professionelles Anti-Frizz-Haarspray auf Wasserbasis. Es fixiert die Frisur mit leichtem, flexiblem Halt und bewahrt die Weichheit und den natürlichen Glanz des Haares.',
      benefits: [
        'Unsichtbarer, flexibler Halt ohne Rückstände',
        'Schnell trocknende Formel gegen Feuchtigkeit',
        'Lässt sich einfach ausbürsten',
      ],
      keyIngredients: ['Wasserlösliche Polymere', 'Panthenol B5', 'Anti-Feuchtigkeits-Filter'],
      badge: 'Pro Styling',
    },
    'texture-me-spray-sea-salt': {
      name: 'Texture Me — Meersalzspray',
      description: 'Texturierendes Meersalzspray für natürliche „Beach Waves“. Es verleiht Fülle, Volumen und eine natürlich matte Textur, ideal für lässige, moderne Looks.',
      benefits: [
        'Voluminöser Beach-Waves-Effekt',
        'Definierte Textur mit natürlichem, mittlerem Halt',
        'Trocknet das Haar dank feuchtigkeitsspendender Wirkstoffe nicht aus',
      ],
      keyIngredients: ['Mineralisches Meersalz', 'Braunalgenextrakt', 'Pflanzliches Glycerin'],
      badge: 'Beach Waves',
    },
    'style-me-cera-opaca': {
      name: 'Style Me — Texturierendes Mattwachs',
      description: 'Mattes Modellierwachs mit starkem Halt für kurze und mittellange Haarschnitte. Formen Sie Ihre Frisur zu jeder Tageszeit neu, mit einem komplett matten Finish.',
      benefits: [
        'Starker, langanhaltender Halt',
        'Natürlich mattes Finish, ohne Glanz',
        'Leicht zu verarbeiten und umformbar',
      ],
      keyIngredients: ['Natürlicher Ton', 'Carnaubawachs', 'Ätherische Öle'],
      badge: 'Matt Finish',
    },
    'control-me-cera-lucida': {
      name: 'Control Me — Glanzwachs auf Wasserbasis',
      description: 'Glanzwachs auf Wasserbasis mit flexiblem Halt. Es verleiht makellosen Glanz, Ordnung und Kontrolle, ohne zu beschweren oder weiße Rückstände zu hinterlassen.',
      benefits: [
        'Sofortiger Glanz und Kontrolle',
        'Wasserbasis, extrem leicht auswaschbar',
        'Elastischer, natürlicher Halt',
      ],
      keyIngredients: ['Reine wasserlösliche Basis', 'Glanzgebendes Panthenol'],
      badge: 'Gloss Control',
    },
  },
};

export const localizeProduct = (product: ProductItem, lang: Lang): ProductItem =>
  lang === 'it' ? product : { ...product, ...productTexts[lang][product.id] };
