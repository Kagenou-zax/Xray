import React, { useState } from 'react';
import { Logo } from './Logo';
import { useCart } from '../context/CartContext';
import { ShoppingBag, MessageCircle, Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/footwear';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalCount, setIsCartOpen } = useCart();

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Styles', href: '#styles' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Custom orders', href: '#custom-orders' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#2a1a12]/95 backdrop-blur-md border-b border-[#f6efe6]/10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
        <a
          href="#"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8742a] rounded-lg"
          aria-label="Sole Crafts Creation Home"
        >
          <Logo variant="navbar" size="md" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#f6efe6]/80" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors duration-150 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8742a] rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 sm:px-3.5 sm:py-2 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-[#f6efe6] border border-white/15 transition-all flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-[#e8742a]"
            aria-label={`View order bag with ${totalCount} items`}
          >
            <ShoppingBag className="w-5 h-5 text-[#e8742a]" />
            <span className="hidden sm:inline text-xs font-semibold">Order Bag</span>
            {totalCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#e8742a] text-white text-[11px] font-bold flex items-center justify-center animate-pulse">
                {totalCount}
              </span>
            )}
          </button>

          <a
            href={BUSINESS_INFO.createWhatsAppLink('Hello Sole Crafts Creation, I would like to make an inquiry.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e8742a] hover:bg-[#d0621d] text-white text-xs font-semibold shadow-sm transition-all duration-150 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#e8742a]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat WhatsApp</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#f6efe6] hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#24160f] border-b border-white/10 px-5 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#f6efe6]/90 hover:text-[#e8742a] transition-colors py-1.5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href={BUSINESS_INFO.createWhatsAppLink('Hello Sole Crafts Creation, I would like to place an order.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#e8742a] text-white font-semibold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
