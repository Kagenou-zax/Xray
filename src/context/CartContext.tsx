import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem } from '../types';
import { BUSINESS_INFO } from '../data/footwear';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'id'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalCount: number;
  generateBatchWhatsAppUrl: (notes?: string) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);
const CART_STORAGE_KEY = 'sole_crafts_cart_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, [cartItems]);

  const addToCart = (item: Omit<CartItem, 'id'>) => {
    const id = `${item.productId}-${item.size}-${item.leatherTone}`;
    setCartItems((prev) => {
      const existingIdx = prev.findIndex((ci) => ci.id === id);
      if (existingIdx > -1) {
        const copy = [...prev];
        copy[existingIdx].quantity += item.quantity;
        return copy;
      }
      return [...prev, { ...item, id }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((i) => {
          if (i.id === id) {
            const nextQty = i.quantity + delta;
            return nextQty > 0 ? { ...i, quantity: nextQty } : null;
          }
          return i;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  const generateBatchWhatsAppUrl = (notes?: string) => {
    if (cartItems.length === 0) {
      return BUSINESS_INFO.createWhatsAppLink('Hello Sole Crafts Creation, I would like to make an inquiry.');
    }

    let message = `Hello Sole Crafts Creation, I would like to place an order for ${totalCount} pair${
      totalCount > 1 ? 's' : ''
    }:\n\n`;

    cartItems.forEach((item, idx) => {
      message += `${idx + 1}. *${item.name}* (${item.pricingNote})\n`;
      message += `   - Quantity: ${item.quantity}\n`;
      message += `   - Size: ${item.size}\n`;
      if (item.leatherTone) {
        message += `   - Leather Tone: ${item.leatherTone}\n`;
      }
      if (item.customNote) {
        message += `   - Note: ${item.customNote}\n`;
      }
      message += '\n';
    });

    if (notes && notes.trim()) {
      message += `*Delivery Details / Notes:*\n${notes.trim()}\n\n`;
    }

    message += 'Please let me know the total price and delivery schedule. Thank you!';
    return `https://wa.me/2348129006150?text=${encodeURIComponent(message)}`;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalCount,
        generateBatchWhatsAppUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
