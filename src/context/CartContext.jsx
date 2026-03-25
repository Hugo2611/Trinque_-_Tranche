import { createContext, useContext, useMemo, useState } from 'react';
import { products } from '../data/products';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [accordSuggestion, setAccordSuggestion] = useState(null);

  const productById = useMemo(
    () => Object.fromEntries(products.map((product) => [product.id, product])),
    []
  );

  // Ajoute un produit au panier ou augmente sa quantité s'il existe déjà.
  const addToCart = (product) => {
    const pairedProduct = product.pairingId ? productById[product.pairingId] : null;

    setItems((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });

    if (pairedProduct && product.category !== pairedProduct.category) {
      setAccordSuggestion({ source: product, suggested: pairedProduct });
    }
  };

  // Augmente la quantité d'un article du panier.
  const increaseQuantity = (productId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Diminue la quantité d'un article (retire l'article si quantité = 0).
  const decreaseQuantity = (productId) => {
    setItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Supprime complètement un article du panier.
  const removeFromCart = (productId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // Vide entièrement le panier.
  const clearCart = () => {
    setItems([]);
  };

  const dismissAccordSuggestion = () => {
    setAccordSuggestion(null);
  };

  // Nombre total d'articles (somme des quantités) pour l'icône panier.
  const itemCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items]
  );

  // Total du panier (somme des prix * quantité).
  const cartTotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items]
  );

  const value = {
    items,
    itemCount,
    cartTotal,
    accordSuggestion,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    dismissAccordSuggestion,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart doit être utilisé à l'intérieur de CartProvider");
  }

  return context;
}
