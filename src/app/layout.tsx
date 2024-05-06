import type { Viewport } from 'next';

import { APP_NAME, HEADER_LINKS, META_THEME_COLOR } from '@/constants';
import { Footer, Header } from '@/ui';
import { cn, createMetadata } from '@/utils';

import { MessinaSans } from './assets/fonts/local';
import './assets/styles/tailwind.css';

export const metadata = createMetadata();

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: META_THEME_COLOR,
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
        'h-full bg-secondary-lightest text-base font-normal text-secondary-dark selection:bg-secondary-darker selection:text-secondary-lightest dark:bg-secondary-darkest dark:text-secondary-lightest dark:selection:bg-secondary-lightest dark:selection:text-secondary-dark',
        MessinaSans.className,
      )}>
      <body>
        <Header title={APP_NAME} links={HEADER_LINKS} />
        <main>{children}</main>
        <Footer
          title="For All Inquiries"
          email="jay@hemsley.dev"
          source="https://github.com/jayhemsley/portfolio"
        />
      </body>
    </html>
  );
}
