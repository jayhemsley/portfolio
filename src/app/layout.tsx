import { PrismicPreview } from '@prismicio/next';
import type { Viewport } from 'next';

import { APP_NAME, META_THEME_COLOR, PRISMIC_REPOSITORY } from '@/constants';
import { createClient } from '@/lib/prismic/client';
import { Header } from '@/ui';
import { cn, createMetadata } from '@/utils';

import { MessinaSans } from './assets/fonts/local';
import './assets/styles/tailwind.css';

export const metadata = createMetadata();

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: META_THEME_COLOR,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<React.ReactElement> {
  const client = createClient();
  const navLinks = await client.getSingle('nav');

  return (
    <html
      lang="en"
      className={cn(
        'h-full bg-secondary-lightest py-4 text-base font-normal text-secondary-dark selection:bg-primary-darker/75 selection:text-secondary-lightest md:py-8 dark:bg-secondary-darkest dark:text-secondary-lightest',
        MessinaSans.className,
      )}>
      <body>
        <Header name={APP_NAME} navLinks={navLinks} />
        <main>{children}</main>
        <PrismicPreview repositoryName={PRISMIC_REPOSITORY} />
      </body>
    </html>
  );
}
