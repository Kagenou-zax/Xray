import React, { useState, useRef } from 'react';
import { BUSINESS_INFO, SIZES, LEATHER_TONES } from '../data/footwear';
import { ProductCard } from './ProductCard';
import { SmartImage } from './SmartImage';
import { useCart } from '../context/CartContext';
import {
  LayoutGrid,
  SlidersVertical,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  MessageCircle,
  Check,
} from 'lucide-react';

export const StylesSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'slider'>('grid');
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideSize, setSlideSize] = useState('EU 42');
  const [slideTone, setSlideTone] = useState('Original Colorway');
  const [slideAdded, setSlideAdded] = useState(false);
  const { addToCart } = useCart();

  const products = BUSINESS_INFO.products;
  const current = products[activeSlide] || products[0];

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prevSlide = () => {
    setActiveSlide((curr) => (curr === 0 ? products.length - 1 : curr - 1));
  };

  const nextSlide = () => {
    setActiveSlide((curr) => (curr === products.length - 1 ? 0 : curr + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleSlideAdd = () => {
    addToCart({
      productId: current.id,
      name: current.name,
      category: current.category,
      size: slideSize,
      leatherTone: slideTone,
      quantity: 1,
      pricingNote: current.priceDisplay,
      gradient: current.gradient,
      image: current.image,
    });
    setSlideAdded(true);
    setTimeout(() => setSlideAdded(false), 2000);
  };

  const slideOrderLink = BUSINESS_INFO.createProductOrderLink(
    current.name,
    `${current.priceDisplay}, Size: ${slideSize}, Color: ${slideTone}`,
  );

  return (
    <section id="styles" className="py-20 sm:py-28 bg-[#f6efe6] text-[#2a1a12] scroll-mt-20 border-t border-[#2a1a12]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e8742a] mb-2">
            <span className="w-5 h-[1.5px] bg-[#e8742a]" />
            <span>Featured Collection</span>
            <span className="w-5 h-[1.5px] bg-[#e8742a]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2a1a12]">
            Our Handcrafted Styles
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-[#2a1a12]/75 leading-relaxed text-balance">
            Every pair is meticulously created from hand-selected materials to give you distinct style, cloud-like comfort, and lasting durability.
          </p>

          {/* View Toggle */}
          <div className="mt-6 inline-flex items-center p-1 rounded-xl bg-white border border-[#2a1a12]/15 shadow-xs">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'grid'
                  ? 'bg-[#2a1a12] text-[#f6efe6] shadow-xs'
                  : 'text-[#2a1a12]/70 hover:text-[#2a1a12]'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Grid View</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('slider')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'slider'
                  ? 'bg-[#2a1a12] text-[#f6efe6] shadow-xs'
                  : 'text-[#2a1a12]/70 hover:text-[#2a1a12]'
              }`}
            >
              <SlidersVertical className="w-4 h-4" />
              <span>Interactive Showcase</span>
            </button>
          </div>
        </div>

        {/* Content based on View Mode */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
            {/* Top Navigation bar */}
            <div className="w-full flex items-center justify-between mb-4 sm:mb-6 px-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#e8742a] bg-[#e8742a]/10 px-2.5 py-1 rounded-md">
                  Slide {activeSlide + 1} of {products.length}
                </span>
                <span className="text-xs text-[#2a1a12]/60 hidden sm:inline">
                  Swipe or use arrows to view styles
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-white border border-[#2a1a12]/15 text-[#2a1a12] hover:bg-[#2a1a12] hover:text-[#f6efe6] transition-all flex items-center justify-center shadow-xs active:scale-95"
                  aria-label="Previous product"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-white border border-[#2a1a12]/15 text-[#2a1a12] hover:bg-[#2a1a12] hover:text-[#f6efe6] transition-all flex items-center justify-center shadow-xs active:scale-95"
                  aria-label="Next product"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Showcase Card */}
            <div
              className="w-full rounded-3xl bg-white border border-[#2a1a12]/15 shadow-xl overflow-hidden transition-all duration-300"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px]">
                {/* Image half */}
                <div className="md:col-span-6 relative bg-[#f0eae1] min-h-[320px] md:min-h-[460px] overflow-hidden select-none">
                  <SmartImage
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full"
                  />

                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#e8742a] bg-[#2a1a12] px-3 py-1 rounded-full border border-white/15">
                      {current.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-medium bg-black/60 px-2.5 py-1 rounded backdrop-blur-xs">
                      {current.accentDetail}
                    </span>
                    <span className="text-sm font-bold bg-[#e8742a] px-3.5 py-1 rounded-full shadow-lg">
                      {current.priceDisplay}
                    </span>
                  </div>
                </div>

                {/* Details half */}
                <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2a1a12] leading-tight">
                      {current.name}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-[#2a1a12]/80 leading-relaxed">
                      {current.description}
                    </p>

                    {/* Size Selector */}
                    <div className="mt-5">
                      <span className="block text-xs font-semibold text-[#2a1a12]/80 mb-2">
                        Size: <strong className="text-[#2a1a12]">{slideSize}</strong>
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {SIZES.map((sz) => (
                          <button
                            key={sz}
                            type="button"
                            onClick={() => setSlideSize(sz)}
                            className={`text-xs px-2.5 py-1 rounded-md font-medium transition-all ${
                              slideSize === sz
                                ? 'bg-[#2a1a12] text-[#f6efe6] shadow-xs'
                                : 'bg-[#f6efe6] text-[#2a1a12] hover:bg-[#ede2d3]'
                            }`}
                          >
                            {sz}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Finish Selector */}
                    <div className="mt-4">
                      <span className="block text-xs font-semibold text-[#2a1a12]/80 mb-2">
                        Leather Tone: <strong className="text-[#e8742a]">{slideTone}</strong>
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {LEATHER_TONES.map((tn) => (
                          <button
                            key={tn}
                            type="button"
                            onClick={() => setSlideTone(tn)}
                            className={`text-xs px-2.5 py-1 rounded-md font-medium transition-all ${
                              slideTone === tn
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
                  <div className="pt-6 border-t border-[#2a1a12]/10 space-y-2.5 mt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={handleSlideAdd}
                        className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border font-semibold text-sm transition-all duration-200 min-h-[44px] ${
                          slideAdded
                            ? 'bg-emerald-700 text-white border-emerald-700'
                            : 'bg-[#f6efe6] hover:bg-[#ede2d3] text-[#2a1a12] border-[#2a1a12]/15 shadow-xs'
                        }`}
                      >
                        {slideAdded ? (
                          <>
                            <Check className="w-4 h-4 text-white" />
                            <span>Added to Bag!</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-4 h-4 text-[#e8742a]" />
                            <span>Add to Bag</span>
                          </>
                        )}
                      </button>

                      <a
                        href={slideOrderLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#e8742a] hover:bg-[#d0621d] text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 min-h-[44px]"
                      >
                        <MessageCircle className="w-4 h-4 shrink-0" />
                        <span>Order on WhatsApp</span>
                      </a>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-[#2a1a12]/60 pt-1">
                      <span>Fast WhatsApp response</span>
                      <span>Nationwide delivery available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide Indicators and Thumbnail buttons */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 w-full px-2">
              <div className="flex items-center gap-2">
                {products.map((p, idx) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      activeSlide === idx
                        ? 'w-8 bg-[#e8742a]'
                        : 'w-2.5 bg-[#2a1a12]/20 hover:bg-[#2a1a12]/40'
                    }`}
                    aria-label={`Go to slide ${idx + 1}: ${p.name}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1">
                {products.map((p, idx) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    className={`p-1.5 pr-3 rounded-xl text-xs font-semibold transition-all border flex items-center gap-2 whitespace-nowrap ${
                      activeSlide === idx
                        ? 'bg-[#2a1a12] text-[#f6efe6] border-[#2a1a12] shadow-xs'
                        : 'bg-white/80 text-[#2a1a12]/75 hover:bg-white border-[#2a1a12]/15'
                    }`}
                  >
                    <SmartImage
                      src={p.image}
                      alt={p.name}
                      className="w-7 h-7 rounded-lg object-cover"
                    />
                    <span className="truncate max-w-[120px]">{p.name.split(' ')[0]}</span>
                    <span
                      className={`text-[10px] font-mono ${
                        activeSlide === idx ? 'text-[#e8742a]' : 'text-[#2a1a12]/50'
                      }`}
                    >
                      {p.priceDisplay}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
