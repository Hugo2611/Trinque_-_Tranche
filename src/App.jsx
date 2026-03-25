import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import AgeVerificationModal from './components/AgeVerificationModal';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import BoardBuilder from './components/BoardBuilder';
import AccordSuggestionToast from './components/AccordSuggestionToast';

function App() {
  return (
    <div className="min-h-screen">
      <AgeVerificationModal />
      <Header />
      <AccordSuggestionToast />

      <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/vins" element={<ProductList initialCategory="Vin" />} />
          <Route path="/bieres" element={<ProductList initialCategory="Bière" />} />
          <Route path="/fromages" element={<ProductList initialCategory="Fromage" />} />
          <Route
            path="/charcuteries"
            element={<ProductList initialCategory="Charcuterie" />}
          />
          <Route path="/planche" element={<BoardBuilder />} />
          <Route path="/panier" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
