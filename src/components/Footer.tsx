import React from 'react';
import { Logo } from './Logo';
import { BUSINESS_INFO } from '../data/footwear';
import { MessageCircle, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#24160f] text-[#f6efe6] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="footer" />
            <p className="text-sm text-[#f6efe6]/75 max-w-sm leading-relaxed">
              Quality, classy and affordable handmade footwear. Slides and sandals crafted with passion, precision, and personal care.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#e8742a]">
              <span className="w-2 h-2 rounded-full bg-[#e8742a]" />
              <span className="tracking-widest uppercase font-semibold">
                {BUSINESS_INFO.tagline}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-base text-[#f6efe6] tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#f6efe6]/75">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Our Craft
                </a>
              </li>
              <li>
                <a href="#styles" className="hover:text-white transition-colors">
                  Featured Styles
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#custom-orders" className="hover:text-white transition-colors">
                  Custom Orders
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Service */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-base text-[#f6efe6] tracking-wide">
              Direct Service
            </h4>
            <div className="space-y-2 text-sm text-[#f6efe6]/75">
              <p className="flex items-center gap-2">
                <span className="text-[#e8742a] font-semibold">WhatsApp:</span>
                <span className="tabular-nums font-mono text-[#f6efe6]">
                  {BUSINESS_INFO.phoneDisplay}
                </span>
              </p>
              <p>
                <span className="text-[#e8742a] font-semibold">Hours:</span> {BUSINESS_INFO.hours}
              </p>
              <p>
                <span className="text-[#e8742a] font-semibold">Delivery:</span> {BUSINESS_INFO.delivery}
              </p>
            </div>
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.createWhatsAppLink('Hello Sole Crafts Creation, I would like to place an order.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e8742a] hover:bg-[#d0621d] text-white text-xs font-semibold shadow-sm transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#f6efe6]/60">
          <p>© Sole Crafts Creation. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Handmade with care</span>
            <Heart className="w-3 h-3 text-[#e8742a] fill-[#e8742a]" />
            <span>Delivered to you</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
