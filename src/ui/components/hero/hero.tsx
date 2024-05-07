import smartquotes from 'smartquotes-ts';

export function Hero({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}): React.ReactElement {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-40">
      <div className="container mx-auto flex justify-center">
        <div className="flex w-11/12 flex-wrap gap-2 sm:w-10/12 sm:gap-4">
          {title && (
            <h1 className="bg-gradient-to-br from-secondary-darkest to-secondary-light bg-clip-text text-4xl/[1.1] font-black text-transparent sm:text-5xl/[1.1] md:text-6xl/[1.1] lg:text-7xl/[1.1] xl:text-8xl/[1.1] dark:from-secondary-light dark:to-white">
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
