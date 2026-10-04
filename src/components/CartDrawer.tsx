import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { SmartImage } from './SmartImage';
import {
  X,
  Trash2,
  Plus,
  Minus,
  MessageCircle,
  ShoppingBag,
  ArrowRight,
} from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalCount,
    generateBatchWhatsAppUrl,
  } = useCart();

  const [deliveryNotes, setDeliveryNotes] = useState('');

  if (!isCartOpen) return null;

  const totalEstimate = cartItems.reduce((acc, item) => {
    const rawDigits = item.pricingNote.replace(/[^\d]/g, '');
    const num = parseInt(rawDigits, 10);
    return acc + (isNaN(num) ? 0 : num * item.quantity);
  }, 0);

  const formattedTotal = totalEstimate > 0 ? `₦${totalEstimate.toLocaleString()}` : '';

  const handleOrder = () => {
    const url = generateBatchWhatsAppUrl(deliveryNotes);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer Panel */}
      <aside className="relative z-10 w-full max-w-md bg-[#fffdfa] text-[#2a1a12] shadow-2xl flex flex-col h-full">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#2a1a12]/10 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#e8742a]" />
            <h3 className="font-serif font-bold text-lg text-[#2a1a12]">
              Your Order Bag
            </h3>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#f6efe6] text-[#e8742a] border border-[#2a1a12]/10">
              {totalCount} {totalCount === 1 ? 'pair' : 'pairs'}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-lg text-[#2a1a12]/60 hover:text-[#2a1a12] hover:bg-black/5 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#f6efe6] text-[#e8742a] flex items-center justify-center mx-auto">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h4 className="font-serif font-bold text-base text-[#2a1a12]">
                Your bag is empty
              </h4>
              <p className="text-xs text-[#2a1a12]/60 max-w-xs mx-auto">
                Select your favorite handmade slides or sandals from our collection and add them to your order.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="px-5 py-2.5 rounded-full bg-[#e8742a] text-white text-xs font-semibold shadow-xs"
                >
                  Browse Styles
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between pb-1">
                <span className="text-xs text-[#2a1a12]/60 font-medium">Selected Items</span>
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-[11px] text-red-600 hover:underline"
                >
                  Clear all
                </button>
              </div>

              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl bg-white border border-[#2a1a12]/10 shadow-xs flex gap-3.5 items-center"
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#1c110b] shrink-0 border border-black/10">
                      <SmartImage
                        productId={item.id}
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <h5 className="font-serif font-bold text-xs sm:text-sm text-[#2a1a12] truncate">
                          {item.name}
                        </h5>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 text-[#2a1a12]/40 hover:text-red-700 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5 mt-1">
                        <span className="text-[10px] sm:text-[11px] font-semibold bg-[#f6efe6] text-[#2a1a12] px-2 py-0.5 rounded border border-[#2a1a12]/10">
                          {item.size}
                        </span>
                        {item.leatherTone && (
                          <span className="text-[10px] sm:text-[11px] text-[#2a1a12]/80 bg-[#f6efe6] px-2 py-0.5 rounded border border-[#2a1a12]/10 truncate max-w-[130px]">
                            {item.leatherTone}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#2a1a12]/5">
                        <span className="text-xs text-[#e8742a] font-bold">
                          {item.pricingNote}
                        </span>

                        <div className="flex items-center border border-[#2a1a12]/20 rounded-lg bg-[#fcfaf7] overflow-hidden">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1.5 hover:bg-[#2a1a12]/10 text-[#2a1a12] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2 text-xs font-bold tabular-nums min-w-[20px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1.5 hover:bg-[#2a1a12]/10 text-[#2a1a12] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery Notes / Address */}
              <div className="pt-3 border-t border-[#2a1a12]/10">
                <label className="block text-xs font-semibold text-[#2a1a12]/80 mb-1.5">
                  Order Notes or Delivery Address (Optional):
                </label>
                <textarea
                  rows={2}
                  maxLength={400}
                  value={deliveryNotes}
                  onChange={(e) => setDeliveryNotes(e.target.value.slice(0, 400))}
                  placeholder="e.g. Please deliver to Victoria Island, Lagos. Size 42..."
                  className="w-full text-xs p-2.5 rounded-xl border border-[#2a1a12]/15 bg-white placeholder-[#2a1a12]/40 focus:outline-none focus:border-[#e8742a]"
                />
              </div>
            </>
          )}
        </div>

        {/* Footer Actions */}
        {cartItems.length > 0 && (
          <div className="p-5 sm:p-6 bg-white border-t border-[#2a1a12]/10 space-y-3.5">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-[#2a1a12]/75">
                <span>Total Pairs</span>
                <span className="font-bold text-[#2a1a12] text-sm tabular-nums">
                  {totalCount} {totalCount === 1 ? 'pair' : 'pairs'}
                </span>
              </div>
              {formattedTotal && (
                <div className="flex justify-between items-baseline pt-1 border-t border-[#2a1a12]/10">
                  <span className="text-sm font-semibold text-[#2a1a12]">Total Price</span>
                  <span className="font-serif font-bold text-xl text-[#e8742a] tabular-nums">
                    {formattedTotal}
                  </span>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={handleOrder}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#e8742a] hover:bg-[#d0621d] text-white font-semibold text-sm transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Send Order on WhatsApp</span>
              <ArrowRight className="w-4 h-4 shrink-0 ml-1" />
            </button>

            <p className="text-[11px] text-center text-[#2a1a12]/60">
              Orders are confirmed directly on WhatsApp with our lead artisan.
            </p>
          </div>
        )}
      </aside>
    </div>
  );
};
