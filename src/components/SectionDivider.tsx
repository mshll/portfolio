'use client';
import { cn } from '@/lib/utils';

interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({ className }: SectionDividerProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Gradient background effect */}
      <div
        aria-hidden="true"
        className="-top-1 left-1/2 h-[200px] w-full max-w-[200px] md:max-w-[400px] pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 -z-10"
        style={{
          background: `conic-gradient(from 90deg at 50% 50%, transparent 50%, oklch(from var(--background) l c h / 1) 50%), radial-gradient(oklch(from var(--muted-foreground) l c h / 0.1) 0%, transparent 80%)`,
        }}
      />

      {/* Horizontal line */}
      <div
        aria-hidden="true"
        className="left-1/2 top-0 w-[300px] pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2 z-10"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, transparent 0%, oklch(from var(--muted-foreground) l c h / 0.67) 50%, transparent 100%)',
        }}
      />
    </div>
  );
}
