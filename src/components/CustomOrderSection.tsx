import React, { useState } from 'react';
import { BUSINESS_INFO, SIZES, LEATHER_TONES } from '../data/footwear';
import { SmartImage } from './SmartImage';
import { MessageCircle, Sparkles, Send } from 'lucide-react';

export const CustomOrderSection: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState('Burgundy & Black Cross-Strap Slides');
  const [selectedTone, setSelectedTone] = useState('Original Colorway');
  const [selectedSize, setSelectedSize] = useState('EU 42');
  const [customDescription, setCustomDescription] = useState('');

  const styleOptions = [
    'Burgundy & Black Cross-Strap Slides',
    'Sky Blue Double-Buckle Comfort Slides',
    'White Cross-Strap Buckle Slides',
    'Classic Black Gold Emblem Slippers',
    'Custom Bespoke Design / Reference Photo',
  ];

  const toneOptions = [
    ...LEATHER_TONES,
    'Custom Tone (Send Reference)',
  ];

  const sizeOptions = ['EU 38', ...SIZES, 'EU 46'];

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Hello Sole Crafts Creation, I would like to request a custom order:\n\n`;
    text += `- Style: ${selectedStyle}\n`;
    text += `- Leather Tone: ${selectedTone}\n`;
    text += `- Size: ${selectedSize}\n`;
    if (customDescription.trim()) {
      text += `- Details / Reference: ${customDescription.trim()}\n`;
    }
    text += `\nPlease let me know availability and pricing.`;

    const url = BUSINESS_INFO.createWhatsAppLink(text);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="custom-orders" className="py-20 sm:py-28 bg-[#1f130c] text-[#f6efe6] scroll-mt-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#2a1a12] border border-white/15 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#e8742a]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e8742a] mb-2">
              <Sparkles className="w-4 h-4 text-[#e8742a]" />
              <span>Bespoke Crafts</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Have a Specific Design in Mind?
            </h2>

            <p className="mt-3 text-sm sm:text-base text-[#f6efe6]/80 leading-relaxed">
              We specialize in custom orders. Whether you need a specific leather color, wide fit, or want to replicate a design you love, our craftsmen bring it to reality.
            </p>
          </div>

          {/* Reference Thumbnails */}
          <div className="mb-8">
            <span className="text-xs uppercase font-semibold tracking-wider text-[#e8742a] block mb-3 text-center sm:text-left">
              Our Base Handmade Silhouettes
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {BUSINESS_INFO.products.map((p) => (
                <div
                  key={p.id}
                  className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/15 bg-[#f0eae1] shadow-md group"
                >
                  <SmartImage
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full"
                  />
                  <div className="absolute bottom-2 inset-x-2 flex items-center justify-between text-[11px] text-[#2a1a12] font-semibold bg-white/90 px-2 py-0.5 rounded backdrop-blur-xs">
                    <span className="truncate">{p.name.split(' ')[0]}</span>
                    <span className="text-[#e8742a] font-bold text-[10px]">
                      {p.priceDisplay}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Customization Form */}
          <form
            onSubmit={handleCustomSubmit}
            className="p-5 sm:p-7 rounded-2xl bg-white/[0.05] border border-white/10 text-left space-y-4"
          >
            <span className="text-xs uppercase font-semibold tracking-wider text-[#e8742a] block mb-1">
              Quick Custom Order Builder
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-[#f6efe6]/70 mb-1.5 font-medium">
                  1. Footwear Style
                </label>
                <select
                  value={selectedStyle}
                  onChange={(e) => setSelectedStyle(e.target.value)}
                  className="w-full bg-[#1b100b] border border-white/20 rounded-xl px-3 py-2.5 text-sm text-[#f6efe6] focus:outline-none focus:border-[#e8742a]"
                >
                  {styleOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#2a1a12] text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs text-[#f6efe6]/70 mb-1.5 font-medium">
                  2. Leather Tone
                </label>
                <select
                  value={selectedTone}
                  onChange={(e) => setSelectedTone(e.target.value)}
                  className="w-full bg-[#1b100b] border border-white/20 rounded-xl px-3 py-2.5 text-sm text-[#f6efe6] focus:outline-none focus:border-[#e8742a]"
                >
                  {toneOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#2a1a12] text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs text-[#f6efe6]/70 mb-1.5 font-medium">
                  3. Your Size
                </label>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full bg-[#1b100b] border border-white/20 rounded-xl px-3 py-2.5 text-sm text-[#f6efe6] focus:outline-none focus:border-[#e8742a]"
                >
                  {sizeOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#2a1a12] text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs text-[#f6efe6]/70 mb-1.5 font-medium">
                Describe special requests or reference details:
              </label>
              <input
                type="text"
                maxLength={300}
                value={customDescription}
                onChange={(e) => setCustomDescription(e.target.value)}
                placeholder="e.g. Double buckle with silver hardware, extra wide sole cushioning..."
                className="w-full bg-[#1b100b] border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-[#f6efe6] placeholder-[#f6efe6]/40 focus:outline-none focus:border-[#e8742a]"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#f6efe6]/60 text-center sm:text-left">
                We will discuss your design on WhatsApp and confirm crafting turnaround and delivery.
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#e8742a] hover:bg-[#d0621d] text-white font-semibold text-sm transition-all shadow-md active:scale-95 shrink-0"
              >
                <Send className="w-4 h-4" />
                <span>Submit Custom Request</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
