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
  Sparkles,
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
    <section className="relative bg-[#2a1a12] text-[#f6efe6] pt-8 sm:pt-14 pb-16 sm:pb-24 lg:pb-32 rounded-b-[36px] sm:rounded-b-[56px] shadow-2xl transition-all">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[800px] h-[350px] sm:h-[450px] bg-gradient-to-b from-[#e8742a]/15 via-[#3a2014]/25 to-transparent blur-3xl opacity-80" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] h-[200px] bg-[#e8742a]/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header Introduction */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Brand Logo */}
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white p-2 shadow-2xl border-2 border-[#e8742a]/60 transition-transform duration-300 hover:scale-105">
              <img
                src="/logo.svg"
                alt="Sole Crafts Creation Official Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Slogan Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15 text-xs sm:text-sm text-[#f6efe6]/90 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#e8742a] animate-pulse" />
            <span className="font-medium tracking-wide">Sole Crafts Creation</span>
            <span className="text-[#f6efe6]/40">·</span>
            <span className="text-[#e8742a] font-bold tracking-wide">WE MADE IT, YOU ROCK IT</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#f6efe6] leading-[1.15] text-balance">
            Handmade footwear, made for your every step.
          </h1>

          <p className="mt-3 sm:mt-5 text-base sm:text-lg md:text-xl text-[#f6efe6]/85 font-normal leading-relaxed text-pretty">
            Classy, comfortable slides and sandals, made by hand and priced fairly.
          </p>

          {/* Top CTAs */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
            <a
              href={BUSINESS_INFO.createWhatsAppLink('Hello Sole Crafts Creation, I would like to place an order.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#e8742a] hover:bg-[#d0621d] text-white font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-orange-900/40 active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2a1a12] focus-visible:ring-[#e8742a]"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              <span>Order on WhatsApp</span>
            </a>

            <a
              href="#styles"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-[#f6efe6] border border-white/20 font-semibold text-base transition-all duration-200 hover:border-white/40 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#e8742a]"
            >
              <span>See our styles</span>
              <ArrowDown className="w-4 h-4 text-[#e8742a]" />
            </a>
          </div>
        </div>

        {/* Hero Showcase Display: Clean & Unobstructed */}
        <div className="mt-10 sm:mt-14 max-w-3xl mx-auto">
          {/* Card Container */}
          <div className="rounded-3xl bg-[#1c110b] border-2 border-white/15 shadow-2xl overflow-hidden">
            {/* 1. Footwear Photo Frame - Fully clear and visible, no text covering the shoes */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-[#140c07] flex items-center justify-center overflow-hidden">
              <SmartImage
                key={currentProduct.id}
                src={currentProduct.image}
                alt={currentProduct.name}
                priority={true}
                className="w-full h-full object-cover sm:object-contain object-center"
              />

              {/* Floating subtle badges pinned neatly to top corners */}
              <div className="absolute top-3.5 inset-x-3.5 sm:inset-x-5 flex items-center justify-between pointer-events-none z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2a1a12]/90 backdrop-blur-md border border-white/25 text-xs font-semibold text-[#f6efe6] shadow-md pointer-events-auto">
                  <Sparkles className="w-3.5 h-3.5 text-[#e8742a]" />
                  <span>100% Handcrafted</span>
                </div>
                <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#e8742a] text-white shadow-lg font-bold text-sm tracking-wide pointer-events-auto">
                  <span>{currentProduct.priceDisplay}</span>
                </div>
              </div>
            </div>

            {/* 2. Dedicated Info Section Below Photo: High contrast, clearly readable */}
            <div className="p-5 sm:p-7 bg-[#23150e] border-t border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-left space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#e8742a] bg-[#140c07] px-2.5 py-1 rounded border border-[#e8742a]/30">
                      {currentProduct.category}
                    </span>
                    <span className="text-xs text-[#f6efe6]/60">
                      Accent: <strong className="text-[#f6efe6]">{currentProduct.accentDetail}</strong>
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {currentProduct.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#f6efe6]/80 max-w-lg leading-relaxed">
                    {currentProduct.description}
                  </p>
                </div>

                {/* Direct Action Buttons for this showcased shoe */}
                <div className="flex items-center gap-2.5 shrink-0 pt-2 sm:pt-0">
                  <button
                    type="button"
                    onClick={handleHeroAdd}
                    className={`px-4 py-3 rounded-2xl border text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all active:scale-95 cursor-pointer ${
                      added
                        ? 'bg-emerald-700 text-white border-emerald-500'
                        : 'bg-white/10 hover:bg-white/20 text-[#f6efe6] border-white/20'
                    }`}
                    title="Add to order bag"
                  >
                    {added ? (
                      <Check className="w-4 h-4 text-emerald-200" />
                    ) : (
                      <ShoppingBag className="w-4 h-4 text-[#e8742a]" />
                    )}
                    <span>{added ? 'Added' : 'Add to Bag'}</span>
                  </button>

                  <a
                    href={currentOrderLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-2xl bg-[#e8742a] hover:bg-[#d0621d] text-white text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>Order Now</span>
                  </a>
                </div>
              </div>

              {/* 3. Selector Switcher: Switch between the 4 authentic styles */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <span className="text-[11px] uppercase tracking-wider text-[#e8742a] font-semibold block mb-2.5 text-left">
                  Tap to view another style:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {products.map((p, idx) => {
                    const isSelected = activeIdx === idx;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setActiveIdx(idx)}
                        className={`p-2 rounded-xl text-left transition-all border flex items-center gap-2.5 cursor-pointer ${
                          isSelected
                            ? 'bg-white text-[#2a1a12] border-white shadow-lg ring-2 ring-[#e8742a]'
                            : 'bg-white/5 hover:bg-white/10 text-[#f6efe6] border-white/15'
                        }`}
                      >
                        <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-black/40 border border-white/10">
                          <SmartImage
                            src={p.image}
                            alt={p.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-xs font-semibold">
                            {p.name.split(' ')[0]} {p.name.split(' ')[1] || ''}
                          </p>
                          <p
                            className={`text-[11px] font-bold ${
                              isSelected ? 'text-[#e8742a]' : 'text-[#e8742a]'
                            }`}
                          >
                            {p.priceDisplay}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 sm:mt-14 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-xs sm:text-sm text-[#f6efe6]/85">
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-[#e8742a] shrink-0" />
            <span>Open 24 hours on WhatsApp</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Truck className="w-4 h-4 text-[#e8742a] shrink-0" />
            <span>We deliver nationwide to you</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#e8742a] shrink-0" />
            <span>100% Genuine Handcrafted</span>
          </div>
        </div>
      </div>
    </section>
  );
};
