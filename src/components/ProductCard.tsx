import React, { useState } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { SmartImage } from './SmartImage';
import { SIZES, LEATHER_TONES, BUSINESS_INFO } from '../data/footwear';
import { ShoppingBag, MessageCircle, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('EU 42');
  const [selectedTone, setSelectedTone] = useState('Original Colorway');
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart({
      productId: product.id,
      name: product.name,
      category: product.category,
      size: selectedSize,
      leatherTone: selectedTone,
      quantity: 1,
      pricingNote: product.priceDisplay,
      gradient: product.gradient,
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const orderLink = BUSINESS_INFO.createProductOrderLink(
    product.name,
    `${product.priceDisplay}, Size: ${selectedSize}, Color: ${selectedTone}`,
  );

  return (
    <article className="group rounded-3xl bg-white border border-[#2a1a12]/15 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
      {/* Product Image Container */}
      <div className="relative aspect-[4/3] bg-[#f0eae1] overflow-hidden select-none">
        <SmartImage
          productId={product.id}
          src={product.image}
          alt={product.name}
          className="w-full h-full"
        />

        {/* Top Badges */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#e8742a] bg-[#2a1a12] px-2.5 py-1 rounded-full border border-white/15">
            {product.category}
          </span>
          <span className="text-xs font-bold bg-[#e8742a] text-white px-3 py-1 rounded-full shadow-md">
            {product.priceDisplay}
          </span>
        </div>

        {/* Accent detail chip */}
        <div className="absolute bottom-2.5 left-3">
          <span className="text-[10px] font-medium text-white/90 bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
            {product.accentDetail}
          </span>
        </div>
      </div>

      {/* Details & Selectors */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif font-bold text-lg text-[#2a1a12] group-hover:text-[#e8742a] transition-colors leading-snug">
            {product.name}
          </h3>

          <p className="text-xs text-[#2a1a12]/75 mt-1.5 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Size Selector */}
          <div className="mt-4 pt-3 border-t border-[#2a1a12]/10">
            <span className="block text-[11px] font-semibold text-[#2a1a12]/80 mb-1.5">
              Select Size:
            </span>
            <div className="flex flex-wrap gap-1">
              {SIZES.map((sz) => (
                <button
                  key={sz}
                  type="button"
                  onClick={() => setSelectedSize(sz)}
                  className={`text-[11px] px-2 py-1 rounded font-medium transition-all ${
                    selectedSize === sz
                      ? 'bg-[#2a1a12] text-[#f6efe6] shadow-xs'
                      : 'bg-[#f6efe6] text-[#2a1a12] hover:bg-[#ede2d3]'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Tone / Finish Selector */}
          <div className="mt-3">
            <span className="block text-[11px] font-semibold text-[#2a1a12]/80 mb-1.5">
              Leather Finish:
            </span>
            <div className="flex flex-wrap gap-1">
              {LEATHER_TONES.map((tn) => (
                <button
                  key={tn}
                  type="button"
                  onClick={() => setSelectedTone(tn)}
                  className={`text-[10px] sm:text-[11px] px-2 py-0.5 rounded font-medium transition-all ${
                    selectedTone === tn
                      ? 'bg-[#e8742a] text-white shadow-xs'
                      : 'bg-[#f6efe6] text-[#2a1a12] hover:bg-[#ede2d3]'
                  }`}
                >
                  {tn}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-5 mt-4 border-t border-[#2a1a12]/10">
          <button
            type="button"
            onClick={handleAdd}
            className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border font-semibold text-xs sm:text-sm transition-all duration-200 min-h-[44px] ${
              added
                ? 'bg-emerald-700 text-white border-emerald-700'
                : 'bg-white hover:bg-[#f6efe6] text-[#2a1a12] border-[#2a1a12]/20 shadow-xs active:scale-95'
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4 text-white" />
                <span>Added!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4 text-[#e8742a]" />
                <span>Add to Bag</span>
              </>
            )}
          </button>

          <a
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#e8742a] hover:bg-[#d0621d] text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 min-h-[44px]"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>Order</span>
          </a>
        </div>
      </div>
    </article>
  );
};
