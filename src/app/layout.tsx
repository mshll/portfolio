import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ppEditorialNew } from '@/lib/fonts';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Meshal's Atelier",
  description:
    'A software engineer at Boubyan Bank, building elegant, user-centered digital experiences that bridge the gap between complex functionality and intuitive design',
};

const fontsClasses = `${geistSans.variable} ${geistMono.variable} ${ppEditorialNew.variable} ${inter.variable} ${inter.className}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${fontsClasses} antialiased bg-background text-foreground font-inter scroll-smooth overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
        <Toaster position="bottom-center" richColors />
      </body>
    </html>
  );
}
