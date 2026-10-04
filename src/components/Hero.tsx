import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/footwear';
import { useCart } from '../context/CartContext';
import { SmartImage } from './SmartImage';
import {
  MessageCircle,
  ArrowDown,
  Clock,
  Truck,
  ShieldCheck,
  ShoppingBag,
  Check,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();
  const products = BUSINESS_INFO.products;
  const currentProduct = products[activeIdx] || products[0];

  const handleHeroAdd = () => {
    addToCart({
      productId: currentProduct.id,
      name: currentProduct.name,
      category: currentProduct.category,
      size: 'EU 42',
      leatherTone: 'Original Colorway',
      quantity: 1,
      pricingNote: currentProduct.priceDisplay,
      gradient: currentProduct.gradient,
      image: currentProduct.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const currentOrderLink = BUSINESS_INFO.createProductOrderLink(
    currentProduct.name,
    `${currentProduct.priceDisplay}, Size: EU 42`,
  );

  return (
    <section className="relative bg-[#2a1a12] text-[#f6efe6] pt-10 sm:pt-16 pb-20 sm:pb-28 lg:pb-36 rounded-b-[40px] sm:rounded-b-[64px] lg:rounded-b-[96px] shadow-2xl overflow-hidden transition-all">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[800px] h-[400px] sm:h-[500px] bg-gradient-to-b from-[#e8742a]/10 via-[#3a2014]/30 to-transparent blur-2xl sm:blur-3xl opacity-70" />
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[240px] sm:h-[300px] bg-[#e8742a]/10 blur-2xl sm:blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Brand Badge */}
        <div className="flex justify-center mb-5">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white p-1.5 shadow-2xl border-2 border-[#e8742a]/50 md:hover:scale-105 transition-transform duration-300">
            <img
              src="/logo.svg"
              alt="Sole Crafts Creation Official Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.08] border border-white/15 text-xs sm:text-sm text-[#f6efe6]/90 mb-5">
          <span className="w-2 h-2 rounded-full bg-[#e8742a]" />
          <span className="tracking-wide">Sole Crafts Creation</span>
          <span className="text-[#f6efe6]/40">·</span>
          <span className="text-[#e8742a] font-bold">WE MADE IT, YOU ROCK IT</span>
        </div>

        {/* Heading */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#f6efe6] max-w-3xl mx-auto leading-[1.15] text-balance">
          Handmade footwear, made for your every step.
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-[#f6efe6]/85 max-w-2xl mx-auto font-normal leading-relaxed text-pretty">
          Classy, comfortable slides and sandals, made by hand and priced fairly.
        </p>

        {/* Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href={BUSINESS_INFO.createWhatsAppLink('Hello Sole Crafts Creation, I would like to place an order.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#e8742a] hover:bg-[#d0621d] text-white font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-orange-900/40 active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2a1a12] focus-visible:ring-[#e8742a]"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            <span className="whitespace-nowrap">Order on WhatsApp</span>
          </a>

          <a
            href="#styles"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-[#f6efe6] border border-white/20 font-semibold text-base transition-all duration-200 hover:border-white/40 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#e8742a]"
          >
            <span>See our styles</span>
            <ArrowDown className="w-4 h-4 text-[#e8742a]" />
          </a>
        </div>

        {/* Hero Showcase Display */}
        <div className="mt-8 sm:mt-12">
          <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center select-none overflow-hidden">
            {/* Concentric subtle background rings */}
            <div className="absolute inset-0 -top-8 flex items-center justify-center pointer-events-none overflow-hidden">
              <div className="w-72 h-72 sm:w-[460px] sm:h-[460px] rounded-full border border-[#f6efe6]/[0.08] absolute" />
              <div className="w-96 h-96 sm:w-[560px] sm:h-[560px] rounded-full border border-[#f6efe6]/[0.05] absolute" />
              <div className="w-64 h-64 sm:w-[380px] sm:h-[380px] rounded-full bg-gradient-to-tr from-[#e8742a]/20 via-[#a04f1c]/15 to-transparent blur-3xl" />
            </div>

            {/* Showcase Main Card */}
            <div className="relative z-10 w-full group">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] min-h-[260px] sm:min-h-[340px] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/15 bg-[#1a0f09]">
                <SmartImage
                  key={currentProduct.id}
                  productId={currentProduct.id}
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  priority={true}
                  className="absolute inset-0 w-full h-full"
                />

                {/* Card Top Badges */}
                <div className="absolute top-3.5 sm:top-4 inset-x-3.5 sm:inset-x-5 flex items-center justify-between z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2a1a12] border border-white/20 text-xs font-semibold text-[#f6efe6]">
                    <span className="w-2 h-2 rounded-full bg-[#e8742a] animate-pulse" />
                    <span>100% Handcrafted</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#e8742a] text-white shadow-lg font-bold text-xs sm:text-sm tracking-wide">
                    <span>{currentProduct.priceDisplay}</span>
                  </div>
                </div>

                {/* Card Bottom Info */}
                <div className="absolute bottom-3.5 sm:bottom-4 inset-x-3.5 sm:inset-x-5 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-left">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#e8742a] bg-[#1a0f09]/80 px-2 py-0.5 rounded backdrop-blur-xs">
                      {currentProduct.category}
                    </span>
                    <h3 className="font-serif text-lg sm:text-2xl font-bold text-white tracking-tight mt-1 drop-shadow-md">
                      {currentProduct.name}
                    </h3>
                    <p className="text-xs text-white/80 line-clamp-1 drop-shadow">
                      {currentProduct.accentDetail}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={handleHeroAdd}
                      className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all backdrop-blur-md active:scale-95 ${
                        added
                          ? 'bg-emerald-700 text-white border-emerald-500'
                          : 'bg-white/20 hover:bg-white/30 text-white border-white/30'
                      }`}
                      title="Add to order bag"
                    >
                      {added ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <ShoppingBag className="w-4 h-4 text-[#e8742a]" />
                      )}
                      <span className="hidden xs:inline">{added ? 'Added' : 'Bag'}</span>
                    </button>

                    <a
                      href={currentOrderLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2.5 rounded-xl bg-[#e8742a] hover:bg-[#d0621d] text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" />
                      <span>Order</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Pill Selector below Showcase */}
            <div className="relative z-10 mt-4 flex items-center justify-center gap-2 flex-wrap max-w-full px-2">
              {products.map((p, idx) => {
                const isSelected = activeIdx === idx;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={`p-1.5 pr-3 rounded-full text-xs font-medium transition-all flex items-center gap-2 border ${
                      isSelected
                        ? 'bg-white text-[#2a1a12] border-white shadow-lg scale-105'
                        : 'bg-white/10 hover:bg-white/20 text-[#f6efe6] border-white/15'
                    }`}
                  >
                    <SmartImage
                      productId={p.id}
                      src={p.image}
                      alt=""
                      className="w-5 h-5 rounded-full object-cover shrink-0 border border-white/20"
                    />
                    <span className="truncate max-w-[110px] sm:max-w-[140px] text-[11px] sm:text-xs">
                      {p.name.split(' ')[0]} {p.name.split(' ')[1] || ''}
                    </span>
                    <span className="text-[10px] font-bold text-[#e8742a]">
                      {p.priceDisplay}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-xs sm:text-sm text-[#f6efe6]/75">
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-[#e8742a]" />
            <span>Open 24 hours on WhatsApp</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Truck className="w-4 h-4 text-[#e8742a]" />
            <span>We deliver to you</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#e8742a]" />
            <span>100% Genuine Handcrafted</span>
          </div>
        </div>
      </div>
    </section>
  );
};
