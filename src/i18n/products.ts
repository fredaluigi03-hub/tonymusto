import type { Lang } from './LanguageContext';
import type { ProductItem } from '../types';

type ProductText = Pick<ProductItem, 'name' | 'description' | 'benefits' | 'keyIngredients' | 'ecoAction' | 'badge'>;

// Italian lives in productsData; every other language is keyed by product id.
const productTexts: Record<Exclude<Lang, 'it'>, Record<string, ProductText>> = {
  en: {
    'curl-me-crema-ricci': {
      name: 'Curl Me — Curl Defining Cream',
      description: 'Defining cream for curly, wavy and fine hair. Its lightweight formula enhances curls with softness and shine thanks to natural ingredients, for a defined, frizz-free look.',
      benefits: [
        'Defined, natural-looking curls',
        'Anti-frizz effect, soft hair',
        'Volume and shine',
        'Ideal for daily use on all types of curls'
      ],
      badge: 'Curly',
    },
    'shampoo-bee-it-250ml': {
      name: 'Bee It Shampoo — Nourishing',
      description: 'Nourishing shampoo for damaged scalp and hair. It cleanses with care while preserving the hair’s original structure; the creamy texture creates a light lather for soft, vital hair.',
      benefits: [
        'Strong cleansing power, yet gentle',
        'Restores elasticity and shine even to the driest hair',
        'Softer hair from roots to ends'
      ],
      ecoAction: 'Pouch packaging with 70% less plastic than a standard bottle',
      badge: 'Save the Bees',
    },
    'maschera-ristrutturante-bee-it': {
      name: 'Bee It Restructuring Mask',
      description: 'Concentrated post-shampoo repair mask with immediate effectiveness. It restores strength and elasticity, hydrating and nourishing deeply for healthy, shiny, plumped-up hair.',
      benefits: [
        'Improves combability without weighing hair down',
        'Does not clog or irritate the scalp',
        'Protects hair colour, natural or treated'
      ],
      ecoAction: 'Pouch packaging with 70% less plastic than a standard bottle',
      badge: 'Eco Repair',
    },
    'bagnodoccia-bee-it-250ml': {
      name: 'Bee It Sensorial Shower Gel',
      description: 'Sensorial body wash with organic natural actives and a regenerating action. It promotes natural well-being thanks to the beneficial properties of propolis and organic honey.',
      benefits: [
        'Gives the skin hydration, elasticity and softness',
        'Soothing properties in case of itching'
      ],
      keyIngredients: ['Organic Propolis', 'Organic Honey'],
      ecoAction: 'Pouch packaging with 70% less plastic than a standard bottle',
      badge: 'Body Spa',
    },
    'argan-me-olio-dargan': {
      name: 'Argan Me — Instant Smoothing Argan Oil',
      description: 'Instant smoothing argan oil fluid, lightweight and non-sticky. It tames unruly hair, reduces frizz and boosts shine, leaving hair silky and easy to manage.',
      benefits: [
        'Instant shine',
        'Frizz reduction',
        'Deep nourishment and hydration',
        'Lightweight and non-sticky, no residue',
        'Sulphate- and paraben-free, cruelty-free'
      ],
      badge: 'Luxury Oil',
    },
    'dont-frizz-me-lacca': {
      name: 'Don’t Frizz Me — Anti-Frizz Hairspray',
      description: 'Anti-frizz hairspray for smooth, shiny hair, with flexible hold and outstanding shine. It fights frizz, leaving hair smooth, soft and silky with a natural, residue-free finish.',
      benefits: [
        'Flexible hold that doesn’t weigh hair down',
        'Anti-frizz: soft, silky hair',
        'Healthy, natural shine',
        'Lightweight formula, never sticky',
        'Sulphate- and paraben-free, cruelty-free'
      ],
      keyIngredients: ['Carrot Seed Oil', 'Hibiscus, Milk Thistle and Sea Lavender Extract'],
      badge: 'Pro Styling',
    },
    'texture-me-spray-sea-salt': {
      name: 'Texture Me — Sea Salt Spray',
      description: 'Sea salt spray for a beachy look, with natural waves and a light, voluminous texture. It gives a soft finish and a tousled yet polished look, ideal for a casual style.',
      benefits: [
        'Natural texture, tousled look',
        'Volume and body',
        'Lightweight formula that doesn’t weigh hair down',
        'Helps protect hair from environmental stress',
        'Sulphate- and paraben-free, cruelty-free'
      ],
      badge: 'Beach Waves',
    },
    'style-me-cera-opaca': {
      name: 'Style Me — Texturising Matte Wax',
      description: 'Strong-hold texturising matte wax, ideal for bold, well-defined looks on short and wavy hair. It keeps the desired shape and helps retain moisture, preventing breakage.',
      benefits: [
        'Strong hold all day',
        'Matte, tousled texture',
        'Improves shine for a healthy look',
        'Retains moisture and prevents breakage',
        'Sulphate- and paraben-free, cruelty-free'
      ],
      badge: 'Matt Finish',
    },
    'control-me-cera-lucida': {
      name: 'Control Me — Water-Based Shine Wax',
      description: 'Water-based shine wax for a structured, glossy look with flexible hold. The styling gel gives a natural, shiny finish to sculpt and define without weighing hair down.',
      benefits: [
        'Flexible hold',
        'Shiny finish with natural brilliance',
        'Easy to apply and rinse out, no residue',
        'Suitable for all hair types',
        'Sulphate- and paraben-free, cruelty-free'
      ],
      badge: 'Gloss Control',
    },
  },
  fr: {
    'curl-me-crema-ricci': {
      name: 'Curl Me — Crème Définition Boucles',
      description: 'Crème définition pour cheveux bouclés, ondulés et fins. Sa formule légère sublime les boucles en apportant douceur et brillance grâce à des ingrédients naturels, pour un résultat défini et sans frisottis.',
      benefits: [
        'Boucles définies et naturelles',
        'Effet anti-frisottis, cheveux doux',
        'Volume et brillance',
        'Idéale pour un usage quotidien, sur tous les types de boucles'
      ],
      badge: 'Curly',
    },
    'shampoo-bee-it-250ml': {
      name: 'Shampooing Bee It — Nourrissant',
      description: 'Shampooing nourrissant pour cuir chevelu et cheveux abîmés. Il nettoie avec soin tout en préservant la structure d’origine du cheveu ; sa texture crémeuse crée une mousse légère pour des cheveux doux et vitaux.',
      benefits: [
        'Fort pouvoir nettoyant, tout en douceur',
        'Redonne élasticité et éclat, même aux cheveux les plus secs',
        'Cheveux plus doux des racines aux pointes'
      ],
      ecoAction: 'Conditionnement en pochette avec 70 % de plastique en moins qu’un flacon classique',
      badge: 'Save the Bees',
    },
    'maschera-ristrutturante-bee-it': {
      name: 'Masque Restructurant Bee It',
      description: 'Masque réparateur concentré à appliquer après le shampooing, d’une efficacité immédiate. Il apporte force et élasticité, hydrate et nourrit en profondeur pour des cheveux sains, brillants et repulpés.',
      benefits: [
        'Améliore le démêlage sans alourdir',
        'N’obstrue ni n’irrite le cuir chevelu',
        'Protège la couleur, naturelle ou traitée'
      ],
      ecoAction: 'Conditionnement en pochette avec 70 % de plastique en moins qu’un flacon classique',
      badge: 'Eco Repair',
    },
    'bagnodoccia-bee-it-250ml': {
      name: 'Gel Douche Sensoriel Bee It',
      description: 'Gel douche sensoriel pour le corps avec des actifs naturels biologiques à action régénérante. Il favorise le bien-être naturel grâce aux propriétés bénéfiques de la propolis et du miel biologique.',
      benefits: [
        'Apporte hydratation, élasticité et douceur à la peau',
        'Propriétés apaisantes en cas de démangeaisons'
      ],
      keyIngredients: ['Propolis biologique', 'Miel biologique'],
      ecoAction: 'Conditionnement en pochette avec 70 % de plastique en moins qu’un flacon classique',
      badge: 'Body Spa',
    },
    'argan-me-olio-dargan': {
      name: 'Argan Me — Huile d’Argan Fluide Disciplinante',
      description: 'Fluide disciplinant instantané à l’huile d’argan, léger et non gras. Il dompte les cheveux rebelles, réduit les frisottis et améliore la brillance, pour des cheveux soyeux et faciles à coiffer.',
      benefits: [
        'Brillance instantanée',
        'Réduction des frisottis',
        'Nutrition et hydratation en profondeur',
        'Léger et non collant, sans résidus',
        'Sans sulfates ni parabènes, cruelty-free'
      ],
      badge: 'Luxury Oil',
    },
    'dont-frizz-me-lacca': {
      name: 'Don’t Frizz Me — Laque Spray Anti-Frisottis',
      description: 'Laque spray anti-frisottis pour des cheveux lisses et brillants, avec une tenue souple et une brillance remarquable. Elle combat les frisottis et laisse les cheveux lisses, doux et soyeux, avec un rendu naturel sans résidus.',
      benefits: [
        'Tenue souple qui n’alourdit pas',
        'Anti-frisottis : cheveux doux et soyeux',
        'Brillance saine et naturelle',
        'Formule légère, non collante',
        'Sans sulfates ni parabènes, cruelty-free'
      ],
      keyIngredients: ['Huile de graines de carotte', 'Extrait d’hibiscus, de chardon-Marie et de lavande de mer'],
      badge: 'Pro Styling',
    },
    'texture-me-spray-sea-salt': {
      name: 'Texture Me — Spray Sel Marin',
      description: 'Spray au sel marin pour un look beachy, avec des ondulations naturelles et une texture légère et volumineuse. Il offre une finition douce et un effet décoiffé mais soigné, idéal pour un style décontracté.',
      benefits: [
        'Texture naturelle, effet décoiffé',
        'Volume et corps',
        'Formule légère qui n’alourdit pas',
        'Aide à protéger les cheveux des agressions environnementales',
        'Sans sulfates ni parabènes, cruelty-free'
      ],
      badge: 'Beach Waves',
    },
    'style-me-cera-opaca': {
      name: 'Style Me — Cire Mate Texturisante',
      description: 'Cire mate texturisante à tenue forte, idéale pour des looks audacieux et bien définis sur cheveux courts et ondulés. Elle maintient la forme souhaitée et aide à retenir l’hydratation, prévenant la casse.',
      benefits: [
        'Tenue forte toute la journée',
        'Texture mate et irrégulière',
        'Améliore la brillance pour un aspect sain',
        'Retient l’humidité et prévient la casse',
        'Sans sulfates ni parabènes, cruelty-free'
      ],
      badge: 'Matt Finish',
    },
    'control-me-cera-lucida': {
      name: 'Control Me — Cire Brillante à Base d’Eau',
      description: 'Cire brillante à base d’eau pour un look structuré et éclatant avec une tenue souple. Le gel modelant offre une finition brillante et naturelle pour sculpter et définir sans alourdir.',
      benefits: [
        'Tenue souple',
        'Finition brillante, éclat naturel',
        'Facile à appliquer et à rincer, sans résidus',
        'Convient à tous les types de cheveux',
        'Sans sulfates ni parabènes, cruelty-free'
      ],
      badge: 'Gloss Control',
    },
  },
  es: {
    'curl-me-crema-ricci': {
      name: 'Curl Me — Crema Definidora de Rizos',
      description: 'Crema definidora para cabello rizado, ondulado y fino. Su fórmula ligera realza los rizos aportando suavidad y brillo gracias a ingredientes naturales, para un look definido y sin encrespamiento.',
      benefits: [
        'Rizos definidos y naturales',
        'Efecto antiencrespamiento, cabello suave',
        'Volumen y brillo',
        'Ideal para el uso diario, para todo tipo de rizos'
      ],
      badge: 'Curly',
    },
    'shampoo-bee-it-250ml': {
      name: 'Champú Bee It — Nutritivo',
      description: 'Champú nutritivo para cuero cabelludo y cabello dañado. Limpia con cuidado manteniendo la estructura original del cabello; su textura cremosa crea una espuma ligera para un cabello suave y vital.',
      benefits: [
        'Alto poder limpiador, pero delicado',
        'Devuelve elasticidad y brillo incluso al cabello más seco',
        'Cabello más suave de raíz a puntas'
      ],
      ecoAction: 'Envase en bolsa con un 70 % menos de plástico que un frasco convencional',
      badge: 'Save the Bees',
    },
    'maschera-ristrutturante-bee-it': {
      name: 'Mascarilla Reestructurante Bee It',
      description: 'Mascarilla reparadora concentrada para después del champú, de eficacia inmediata. Aporta fuerza y elasticidad, hidratando y nutriendo en profundidad para un cabello sano, brillante y con cuerpo.',
      benefits: [
        'Mejora el peinado sin apelmazar',
        'No obstruye ni irrita el cuero cabelludo',
        'Protege el color, natural o tratado'
      ],
      ecoAction: 'Envase en bolsa con un 70 % menos de plástico que un frasco convencional',
      badge: 'Eco Repair',
    },
    'bagnodoccia-bee-it-250ml': {
      name: 'Gel de Ducha Sensorial Bee It',
      description: 'Gel de ducha sensorial para el cuerpo con activos naturales ecológicos de acción regeneradora. Favorece el bienestar natural gracias a las propiedades beneficiosas del propóleo y la miel ecológica.',
      benefits: [
        'Aporta hidratación, elasticidad y suavidad a la piel',
        'Propiedades calmantes en caso de picor'
      ],
      keyIngredients: ['Propóleo ecológico', 'Miel ecológica'],
      ecoAction: 'Envase en bolsa con un 70 % menos de plástico que un frasco convencional',
      badge: 'Body Spa',
    },
    'argan-me-olio-dargan': {
      name: 'Argan Me — Aceite de Argán Fluido Disciplinante',
      description: 'Aceite de argán fluido disciplinante instantáneo, ligero y no pegajoso. Domina el cabello rebelde, reduce el encrespamiento y mejora el brillo, dejándolo sedoso y fácil de peinar.',
      benefits: [
        'Brillo instantáneo',
        'Reducción del encrespamiento',
        'Nutrición e hidratación en profundidad',
        'Ligero y no pegajoso, sin residuos',
        'Sin sulfatos ni parabenos, cruelty-free'
      ],
      badge: 'Luxury Oil',
    },
    'dont-frizz-me-lacca': {
      name: 'Don’t Frizz Me — Laca Spray Antiencrespamiento',
      description: 'Laca en spray antiencrespamiento para cabello liso y brillante, con fijación flexible y un brillo extraordinario. Combate el encrespamiento dejando el cabello liso, suave y sedoso, con un aspecto natural y sin residuos.',
      benefits: [
        'Fijación flexible que no apelmaza',
        'Antiencrespamiento: cabello suave y sedoso',
        'Brillo sano y natural',
        'Fórmula ligera, no pegajosa',
        'Sin sulfatos ni parabenos, cruelty-free'
      ],
      keyIngredients: ['Aceite de semillas de zanahoria', 'Extracto de hibisco, cardo mariano y lavanda de mar'],
      badge: 'Pro Styling',
    },
    'texture-me-spray-sea-salt': {
      name: 'Texture Me — Spray de Sal Marina',
      description: 'Spray de sal marina para un look beachy, con ondas naturales y una textura ligera y voluminosa. Aporta un acabado suave y un aspecto despeinado pero cuidado, ideal para un estilo informal.',
      benefits: [
        'Textura natural, aspecto despeinado',
        'Volumen y cuerpo',
        'Fórmula ligera que no apelmaza',
        'Ayuda a proteger el cabello del estrés ambiental',
        'Sin sulfatos ni parabenos, cruelty-free'
      ],
      badge: 'Beach Waves',
    },
    'style-me-cera-opaca': {
      name: 'Style Me — Cera Mate Texturizante',
      description: 'Cera mate texturizante de fijación fuerte, ideal para looks atrevidos y bien definidos en cabello corto y ondulado. Mantiene la forma deseada y ayuda a retener la hidratación, previniendo la rotura.',
      benefits: [
        'Fijación fuerte durante todo el día',
        'Textura mate e irregular',
        'Mejora el brillo para un aspecto sano',
        'Retiene la humedad y previene la rotura',
        'Sin sulfatos ni parabenos, cruelty-free'
      ],
      badge: 'Matt Finish',
    },
    'control-me-cera-lucida': {
      name: 'Control Me — Cera Brillante de Base Acuosa',
      description: 'Cera brillante de base acuosa para un look estructurado y luminoso con fijación flexible. El gel modelador aporta un acabado brillante y natural para esculpir y definir sin apelmazar.',
      benefits: [
        'Fijación flexible',
        'Acabado brillante con luminosidad natural',
        'Fácil de aplicar y de aclarar, sin residuos',
        'Apta para todo tipo de cabello',
        'Sin sulfatos ni parabenos, cruelty-free'
      ],
      badge: 'Gloss Control',
    },
  },
  de: {
    'curl-me-crema-ricci': {
      name: 'Curl Me — Locken-Definitionscreme',
      description: 'Definitionscreme für lockiges, welliges und feines Haar. Die leichte Formel betont die Locken und schenkt dank natürlicher Inhaltsstoffe Weichheit und Glanz, für einen definierten Look ohne Frizz.',
      benefits: [
        'Definierte, natürliche Locken',
        'Anti-Frizz-Effekt, weiches Haar',
        'Volumen und Glanz',
        'Ideal für die tägliche Anwendung bei allen Lockentypen'
      ],
      badge: 'Curly',
    },
    'shampoo-bee-it-250ml': {
      name: 'Bee It Shampoo — Nährend',
      description: 'Nährendes Shampoo für Kopfhaut und geschädigtes Haar. Es reinigt sorgfältig und bewahrt die ursprüngliche Haarstruktur; die cremige Textur bildet einen leichten Schaum für weiches, vitales Haar.',
      benefits: [
        'Hohe Reinigungskraft, dabei sanft',
        'Verleiht selbst trockenstem Haar Elastizität und Glanz zurück',
        'Weicheres Haar von den Wurzeln bis in die Spitzen'
      ],
      ecoAction: 'Beutelverpackung mit 70 % weniger Plastik als eine herkömmliche Flasche',
      badge: 'Save the Bees',
    },
    'maschera-ristrutturante-bee-it': {
      name: 'Bee It Aufbaumaske',
      description: 'Konzentrierte Aufbaumaske für nach dem Shampoo mit sofortiger Wirkung. Sie schenkt Kraft und Elastizität, spendet tiefgehend Feuchtigkeit und Pflege für gesundes, glänzendes, kräftiges Haar.',
      benefits: [
        'Verbessert die Kämmbarkeit, ohne zu beschweren',
        'Verstopft und reizt die Kopfhaut nicht',
        'Schützt die Haarfarbe, ob natürlich oder gefärbt'
      ],
      ecoAction: 'Beutelverpackung mit 70 % weniger Plastik als eine herkömmliche Flasche',
      badge: 'Eco Repair',
    },
    'bagnodoccia-bee-it-250ml': {
      name: 'Bee It Sensorisches Duschgel',
      description: 'Sensorisches Körperduschgel mit natürlichen Bio-Wirkstoffen und regenerierender Wirkung. Es fördert das natürliche Wohlbefinden dank der wohltuenden Eigenschaften von Propolis und Bio-Honig.',
      benefits: [
        'Spendet der Haut Feuchtigkeit, Elastizität und Weichheit',
        'Beruhigende Eigenschaften bei Juckreiz'
      ],
      keyIngredients: ['Bio-Propolis', 'Bio-Honig'],
      ecoAction: 'Beutelverpackung mit 70 % weniger Plastik als eine herkömmliche Flasche',
      badge: 'Body Spa',
    },
    'argan-me-olio-dargan': {
      name: 'Argan Me — Disziplinierendes Arganöl-Fluid',
      description: 'Sofort disziplinierendes Arganöl-Fluid, leicht und nicht klebend. Es bändigt widerspenstiges Haar, reduziert Frizz und steigert den Glanz, für seidiges, leicht frisierbares Haar.',
      benefits: [
        'Sofortiger Glanz',
        'Reduziert Frizz',
        'Tiefgehende Pflege und Feuchtigkeit',
        'Leicht und nicht klebend, ohne Rückstände',
        'Frei von Sulfaten und Parabenen, tierversuchsfrei'
      ],
      badge: 'Luxury Oil',
    },
    'dont-frizz-me-lacca': {
      name: 'Don’t Frizz Me — Anti-Frizz-Haarspray',
      description: 'Anti-Frizz-Haarspray für glattes, glänzendes Haar mit flexiblem Halt und außergewöhnlichem Glanz. Es bekämpft Frizz und hinterlässt das Haar glatt, weich und seidig, mit natürlichem Finish ohne Rückstände.',
      benefits: [
        'Flexibler Halt, der nicht beschwert',
        'Anti-Frizz: weiches, seidiges Haar',
        'Gesunder, natürlicher Glanz',
        'Leichte Formel, nicht klebrig',
        'Frei von Sulfaten und Parabenen, tierversuchsfrei'
      ],
      keyIngredients: ['Karottensamenöl', 'Extrakt aus Hibiskus, Mariendistel und Meerlavendel'],
      badge: 'Pro Styling',
    },
    'texture-me-spray-sea-salt': {
      name: 'Texture Me — Meersalzspray',
      description: 'Meersalzspray für einen Beach-Look mit natürlichen Wellen und leichter, voluminöser Textur. Es schenkt ein weiches Finish und einen zerzausten, aber gepflegten Look, ideal für einen lässigen Style.',
      benefits: [
        'Natürliche Textur, zerzauster Look',
        'Volumen und Fülle',
        'Leichte Formel, die nicht beschwert',
        'Schützt das Haar vor Umwelteinflüssen',
        'Frei von Sulfaten und Parabenen, tierversuchsfrei'
      ],
      badge: 'Beach Waves',
    },
    'style-me-cera-opaca': {
      name: 'Style Me — Texturierendes Mattwachs',
      description: 'Texturierendes Mattwachs mit starkem Halt, ideal für mutige, klar definierte Looks bei kurzem und welligem Haar. Es hält die gewünschte Form und hilft, Feuchtigkeit zu bewahren und Haarbruch vorzubeugen.',
      benefits: [
        'Starker Halt den ganzen Tag',
        'Matte, zerzauste Textur',
        'Verbessert den Glanz für ein gesundes Aussehen',
        'Bewahrt Feuchtigkeit und beugt Haarbruch vor',
        'Frei von Sulfaten und Parabenen, tierversuchsfrei'
      ],
      badge: 'Matt Finish',
    },
    'control-me-cera-lucida': {
      name: 'Control Me — Glanzwachs auf Wasserbasis',
      description: 'Glanzwachs auf Wasserbasis für einen strukturierten, glänzenden Look mit flexiblem Halt. Das Modelliergel verleiht ein natürliches Glanzfinish zum Formen und Definieren, ohne zu beschweren.',
      benefits: [
        'Flexibler Halt',
        'Glänzendes Finish mit natürlichem Glanz',
        'Leicht aufzutragen und auszuspülen, ohne Rückstände',
        'Für alle Haartypen geeignet',
        'Frei von Sulfaten und Parabenen, tierversuchsfrei'
      ],
      badge: 'Gloss Control',
    },
  },
};

export const localizeProduct = (product: ProductItem, lang: Lang): ProductItem =>
  lang === 'it' ? product : { ...product, ...productTexts[lang][product.id] };
