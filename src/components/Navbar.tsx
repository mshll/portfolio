'use client';
import Link from 'next/link';
import Logo from '@/constants/logo';
import Navlink from './Navlink';
import { ArrowUpRight } from 'lucide-react';
import { links } from '@/constants/links';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const NAV_LINKS = {
  left: [
    { href: links.linkedin, label: 'LinkedIn' },
    { href: links.github, label: 'GitHub' },
    { href: links.instagram, label: 'Instagram' },
  ],
  right: [
    { href: links.about, label: 'About', hide_mobile: true },
    { href: links.selectedworks, label: 'Work', hide_mobile: true },
    { href: links.contact, label: 'Contact', hide_mobile: true },
    { href: links.resume, label: 'Resume' },
  ],
};

const Navbar = () => {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50" data-hide-cursor="true">
      <motion.div
        className="bg-card/50 backdrop-blur-md border border-border shadow-lg px-6 py-3 rounded-full flex items-center justify-between gap-6 md:gap-8"
        data-hide-cursor="true"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.5,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {/* Left Navigation */}
        <nav className="flex items-center gap-6">
          {NAV_LINKS.left.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.8 + index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Navlink href={link.href} target="_blank">
                {link.label}
              </Navlink>
            </motion.div>
          ))}
        </nav>

        {/* Logo - Always Centered */}
        <motion.div
          className="max-md:hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 2.0,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Link href="/" className="text-xl font-bold flex items-center text-muted-foreground/50 hover:text-foreground transition-colors">
            <Logo />
          </Link>
        </motion.div>

        {/* Right Navigation */}
        <nav className="flex items-center gap-6">
          {NAV_LINKS.right.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.8 + index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={cn(link.hide_mobile && 'hidden md:block')}
            >
              <Navlink href={link.href} hide_mobile={link.hide_mobile}>
                {link.label === 'Resume' ? (
                  <span className="flex items-center gap-0.5">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3" strokeWidth={3} />
                  </span>
                ) : (
                  link.label
                )}
              </Navlink>
            </motion.div>
          ))}
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar;
