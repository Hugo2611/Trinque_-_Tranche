import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function AccordSuggestionToast() {
  const { accordSuggestion, addToCart, dismissAccordSuggestion } = useCart();

  if (!accordSuggestion) return null;

  const { source, suggested } = accordSuggestion;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[92vw] max-w-sm rounded-2xl border border-mustard-500/30 bg-white p-4 shadow-2xl">
      <p className="text-xs font-semibold uppercase tracking-wider text-mustard-700">
        L&apos;Accord Parfait
      </p>
      <p className="mt-1 text-sm text-slatewarm-500">
        Sublimez <strong>{source.name}</strong> avec <strong>{suggested.name}</strong>.
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => {
            addToCart(suggested);
            dismissAccordSuggestion();
          }}
          className="rounded-lg bg-bordeaux-500 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-bordeaux-700"
        >
          Ajouter cet accord
        </button>

        <Link
          to="/panier"
          onClick={dismissAccordSuggestion}
          className="rounded-lg border border-amber-300 px-3 py-1.5 text-xs font-semibold text-stone-700 hover:bg-amber-50"
        >
          Voir mon cabas
        </Link>

        <button
          type="button"
          onClick={dismissAccordSuggestion}
          className="ml-auto text-xs font-medium text-stone-500 hover:text-stone-700"
        >
          Ignorer
        </button>
      </div>
    </div>
  );
}

export default AccordSuggestionToast;
