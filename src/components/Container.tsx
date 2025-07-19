import { cn } from '@/lib/utils';
import React from 'react';

const Container = ({
  children,
  className = '',
  ...props
}: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full', className)} {...props}>
      {children}
    </div>
  );
};

export default Container;
