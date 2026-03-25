import { useEffect, useMemo, useState } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const categories = ['Toutes', 'Vin', 'Bière', 'Fromage', 'Charcuterie'];

const categoryLabels = {
  Toutes: 'Toute la boutique',
  Vin: 'La Cave',
  'Bière': 'Les Bières',
  Fromage: "L'Affinage",
  Charcuterie: 'Les Salaisons',
};

const categoryCopy = {
  Toutes: 'Épicerie fine, vins, bières, fromages et charcuteries de caractère.',
  Vin: 'Appellations de caractère, domaines indépendants.',
  'Bière': 'Brasseries artisanales et recettes locales.',
  Fromage: 'Affinages de tradition, lait et savoir-faire.',
  Charcuterie: 'Produits de montagne et spécialités régionales.',
};

function ProductList({ initialCategory = 'Toutes' }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    // Met à jour le filtre si l'utilisateur navigue via les routes catégories.
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'Toutes') return products;

    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section>
      <div className="rounded-2xl border border-amber-200 bg-white/75 p-4 shadow-sm sm:p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
          Épicerie fine
        </p>
        <h2 className="mt-1 text-2xl font-black tracking-tight text-stone-900 sm:text-3xl">
          Le terroir à domicile
        </h2>
        <p className="mt-1 text-sm text-stone-600 sm:text-base">
          {categoryCopy[selectedCategory]}
        </p>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-medium uppercase tracking-wider text-stone-500">
            Filtrer le catalogue
          </p>
          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            className="w-full rounded-lg border border-amber-200 bg-white px-3 py-2 text-sm font-medium text-stone-700 outline-none ring-brand-500 transition focus:ring sm:w-64"
            aria-label="Filtrer les produits par catégorie"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {categoryLabels[category]}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="mt-5 rounded-xl border border-dashed border-amber-200 bg-white p-6 text-sm text-stone-600">
          Aucun produit trouvé pour cette catégorie.
        </p>
      ) : (
        <>
          <p className="mt-5 text-sm text-stone-600">
            {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''}{' '}
            disponible{filteredProducts.length > 1 ? 's' : ''}
          </p>
          <div className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          </div>
        </>
      )}
    </section>
  );
}

export default ProductList;
