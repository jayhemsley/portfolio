import type { KeyTextField } from '@prismicio/client';
import smartquotes from 'smartquotes-ts';

export function Hero({
  title,
  subtitle,
}: {
  title?: string | KeyTextField;
  subtitle?: string | KeyTextField;
}): React.ReactElement {
  return (
    <section className="py-16 md:py-20 lg:py-24 xl:py-32 2xl:py-40">
      <div className="container flex justify-center">
        <div className="flex w-11/12 flex-wrap gap-2 sm:w-10/12 sm:gap-4">
          {title && (
            <h1 className="to-accent-pink dark:to-accent-pink bg-gradient-to-br from-primary bg-clip-text text-5xl/[1.1] font-black text-transparent sm:text-6xl/[1.1] md:text-7xl/[1.1] xl:text-8xl/[1.1] dark:from-primary-light">
              {smartquotes(title)}
            </h1>
          )}

          {subtitle && (
            <p className="w-11/12 text-xl/snug font-light md:text-2xl/snug lg:w-10/12 lg:text-3xl/snug xl:text-4xl/snug 2xl:w-9/12 dark:text-secondary-lighter">
              {smartquotes(subtitle)}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
