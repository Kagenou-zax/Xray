import React from 'react';
import { BUSINESS_INFO } from '../data/footwear';
import { MessageCircle, Phone, Clock, Truck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#2a1a12] text-[#f6efe6] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e8742a]">
              <span className="w-6 h-[1.5px] bg-[#e8742a]" />
              <span>Get In Touch</span>
              <span className="w-6 h-[1.5px] bg-[#e8742a]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready to Upgrade Your Footwear?
            </h2>

            <p className="text-base sm:text-lg text-[#f6efe6]/80 leading-relaxed">
              We take orders 24/7 on WhatsApp. Whether you are ordering from our signature collection or customizing your pair, send us a message and our team will attend to you promptly.
            </p>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.createWhatsAppLink('Hello Sole Crafts Creation, I would like to place an order.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#e8742a] hover:bg-[#d0621d] text-white font-semibold text-base sm:text-lg transition-all duration-200 shadow-xl hover:shadow-orange-900/40 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>Order on WhatsApp ({BUSINESS_INFO.phoneDisplay})</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#e8742a]/15 text-[#e8742a] flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-base text-white">Direct Line</h4>
              <p className="text-xs text-[#f6efe6]/70">Call or WhatsApp anytime</p>
              <p className="text-sm font-mono font-bold text-[#e8742a] pt-1">
                {BUSINESS_INFO.phoneDisplay}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#e8742a]/15 text-[#e8742a] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-base text-white">Working Hours</h4>
              <p className="text-xs text-[#f6efe6]/70">Messages attended around the clock</p>
              <p className="text-sm font-semibold text-[#f6efe6] pt-1">
                {BUSINESS_INFO.hours}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.05] border border-white/10 space-y-2 sm:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-[#e8742a]/15 text-[#e8742a] flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-base text-white">Nationwide Delivery</h4>
              <p className="text-xs text-[#f6efe6]/70">
                Safe, insured delivery across Lagos and all 36 states of Nigeria. Packaged securely to arrive in immaculate condition.
              </p>
              <p className="text-sm font-semibold text-[#e8742a] pt-1">
                {BUSINESS_INFO.delivery}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
