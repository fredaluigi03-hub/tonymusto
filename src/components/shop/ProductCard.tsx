import React, { useState } from 'react';
import { ProductItem } from '../../types';
import { useLang } from '../../i18n/LanguageContext';
import { useStrings } from '../../i18n/strings';
import { shopStrings, useFormatPrice } from '../../i18n/shop';
import { localizeProduct } from '../../i18n/products';
import { useCart } from '../../context/CartContext';
import { Reveal } from '../common/Reveal';
import { Check, ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: ProductItem;
  index?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product: baseProduct, index = 0 }) => {
  const { addToCart } = useCart();
  const { lang } = useLang();
  const t = useStrings(shopStrings).card;
  const formatPrice = useFormatPrice();
  const product = localizeProduct(baseProduct, lang);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(baseProduct, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Reveal delay={(index % 3) * 0.06} className="flex h-full flex-col">
      <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-white p-6">
        <img src={product.image} alt={product.name} draggable={false} className="h-full w-auto max-w-[85%] object-contain" />
      </div>
      <div className="flex flex-1 flex-col pt-5">
        <h3 className="font-serif text-xl font-normal tracking-tight text-neutral-950">{product.name}</h3>
        <p className="mt-1 text-xs text-neutral-600">{product.volume}</p>
        <p className="mt-3 line-clamp-2 text-sm font-light leading-relaxed text-neutral-600">{product.description}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <span className="font-serif text-xl text-neutral-950">{formatPrice(product.price)}</span>
          <button
            type="button"
            onClick={handleAdd}
            className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full bg-neutral-950 px-5 text-sm text-white transition-colors hover:bg-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            {added ? <Check className="h-4 w-4" /> : <ShoppingBag className="h-4 w-4" />}
            <span>{added ? t.added : t.add}</span>
          </button>
        </div>
      </div>
    </Reveal>
  );
};
