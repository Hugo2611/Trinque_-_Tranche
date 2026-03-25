import { useMemo, useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const categoryGroups = [
  { key: 'Fromage', label: "1 fromage d'affinage" },
  { key: 'Charcuterie', label: '1 salaison du billot' },
  { key: 'Vin', label: '1 bouteille de la cave' },
  { key: 'Bière', label: '2 bières artisanales' },
];

function BoardBuilder() {
  const { addToCart } = useCart();

  const defaultSelection = useMemo(
    () =>
      Object.fromEntries(
        categoryGroups.map((group) => {
          const firstProduct = products.find((product) => product.category === group.key);
          const qty = group.key === 'Bière' ? 2 : 1;
          return [group.key, { productId: firstProduct?.id ?? null, quantity: qty }];
        })
      ),
    []
  );

  const [selection, setSelection] = useState(defaultSelection);
  const [isAdded, setIsAdded] = useState(false);

  const selectedProducts = useMemo(
    () =>
      categoryGroups
        .map((group) => {
          const selected = selection[group.key];
          const product = products.find((item) => item.id === Number(selected?.productId));
          if (!product || !selected?.quantity) return null;

          return { product, quantity: Number(selected.quantity) };
        })
        .filter(Boolean),
    [selection]
  );

  const total = selectedProducts.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleAddBoardToCart = () => {
    selectedProducts.forEach(({ product, quantity }) => {
      for (let i = 0; i < quantity; i += 1) {
        addToCart(product);
      }
    });

    setIsAdded(true);
    window.setTimeout(() => setIsAdded(false), 1200);
  };

  return (
    <section className="grid grid-cols-1 gap-5 lg:grid-cols-3">
      <div className="rounded-2xl border border-amber-200 bg-white/80 p-5 lg:col-span-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
          Configurateur
        </p>
        <h2 className="mt-1 text-2xl font-black text-stone-900 sm:text-3xl">
          Créez votre planche sur-mesure
        </h2>
        <p className="mt-2 text-sm text-stone-600">
          Composez une planche gourmande en quelques clics. Livraison groupée, fraîcheur préservée.
        </p>

        <div className="mt-5 space-y-4">
          {categoryGroups.map((group) => {
            const choices = products.filter((product) => product.category === group.key);
            const selected = selection[group.key];

            return (
              <div
                key={group.key}
                className="rounded-xl border border-amber-100 bg-white p-3 sm:p-4"
              >
                <p className="text-sm font-semibold text-stone-800">{group.label}</p>
                <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-[1fr_96px]">
                  <select
                    value={selected?.productId ?? ''}
                    onChange={(event) =>
                      setSelection((prev) => ({
                        ...prev,
                        [group.key]: {
                          ...prev[group.key],
                          productId: Number(event.target.value),
                        },
                      }))
                    }
                    className="rounded-lg border border-amber-200 bg-white px-3 py-2 text-sm text-stone-700 outline-none ring-brand-500 focus:ring"
                  >
                    {choices.map((choice) => (
                      <option key={choice.id} value={choice.id}>
                        {choice.name}
                      </option>
                    ))}
                  </select>

                  <input
                    min={1}
                    type="number"
                    value={selected?.quantity ?? 1}
                    onChange={(event) =>
                      setSelection((prev) => ({
                        ...prev,
                        [group.key]: {
                          ...prev[group.key],
                          quantity: Number(event.target.value) || 1,
                        },
                      }))
                    }
                    className="rounded-lg border border-amber-200 px-3 py-2 text-sm text-stone-700 outline-none ring-brand-500 focus:ring"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <aside className="h-fit rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
        <h3 className="text-lg font-bold text-stone-900">Votre planche en préparation</h3>

        <ul className="mt-3 space-y-2 text-sm text-stone-700">
          {selectedProducts.map(({ product, quantity }) => (
            <li key={product.id} className="flex items-center justify-between gap-3">
              <span className="max-w-[70%] truncate">
                {product.name} × {quantity}
              </span>
              <span className="font-semibold text-stone-900">
                {(product.price * quantity).toFixed(2)} €
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-4 border-t border-amber-100 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-stone-700">Total planche</span>
            <span className="text-xl font-extrabold text-stone-900">{total.toFixed(2)} €</span>
          </div>
          <p className="mt-2 text-xs text-stone-500">
            Livraison groupée isotherme pour fromages et salaisons.
          </p>
        </div>

        <button
          type="button"
          onClick={handleAddBoardToCart}
          className="mt-5 w-full rounded-lg bg-bordeaux-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-bordeaux-700"
        >
          Ajouter cette planche à mon cabas
        </button>

        {isAdded ? (
          <p className="mt-2 text-xs font-semibold text-emerald-700">Planche ajoutée avec succès.</p>
        ) : null}
      </aside>
    </section>
  );
}

export default BoardBuilder;
