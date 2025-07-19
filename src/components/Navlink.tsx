import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Navlink({
  href,
  target,
  children,
  hide_mobile,
}: {
  href: string;
  target?: string;
  children: React.ReactNode;
  hide_mobile?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn('text-sm text-muted-foreground/50 font-medium hover:text-foreground transition-colors', hide_mobile && 'hidden md:block')}
      target={target}
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}
