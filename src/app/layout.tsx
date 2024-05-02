import type { Viewport } from 'next';

import { VIEWPORT_COLOR_SCHEME, VIEWPORT_THEME_COLOR } from '@/constants';
import { Header } from '@/ui';
import { cn, createMetadata } from '@/utils';

import { MessinaSans } from './assets/fonts/local';
import './assets/styles/tailwind.css';

export const metadata = createMetadata({});

export const viewport: Viewport = {
  colorScheme: VIEWPORT_COLOR_SCHEME,
  themeColor: VIEWPORT_THEME_COLOR,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html
      lang="en"
      className={cn(
        'h-full bg-secondary-lightest text-base font-normal text-secondary dark:bg-secondary-darkest',
        MessinaSans.className,
      )}>
      <body className="h-full">
        <Header />
        <main className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">{children}</main>
      </body>
    </html>
  );
}
