import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCart();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    deliverySlot: 'standard',
    paymentMethod: 'card',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [confirmedTotal, setConfirmedTotal] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulation d'un appel API de paiement/commande.
    setIsSubmitting(true);

    window.setTimeout(() => {
      const fakeOrderNumber = `TRR-${Date.now().toString().slice(-6)}`;
      setOrderNumber(fakeOrderNumber);
      setConfirmedTotal(cartTotal);
      setIsSuccess(true);
      clearCart();
      setIsSubmitting(false);
    }, 900);
  };

  if (isSuccess) {
    return (
      <section className="mx-auto max-w-2xl rounded-2xl border border-emerald-200 bg-white p-6 text-center shadow-sm sm:p-8">
        <p className="text-4xl" aria-hidden="true">
          ✅
        </p>
        <h2 className="mt-2 text-2xl font-bold text-stone-900">
          Planche confirmée
        </h2>
        <p className="mt-2 text-sm text-stone-600">
          Merci {formData.fullName}, votre commande <strong>{orderNumber}</strong>{' '}
          est en préparation chez nos artisans.
        </p>
        <p className="mt-2 text-sm text-stone-700">
          Montant validé : <strong>{confirmedTotal.toFixed(2)} €</strong>
        </p>
        <Link
          to="/"
          className="mt-5 inline-flex rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          Retour à la boutique
        </Link>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="rounded-2xl border border-dashed border-amber-200 bg-white p-6 text-center sm:p-10">
        <h2 className="text-xl font-bold text-stone-900">
          Votre cabas est vide
        </h2>
        <p className="mt-2 text-sm text-stone-600">
          Ajoutez des produits avant de passer à l&apos;étape de commande.
        </p>
        <Link
          to="/panier"
          className="mt-5 inline-flex rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          Voir mon cabas
        </Link>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-5 lg:grid-cols-3">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-2xl border border-amber-100 bg-white p-5 lg:col-span-2"
      >
        <h2 className="text-xl font-bold text-stone-900">Finaliser votre planche</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="text-sm font-medium text-stone-700">
            Nom complet
            <input
              required
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-amber-200 px-3 py-2 text-sm outline-none ring-brand-500 focus:ring"
              placeholder="Jean Dupont"
            />
          </label>

          <label className="text-sm font-medium text-stone-700">
            Email
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-amber-200 px-3 py-2 text-sm outline-none ring-brand-500 focus:ring"
              placeholder="jean@email.com"
            />
          </label>

          <label className="text-sm font-medium text-stone-700">
            Téléphone
            <input
              required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-amber-200 px-3 py-2 text-sm outline-none ring-brand-500 focus:ring"
              placeholder="06 00 00 00 00"
            />
          </label>

          <label className="text-sm font-medium text-stone-700">
            Code postal
            <input
              required
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-amber-200 px-3 py-2 text-sm outline-none ring-brand-500 focus:ring"
              placeholder="75000"
            />
          </label>

          <label className="sm:col-span-2 text-sm font-medium text-stone-700">
            Adresse
            <input
              required
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-amber-200 px-3 py-2 text-sm outline-none ring-brand-500 focus:ring"
              placeholder="12 rue du Terroir"
            />
          </label>

          <label className="text-sm font-medium text-stone-700">
            Ville
            <input
              required
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-amber-200 px-3 py-2 text-sm outline-none ring-brand-500 focus:ring"
              placeholder="Lyon"
            />
          </label>

          <label className="text-sm font-medium text-stone-700">
            Créneau livraison
            <select
              name="deliverySlot"
              value={formData.deliverySlot}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-amber-200 px-3 py-2 text-sm outline-none ring-brand-500 focus:ring"
            >
              <option value="standard">Standard (48h)</option>
              <option value="express">Express (24h)</option>
              <option value="fresh-priority">Priorité frais (isotherme)</option>
            </select>
          </label>
        </div>

        <fieldset className="rounded-lg border border-amber-100 p-3">
          <legend className="px-1 text-sm font-semibold text-stone-800">
            Paiement
          </legend>
          <div className="mt-2 space-y-2 text-sm text-stone-700">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={formData.paymentMethod === 'card'}
                onChange={handleChange}
              />
              Carte bancaire
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={formData.paymentMethod === 'paypal'}
                onChange={handleChange}
              />
              PayPal
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="paymentMethod"
                value="cash-on-delivery"
                checked={formData.paymentMethod === 'cash-on-delivery'}
                onChange={handleChange}
              />
              Paiement à la livraison
            </label>
          </div>
        </fieldset>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-bordeaux-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-bordeaux-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? 'Traitement en cours...' : 'Confirmer ma commande'}
        </button>
      </form>

      <aside className="h-fit rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
        <h3 className="text-lg font-bold text-stone-900">Résumé de commande</h3>

        <ul className="mt-3 space-y-2">
          {items.map((item) => (
            <li key={item.id} className="flex items-center justify-between text-sm">
              <span className="max-w-[70%] truncate text-stone-700">
                {item.name} × {item.quantity}
              </span>
              <span className="font-semibold text-stone-900">
                {(item.price * item.quantity).toFixed(2)} €
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-4 border-t border-amber-100 pt-4">
          <div className="flex items-center justify-between text-sm text-stone-700">
            <span>Total</span>
            <span className="text-xl font-extrabold text-stone-900">
              {cartTotal.toFixed(2)} €
            </span>
          </div>
        </div>
      </aside>
    </section>
  );
}

export default CheckoutPage;