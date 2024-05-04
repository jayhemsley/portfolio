import { PrismicPreview } from '@prismicio/next';
import type { Viewport } from 'next';

import { APP_NAME, META_THEME_COLOR, PRISMIC_REPOSITORY } from '@/constants';
import { createClient } from '@/lib/prismic/client';
import { Footer, Header } from '@/ui';
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
  const { data: footer } = await client.getSingle('footer');

  return (
    <html
      lang="en"
      className={cn(
        'h-full bg-secondary-lightest text-base font-normal text-secondary-dark selection:bg-secondary-darker selection:text-secondary-lightest dark:bg-secondary-darkest dark:text-secondary-lightest dark:selection:bg-secondary-lightest dark:selection:text-secondary-dark',
        MessinaSans.className,
      )}>
      <body>
        <Header name={APP_NAME} navLinks={navLinks} />
        <main>{children}</main>
        <Footer {...footer} />
        <PrismicPreview repositoryName={PRISMIC_REPOSITORY} />
      </body>
    </html>
  );
}
