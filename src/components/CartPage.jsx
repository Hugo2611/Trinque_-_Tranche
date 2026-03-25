import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function CartPage() {
  const {
    items,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  if (items.length === 0) {
    return (
      <section className="rounded-2xl border border-dashed border-amber-200 bg-white p-6 text-center sm:p-10">
        <h2 className="text-xl font-bold text-stone-900">Votre cabas est vide</h2>
        <p className="mt-2 text-sm text-stone-600">
          Votre planche en préparation attend encore quelques gourmandises.
        </p>
        <Link
          to="/"
          className="mt-5 inline-flex rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          Parcourir la boutique
        </Link>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-5 lg:grid-cols-3">
      <div className="space-y-3 lg:col-span-2">
        {items.map((item) => (
          <article
            key={item.id}
            className="flex flex-col gap-3 rounded-2xl border border-amber-100 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex min-w-0 items-center gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 rounded-lg object-cover"
                loading="lazy"
              />
              <div className="min-w-0">
                <h3 className="truncate text-sm font-bold text-stone-900 sm:text-base">
                  {item.name}
                </h3>
                <p className="text-xs text-stone-600">{item.category}</p>
                <p className="mt-1 text-sm font-semibold text-stone-800">
                  {item.price.toFixed(2)} € / unité
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 sm:justify-end">
              <div className="inline-flex items-center rounded-lg border border-amber-200">
                <button
                  type="button"
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-3 py-1.5 text-sm font-bold text-stone-700 hover:bg-amber-50"
                  aria-label={`Retirer une unité de ${item.name}`}
                >
                  −
                </button>
                <span className="min-w-10 border-x border-amber-200 px-2 py-1.5 text-center text-sm font-semibold">
                  {item.quantity}
                </span>
                <button
                  type="button"
                  onClick={() => increaseQuantity(item.id)}
                  className="px-3 py-1.5 text-sm font-bold text-stone-700 hover:bg-amber-50"
                  aria-label={`Ajouter une unité de ${item.name}`}
                >
                  +
                </button>
              </div>

              <div className="text-right">
                <p className="text-sm font-bold text-stone-900">
                  {(item.price * item.quantity).toFixed(2)} €
                </p>
                <button
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                  className="mt-1 text-xs font-medium text-red-600 hover:text-red-700"
                >
                  Supprimer
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <aside className="h-fit rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-bold text-stone-900">Votre planche en préparation</h2>
        <div className="mt-4 space-y-2 text-sm text-stone-700">
          <div className="flex items-center justify-between">
            <span>Sous-total</span>
            <span className="font-semibold">{cartTotal.toFixed(2)} €</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Livraison</span>
            <span className="font-semibold">Calculée à l&apos;étape suivante</span>
          </div>
        </div>

        <div className="mt-4 border-t border-amber-100 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-stone-700">Total estimé</span>
            <span className="text-xl font-extrabold text-stone-900">
              {cartTotal.toFixed(2)} €
            </span>
          </div>
        </div>

        <Link
          to="/checkout"
          className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-bordeaux-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-bordeaux-700"
        >
          Finaliser ma planche
        </Link>

        <button
          type="button"
          onClick={clearCart}
          className="mt-2 w-full rounded-lg border border-amber-200 px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-amber-50"
        >
          Vider le panier
        </button>
      </aside>
    </section>
  );
}

export default CartPage;