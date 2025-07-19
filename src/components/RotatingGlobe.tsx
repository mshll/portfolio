'use client';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import React from 'react';

interface RotatingGlobeProps {
  className?: string;
  style?: React.CSSProperties;
}

const RotatingGlobe: React.FC<RotatingGlobeProps> = ({ className = '' }) => {
  const { theme } = useTheme();
  return (
    <div className={cn('relative w-[4.5em] h-[3em] mx-auto inline-block', theme === 'light' && 'filter invert', className)} suppressHydrationWarning>
      <div className="absolute top-1/2 left-1/2 w-[3em] h-[3em] block rounded-full overflow-hidden -translate-x-1/2 -translate-y-1/2 rotate-[30deg] shadow-[inset_0px_0px_0px_.125em_white] animate-[var(--animate-globe)]">
        <div className="absolute top-1/2 left-1/2 w-full h-full rounded-full text-[.75em] -translate-x-1/2 -translate-y-1/2 shadow-[inset_.1em_0px_0px_.08em_white] animate-[var(--animate-circle1-delay-1)]" />
        <div className="absolute top-1/2 left-1/2 w-full h-full rounded-full text-[.75em] -translate-x-1/2 -translate-y-1/2 shadow-[inset_.1em_0px_0px_.08em_white] animate-[var(--animate-circle1-delay-2)]" />
        <div className="absolute top-1/2 left-1/2 w-full h-full rounded-full text-[.75em] -translate-x-1/2 -translate-y-1/2 shadow-[inset_.1em_0px_0px_.08em_white] animate-[var(--animate-circle1)]" />
        <div className="absolute top-1/2 left-1/2 w-[150%] h-[55%] rounded-full text-[.75em] -translate-x-1/2 -translate-y-1/2 shadow-[inset_0px_0px_0px_.15em_white]" />
        <div className="absolute top-1/2 left-1/2 w-[150%] h-[.15em] bg-white text-[.75em] -translate-x-1/2 -translate-y-1/2 rounded-none" />
      </div>
    </div>
  );
};

export default RotatingGlobe;
