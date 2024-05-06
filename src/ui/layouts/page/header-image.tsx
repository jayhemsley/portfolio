'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { cn } from '@/utils';

import { Loader } from '../../components/loader/loader';

export function HeaderImage({ url, alt }: { url: string; alt?: string }): React.ReactElement {
  const [imageIsLoaded, setImageIsLoaded] = useState<boolean>(true);
  const [blurIsLoaded, setBlurIsLoaded] = useState<boolean>(true);
  const [hideDefaultBackground, setHideDefaultBackground] = useState<boolean>(false);

  useEffect(() => {
    if (imageIsLoaded && blurIsLoaded) {
      const timer = setTimeout(() => {
        setHideDefaultBackground(true);
      }, 400);

      return () => clearTimeout(timer);
    }

    return () => false;
  }, [imageIsLoaded, blurIsLoaded]);

  return (
    <div className="relative h-64 w-full select-none sm:h-80 md:h-[28rem] lg:h-[32rem] xl:h-[36rem] 2xl:h-[40rem]">
      <div
        className={cn([
          'relative h-full w-full overflow-hidden rounded-2xl',
          !hideDefaultBackground && 'bg-gradient-to-br from-secondary to-secondary-darkest',
        ])}>
        <Image
          src={url}
          alt={alt || ''}
          priority
          fill
          className={cn([
            'object-cover object-center transition',
            imageIsLoaded && blurIsLoaded ? 'scale-1 opacity-100' : 'opacity-0 scale-110',
          ])}
          onLoad={() => {
            setImageIsLoaded(true);
          }}
        />
      </div>
      <div className="absolute -bottom-2 left-1/2 -z-10 h-16 w-10/12 blur-xl -translate-x-1/2 sm:blur-2xl md:w-11/12 lg:h-24">
        <Image
          src={url}
          alt={alt || ''}
          width={1200}
          height={96}
          priority
          className={cn([
            'h-full w-full transition-opacity',
            imageIsLoaded && blurIsLoaded ? 'opacity-100' : 'opacity-0',
          ])}
          onLoad={() => {
            setBlurIsLoaded(true);
          }}
        />
      </div>
      {(!imageIsLoaded || !blurIsLoaded) && (
        <Loader
          className={cn([
            'absolute left-1/2 top-1/2 z-10 h-auto w-10 text-[--page-theme-ui] -translate-x-1/2 -translate-y-1/2 sm:w-12 md:w-16 lg:w-20 dark:text-[--page-theme-ui-dark]',
          ])}
        />
      )}
    </div>
  );
}
