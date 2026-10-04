import React from 'react';
import { BUSINESS_INFO } from '../data/footwear';
import { Hammer, Sparkles, Tag, Check } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const points = [
    {
      icon: Hammer,
      title: '100% Handmade',
      detail:
        'Every single cut, edge burnish, and stitch is completed by hand with patience and master artisan technique.',
    },
    {
      icon: Sparkles,
      title: 'Comfortable Fit',
      detail:
        'Contoured footbeds with soft leather lining ensure that each step feels natural, cushioned, and light on your feet.',
    },
    {
      icon: Tag,
      title: 'Affordable Prices',
      detail:
        'Premium workshop-grade footwear directly to you at fair, accessible prices with zero retail markups.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#f6efe6] text-[#2a1a12] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Points */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e8742a]">
              <span className="w-6 h-[1.5px] bg-[#e8742a]" />
              <span>About Us</span>
              <span className="w-6 h-[1.5px] bg-[#e8742a]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2a1a12] leading-[1.2] text-balance">
              Every pair is made by hand, with care for the fit, the finish and the style.
            </h2>

            <p className="text-base sm:text-lg text-[#2a1a12]/80 leading-relaxed">
              At Sole Crafts Creation, we believe quality footwear should be neither mass-produced nor overpriced.
              We take the time to sculpt each slide and sandal by hand, combining traditional leathercraft techniques
              with modern everyday comfort.
            </p>

            <div className="space-y-4 pt-2">
              {points.map((pt) => {
                const Icon = pt.icon;
                return (
                  <div
                    key={pt.title}
                    className="p-4 rounded-2xl bg-white border border-[#2a1a12]/10 shadow-xs hover:border-[#e8742a]/30 transition-all flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#e8742a]/10 text-[#e8742a] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-base text-[#2a1a12]">
                        {pt.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#2a1a12]/75 mt-1 leading-relaxed">
                        {pt.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Footwear Anatomy Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-[#fffdfa] border border-[#2a1a12]/15 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between border-b border-[#2a1a12]/10 pb-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#e8742a]">
                  Anatomy of Quality
                </span>
                <span className="text-xs font-mono text-[#2a1a12]/50">Lagos Workshop</span>
              </div>

              <div className="my-5 space-y-3">
                <div className="p-3.5 rounded-xl bg-[#f6efe6] border border-[#2a1a12]/10">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-[#2a1a12]">
                    <span>Full Grain Leather Upper</span>
                    <span className="text-[10px] sm:text-xs text-[#e8742a] font-mono">Top Layer</span>
                  </div>
                  <p className="text-xs text-[#2a1a12]/70 mt-1">
                    Supple, genuine leather straps that mold comfortably to your foot over time.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#ecdccb]/60 border border-[#2a1a12]/10">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-[#2a1a12]">
                    <span>Padded Cushion Insole</span>
                    <span className="text-[10px] sm:text-xs text-[#e8742a] font-mono">Midsole</span>
                  </div>
                  <p className="text-xs text-[#2a1a12]/70 mt-1">
                    High-density shock absorption designed for all-day comfort and stability.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#3d2417] text-[#f6efe6] border border-black/10">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                    <span>Durable Grip Outsole</span>
                    <span className="text-[10px] sm:text-xs text-[#e8742a] font-mono">Base</span>
                  </div>
                  <p className="text-xs text-[#f6efe6]/75 mt-1">
                    Slip-resistant textured grip engineered for tough surfaces and long wear.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#2a1a12]/10 flex items-center justify-between text-xs text-[#2a1a12]/75">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Ergonomic build</span>
                </div>
                <span className="font-semibold text-[#2a1a12]">No Compromise</span>
              </div>

              {/* Official Seal Badge */}
              <div className="mt-6 pt-4 border-t border-[#2a1a12]/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-black/10 bg-white p-0.5 shrink-0 shadow-sm">
                  <img
                    src="/logo.svg"
                    alt="Official Seal"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="block font-serif font-bold text-xs sm:text-sm text-[#2a1a12]">
                    {BUSINESS_INFO.name}
                  </span>
                  <span className="block text-[9px] font-sans font-bold text-[#e8742a] tracking-wider uppercase">
                    {BUSINESS_INFO.tagline}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
