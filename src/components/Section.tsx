import { cn } from '@/lib/utils';
import React from 'react';

const Section = ({
  children,
  className = '',
  ...props
}: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section className={cn('py-12 sm:py-24', className)} {...props}>
      {children}
    </section>
  );
};

export default Section;
