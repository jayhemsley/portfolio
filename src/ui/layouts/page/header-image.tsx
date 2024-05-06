'use client';

import Image from 'next/image';
import { useState } from 'react';

import { cn } from '@/utils';

import { Loader } from '../../components/loader/loader';

export function HeaderImage({
  url,
  alt,
  blurGradient = ['#000000', '#000000'],
}: {
  url: string;
  alt?: string;
  blurGradient?: string[];
}): React.ReactElement {
  const [imageIsLoaded, setImageIsLoaded] = useState<boolean>(false);

  const colorStops = blurGradient && blurGradient.join(', ');

  return (
    <div className="relative h-64 w-full select-none sm:h-80 md:h-[28rem] lg:h-[32rem] xl:h-[36rem] 2xl:h-[40rem]">
      <div
        className={cn([
          'relative h-full w-full overflow-hidden rounded-2xl after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:bg-gradient-to-br after:from-secondary after:to-secondary-darkest after:transition-opacity after:delay-500',
          imageIsLoaded ? 'after:opacity-0' : 'after:opacity-100',
        ])}>
        <Image
          src={url}
          alt={alt || ''}
          priority
          fill
          quality={85}
          className={cn([
            'object-cover object-center transition-all',
            imageIsLoaded ? 'scale-1 opacity-100' : 'opacity-0 scale-110',
          ])}
          onLoad={() => {
            setImageIsLoaded(true);
          }}
        />
      </div>
      <div
        className={cn([
          'absolute -bottom-4 left-1/2 -z-10 h-16 w-10/12 blur-xl transition-all -translate-x-1/2 sm:blur-2xl md:-bottom-6 md:w-11/12 lg:h-24',
          imageIsLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8',
        ])}
        style={{
          background: `linear-gradient(to left, ${colorStops})`,
        }}
      />
      {!imageIsLoaded && (
        <Loader
          className={cn([
            'absolute left-1/2 top-1/2 z-10 h-auto w-10 text-[--page-theme-ui] -translate-x-1/2 -translate-y-1/2 sm:w-12 md:w-16 lg:w-20 dark:text-[--page-theme-ui-dark]',
          ])}
        />
      )}
    </div>
  );
}
