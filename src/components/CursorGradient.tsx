'use client';
import { useIsMobile } from '@/hooks/use-mobile';
import { useEffect, useState, useRef } from 'react';

export default function CursorGradient() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isHidden, setIsHidden] = useState(false);
  const animationRef = useRef<number | undefined>(undefined);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if cursor is over an element that should hide the gradient
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
      const shouldHide = elementUnderCursor?.closest('[data-hide-cursor="true"]') !== null;
      setIsHidden(shouldHide);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const smoothMove = () => {
      setSmoothPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.05,
        y: prev.y + (mousePosition.y - prev.y) * 0.05,
      }));
      animationRef.current = requestAnimationFrame(smoothMove);
    };

    animationRef.current = requestAnimationFrame(smoothMove);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  if (isMobile) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[11] antialiased transition-opacity duration-1000 ${isHidden ? 'opacity-0' : 'opacity-100'}`}
      style={{
        background: `radial-gradient(400px circle at ${smoothPosition.x}px ${smoothPosition.y}px,
          oklch(from var(--muted-foreground) l c h / 0.08),
          oklch(from var(--muted-foreground) l c h / 0.06) 20%,
          oklch(from var(--muted-foreground) l c h / 0.04) 40%,
          oklch(from var(--muted-foreground) l c h / 0.02) 60%,
          oklch(from var(--muted-foreground) l c h / 0.005) 80%,
          transparent 100%)`,
      }}
    />
  );
}
