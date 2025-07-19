import Link from 'next/link';
import { links } from '@/constants/links';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface SocialLinksProps {
  includeEmail?: boolean;
  includeResume?: boolean;
  className?: string;
  linkClassName?: string;
}

export default function SocialLinks({ includeEmail = false, includeResume = false, className = '', linkClassName = '' }: SocialLinksProps) {
  const baseLinks = [
    { href: links.linkedin, label: 'LinkedIn', target: '_blank' },
    { href: links.github, label: 'GitHub', target: '_blank' },
    { href: links.instagram, label: 'Instagram', target: '_blank' },
  ];

  const allLinks = [...baseLinks, ...(includeEmail ? [{ href: links.email, label: 'Email', target: undefined }] : [])];

  const containerClasses = cn('flex items-center gap-4 justify-center', className);

  const defaultLinkClasses = 'text-muted-foreground/80 hover:text-foreground transition-colors font-medium';

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
      <div className={containerClasses}>
        {allLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target={link.target}
            className={cn(defaultLinkClasses, linkClassName, 'hasIcon' in link && 'flex items-center gap-0.5')}
            rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
          >
            {link.label}
            {'hasIcon' in link && <ArrowUpRight className="w-3 h-3" strokeWidth={2.5} />}
          </Link>
        ))}
      </div>
      {includeResume && (
        <>
          <div className="hidden sm:block w-px h-6 bg-border" />
          <Button variant="alt" size="sm" asChild>
            <Link href={links.resume} target="_blank" rel="noopener noreferrer">
              Resume
              <ArrowUpRight className="w-3 h-3" strokeWidth={2.5} />
            </Link>
          </Button>
        </>
      )}
    </div>
  );
}
