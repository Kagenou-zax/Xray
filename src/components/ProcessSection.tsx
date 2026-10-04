import React from 'react';
import { BUSINESS_INFO } from '../data/footwear';
import { MessageSquare, Ruler, Hammer, Truck } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const stepIcons = [MessageSquare, Ruler, Hammer, Truck];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#24160f] text-[#f6efe6] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e8742a] mb-2">
          <span className="w-5 h-[1.5px] bg-[#e8742a]" />
          <span>Simple & Seamless</span>
          <span className="w-5 h-[1.5px] bg-[#e8742a]" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f6efe6]">
          How To Order Your Pair
        </h2>

        <p className="mt-3.5 text-base sm:text-lg text-[#f6efe6]/75 max-w-xl mx-auto leading-relaxed">
          From your first message to the moment your custom slides arrive at your doorstep.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_INFO.steps.map((step, idx) => {
            const Icon = stepIcons[idx] || Hammer;
            return (
              <div
                key={step.number}
                className="relative rounded-3xl bg-white/[0.05] border border-white/10 p-6 sm:p-7 text-left hover:border-[#e8742a]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-2xl font-bold text-[#e8742a]">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#f6efe6] group-hover:bg-[#e8742a] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#f6efe6]/75 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-[#e8742a]">
                  <span>Step {step.number}</span>
                  <span>·</span>
                  <span>{BUSINESS_INFO.shortName} Care</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
