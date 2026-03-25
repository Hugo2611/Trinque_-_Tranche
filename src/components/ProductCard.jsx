import { useCart } from '../context/CartContext';
import { useState } from 'react';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isStamped, setIsStamped] = useState(false);

  const isFreshProduct =
    product.category === 'Fromage' || product.category === 'Charcuterie';

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent" />

        <span className="absolute bottom-2 left-2 rounded-full bg-white/95 px-2 py-1 text-[11px] font-semibold text-stone-700">
          {product.origin}
        </span>

        {isFreshProduct ? (
          <span className="absolute left-2 top-2 rounded-full bg-emerald-600 px-2 py-1 text-xs font-semibold text-white shadow-sm">
            Frais - Expédition isotherme
          </span>
        ) : null}

        {isStamped ? (
          <span className="absolute right-3 top-3 rotate-[-12deg] rounded-full border-2 border-bordeaux-500 bg-white/95 px-3 py-1 text-[11px] font-black uppercase tracking-wide text-bordeaux-500">
            Validé
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
          {product.category}
        </p>
        <h3 className="mt-1 text-lg font-bold text-stone-900">{product.name}</h3>
        <p className="mt-1 text-xs text-stone-500">{product.producer}</p>

        <div className="mt-2 rounded-lg border border-amber-200/80 bg-amber-50/70 px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-brand-700">
          Origine : {product.origin}
        </div>

        <div className="mt-3 rounded-xl border border-stone-200 bg-stone-50 p-2.5">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-600">
            L&apos;artisan
          </p>
          <p className="mt-1 line-clamp-2 text-xs text-stone-600">{product.artisanBio}</p>
        </div>

        <div className="mt-2 rounded-xl border border-mustard-500/30 bg-mustard-500/10 p-2.5">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-mustard-700">
            L&apos;œil de l&apos;épicier
          </p>
          <p className="mt-1 line-clamp-2 text-xs text-slatewarm-500">{product.tastingTip}</p>
        </div>

        <p className="mt-2 text-xl font-extrabold text-stone-800">
          {product.price.toFixed(2)} €
        </p>

        <button
          type="button"
          onClick={() => {
            addToCart(product);
            setIsStamped(true);
            window.setTimeout(() => setIsStamped(false), 900);
          }}
          className="mt-4 rounded-lg bg-bordeaux-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-bordeaux-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bordeaux-500 focus-visible:ring-offset-2"
        >
          Ajouter à ma planche
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
