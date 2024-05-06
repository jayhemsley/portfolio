import smartquotes from 'smartquotes-ts';

import type { PageData } from '@/types';
import { cn } from '@/utils';

import { HeaderImage } from './header-image';

export function PageLayout({
  pretitle,
  title,
  subtitle,
  image,
  children,
  themeColors,
}: {
  children?: React.ReactNode;
} & PageData): React.ReactElement {
  return (
    <article
      className="animate-fade-in"
      style={
        {
          '--page-theme-primary': themeColors?.primary,
          '--page-theme-primary-dark': themeColors?.primaryDark ?? themeColors?.primary,
          '--page-theme-secondary': themeColors?.secondary,
          '--page-theme-secondary-dark': themeColors?.secondaryDark ?? themeColors?.secondary,
          '--page-theme-ui': themeColors?.ui ?? themeColors?.primary,
          '--page-theme-ui-dark':
            themeColors?.uiDark ?? themeColors?.primaryDark ?? themeColors?.primary,
        } as React.CSSProperties
      }>
      <header className="container mx-auto mb-4 flex w-11/12 flex-wrap justify-center gap-8 py-8 sm:py-10 md:gap-12 md:py-12 lg:gap-16 lg:py-16 xl:gap-20 xl:py-20 2xl:py-24">
        <div className="flex flex-wrap gap-2 sm:w-10/12 sm:gap-3">
          {pretitle && (
            <div className="flex w-full flex-wrap justify-start gap-x-2 gap-y-0 text-xl sm:text-2xl md:text-3xl lg:gap-x-3 lg:text-4xl">
              <span className="font-black text-secondary-darkest dark:text-secondary-lightest">
                {smartquotes(pretitle)}
              </span>
            </div>
          )}

          {title && (
            <h1
              className={cn([
                'bg-gradient-to-br bg-clip-text text-4xl/[1.1] font-black text-transparent md:text-5xl/[1.1] lg:text-6xl/[1.1] xl:text-7xl/[1.1]',
                themeColors
                  ? 'from-[--page-theme-primary] to-[--page-theme-secondary] dark:from-[--page-theme-primary-dark] dark:to-[--page-theme-secondary-dark]'
                  : 'from-secondary-darkest to-secondary-light dark:from-secondary-light dark:to-white',
              ])}>
              {smartquotes(title)}
            </h1>
          )}

          {subtitle && (
            <p className="w-11/12 text-lg/snug font-light sm:text-xl/snug md:text-2xl/snug lg:w-10/12 lg:text-3xl/snug 2xl:w-9/12 dark:text-secondary-lighter">
              {smartquotes(subtitle)}
            </p>
          )}
        </div>
        {image && <HeaderImage {...image} />}
      </header>

      {children && (
        <main className="container mx-auto flex w-11/12 flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 xl:gap-20">
          {children}
        </main>
      )}
    </article>
  );
}
