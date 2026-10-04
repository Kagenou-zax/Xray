import React from 'react';

interface LogoProps {
  variant?: 'navbar' | 'footer' | 'badge' | 'large';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'navbar', size = 'md', className = '' }) => {
  if (variant === 'badge') {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm shrink-0 border border-black/10 bg-white p-0.5">
          <img
            src="/logo.svg"
            alt="Sole Crafts Creation Official Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="text-left">
          <span className="block font-serif font-bold text-xs sm:text-sm text-[#2a1a12]">
            Sole Crafts Creation
          </span>
          <span className="block text-[8px] sm:text-[9px] font-sans font-bold text-[#e8742a] tracking-wider uppercase">
            WE MADE IT, YOU ROCK IT
          </span>
        </div>
      </div>
    );
  }

  const isFooter = variant === 'footer';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={`rounded-full bg-white shadow-md border border-white/20 p-1 shrink-0 ${
          isFooter ? 'w-12 h-12' : size === 'sm' ? 'w-9 h-9' : 'w-11 h-11'
        }`}
      >
        <img
          src="/logo.svg"
          alt="Sole Crafts Creation Logo"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col text-left">
        <span
          className={`font-serif font-bold tracking-tight leading-none ${
            isFooter
              ? 'text-xl sm:text-2xl text-[#f6efe6]'
              : 'text-base sm:text-lg text-[#f6efe6]'
          }`}
        >
          Sole Crafts Creation
        </span>
        <div className="flex items-center gap-1.5 mt-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e8742a]" />
          <span className="text-[9px] sm:text-[10px] font-sans font-bold tracking-widest uppercase text-[#e8742a]">
            WE MADE IT, YOU ROCK IT
          </span>
        </div>
      </div>
    </div>
  );
};
