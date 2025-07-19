import localFont from 'next/font/local';

// PP Editorial New Font Family
export const ppEditorialNew = localFont({
  src: [
    {
      path: '../../public/fonts/PPEditorialNew/PPEditorialNew-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPEditorialNew/PPEditorialNew-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/PPEditorialNew/PPEditorialNew-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPEditorialNew/PPEditorialNew-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-pp-editorial-new',
  display: 'swap',
});
