import type { NextFont } from 'next/dist/compiled/@next/font';
import localFont from 'next/font/local';

export const MessinaSans: NextFont = localFont({
  src: [
    {
      path: './local/messina-sans/messina-sans-book.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './local/messina-sans/messina-sans-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './local/messina-sans/messina-sans-regular-italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './local/messina-sans/messina-sans-bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './local/messina-sans/messina-sans-bold-italic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: './local/messina-sans/messina-sans-black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
});
