import { PrismicPreview } from '@prismicio/next';
import type { Viewport } from 'next';

import { VIEWPORT_COLOR_SCHEME, VIEWPORT_THEME_COLOR } from '@/constants';
import { repositoryName } from '@/prismicio';
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
        'h-full bg-secondary-lightest py-4 text-base font-normal text-secondary-dark selection:bg-primary-darker/75 selection:text-secondary-lightest md:py-8 dark:bg-secondary-darkest dark:text-secondary-lightest',
        MessinaSans.className,
      )}>
      <body>
        <Header />
        <main>{children}</main>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
