import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const navItems = [
  { label: 'Accueil', path: '/' },
  { label: 'La Cave', path: '/vins' },
  { label: 'Les Bières', path: '/bieres' },
  { label: "L'Affinage", path: '/fromages' },
  { label: 'Les Salaisons', path: '/charcuteries' },
  { label: 'Ma Planche', path: '/planche' },
];

function Header() {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-amber-200/80 bg-[#fffaf1]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="group">
            <img
              src="/logo.png"
              alt="Logo Trinque & Tranche"
              className="h-20 w-auto sm:h-24"
            />
          </Link>

          <Link
            to="/panier"
            className="relative inline-flex items-center rounded-full border border-amber-300 bg-white px-3 py-2 shadow-sm transition hover:-translate-y-0.5 hover:bg-amber-50"
          >
            <span className="text-lg" aria-hidden="true">
              🛒
            </span>
            <span className="ml-2 text-sm font-semibold text-stone-700">
              Votre cabas
            </span>
            <span className="ml-2 inline-flex min-w-6 items-center justify-center rounded-full bg-brand-500 px-1.5 py-0.5 text-xs font-bold text-white">
              {itemCount}
            </span>
          </Link>
        </div>

        <nav className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition ${
                  isActive
                    ? 'bg-brand-500 text-white shadow-sm'
                    : 'bg-white text-stone-700 ring-1 ring-amber-200 hover:bg-amber-50'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
