import React from 'react';
import { useCart } from '../context/CartContext';
import { BUSINESS_INFO } from '../data/footwear';
import { ShoppingBag, MessageCircle } from 'lucide-react';

export const QuickActions: React.FC = () => {
  const { totalCount, setIsCartOpen } = useCart();

  return (
    <aside
      aria-label="Quick actions"
      className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-end gap-2.5"
    >
      {totalCount > 0 && (
        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2.5 bg-[#2a1a12] hover:bg-[#3d251a] text-[#f6efe6] rounded-full shadow-2xl active:scale-95 transition-all border border-white/20 text-xs sm:text-sm font-semibold min-h-[44px]"
        >
          <div className="relative">
            <ShoppingBag className="w-4 h-4 text-[#e8742a]" />
            <span className="absolute -top-1 -right-1.5 w-2 h-2 rounded-full bg-[#e8742a] animate-ping" />
          </div>
          <span>Order Bag ({totalCount})</span>
        </button>
      )}

      <a
        href={BUSINESS_INFO.createWhatsAppLink('Hello Sole Crafts Creation, I would like to place an order.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Sole Crafts Creation on WhatsApp"
        className="flex items-center gap-2 px-4 py-3 bg-[#e8742a] hover:bg-[#d0621d] text-white rounded-full shadow-2xl active:scale-95 transition-all text-xs sm:text-sm font-bold min-h-[44px]"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="hidden sm:inline">Order on WhatsApp</span>
        <span className="sm:hidden">WhatsApp</span>
      </a>
    </aside>
  );
};
