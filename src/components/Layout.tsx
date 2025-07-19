'use client';
import React from 'react';
// import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorGradient from '@/components/CursorGradient';
import BottomBlurEffect from '@/components/BottomBlurEffect';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import { useIsMobile } from '@/hooks/use-mobile';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile();

  return (
    <SmoothScrollProvider>
      <div className="flex min-h-screen flex-col relative">
        {!isMobile && <CursorGradient />}
        <BottomBlurEffect />
        {/* <Navbar /> */}
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
};

export default Layout;
