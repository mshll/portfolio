'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function BottomBlurEffect() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if user is within 50px of the bottom
      const isNearBottom = scrollTop + windowHeight >= documentHeight - 50;
      setIsAtBottom(isNearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={cn(
        'fixed bottom-[-10px] h-[200px] left-0 right-0 pointer-events-none z-50 flex flex-col justify-end transition-all duration-1000 ease-in-out',
        isAtBottom && 'h-0'
      )}
    >
      <div className="relative w-full h-full">
        {/* Layer 1 - Lightest blur */}
        <div
          className="absolute inset-0 z-[50] pointer-events-none"
          style={{
            backdropFilter: 'blur(0.5px)',
            WebkitBackdropFilter: 'blur(0.5px)',
            maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%)',
          }}
        />

        {/* Layer 2 */}
        <div
          className="absolute inset-0 z-[51] pointer-events-none"
          style={{
            backdropFilter: 'blur(0.5625px)',
            WebkitBackdropFilter: 'blur(0.5625px)',
            maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)',
          }}
        />

        {/* Layer 3 */}
        <div
          className="absolute inset-0 z-[52] pointer-events-none"
          style={{
            backdropFilter: 'blur(1.125px)',
            WebkitBackdropFilter: 'blur(1.125px)',
            maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)',
          }}
        />

        {/* Layer 4 */}
        <div
          className="absolute inset-0 z-[53] pointer-events-none"
          style={{
            backdropFilter: 'blur(2.25px)',
            WebkitBackdropFilter: 'blur(2.25px)',
            maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)',
          }}
        />

        {/* Layer 5 */}
        <div
          className="absolute inset-0 z-[54] pointer-events-none"
          style={{
            backdropFilter: 'blur(4.5px)',
            WebkitBackdropFilter: 'blur(4.5px)',
            maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)',
          }}
        />

        {/* Layer 6 */}
        <div
          className="absolute inset-0 z-[55] pointer-events-none"
          style={{
            backdropFilter: 'blur(9px)',
            WebkitBackdropFilter: 'blur(9px)',
            maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)',
          }}
        />

        {/* Layer 7 */}
        <div
          className="absolute inset-0 z-[56] pointer-events-none"
          style={{
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%)',
          }}
        />

        {/* Layer 8 - Heaviest blur */}
        <div
          className="absolute inset-0 z-[57] pointer-events-none"
          style={{
            backdropFilter: 'blur(36px)',
            WebkitBackdropFilter: 'blur(36px)',
            maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)',
          }}
        />
      </div>
    </div>
  );
}
