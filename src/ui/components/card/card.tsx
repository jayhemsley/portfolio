'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import smartquotes from 'smartquotes-ts';

import type { PageData } from '@/types';
import { cn, hexToRgb } from '@/utils';

import { Loader } from '../loader/loader';
import {
  CardPreTitleVariants,
  CardSubtitleVariants,
  CardTitleVariants,
  CardVariants,
} from './card.variants';

export function Card({
  pretitle,
  title,
  subtitle,
  variant = 'default',
  href,
  image,
  themeColors,
  className,
}: {
  href: string;
  className?: string;
  variant?: 'small' | 'default' | 'large';
} & PageData): React.ReactElement {
  const [backgroundImageIsLoaded, setBackgroundImageIsLoaded] = useState<boolean>(false);
  const [showDefaultBackground, setShowDefaultBackground] = useState<boolean>(true);

  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      glareEnable
      glareMaxOpacity={0.25}
      glarePosition="all"
      glareBorderRadius="1rem"
      perspective={5000}
      transitionEasing="cubic-bezier(0.39, 0.575, 0.565, 1)"
      transitionSpeed={200}
      scale={1.01}
      className={cn(
        CardVariants({
          variant,
        }),
        'transform-style-3d backface-hidden transform-gpu active:scale-[0.98]',
        className,
      )}>
      <Link href={href} className="relative block h-full w-full p-8 transform-style-3d lg:p-12">
        {(pretitle || title || subtitle) && (
          <div className="select-none drop-shadow translate-z-10">
            {(pretitle || title) && (
              <div className="mb-4 flex w-11/12 flex-wrap gap-1 transition lg:mb-8">
                {pretitle && (
                  <span className={cn(CardPreTitleVariants({ variant }))}>
                    {smartquotes(pretitle)}
                  </span>
                )}
                {title && (
                  <h2 className={cn(CardTitleVariants({ variant }))}>{smartquotes(title)}</h2>
                )}
              </div>
            )}
            {subtitle && (
              <p className={cn(CardSubtitleVariants({ variant }))}>{smartquotes(subtitle)}</p>
            )}
          </div>
        )}
        <div
          className={cn([
            'absolute left-0 top-0 -z-10 h-full w-full overflow-hidden rounded-2xl before:absolute before:left-0 before:top-0 before:z-10 before:h-1/2 before:w-full before:bg-gradient-to-b before:from-secondary-darkest/75 before:to-transparent before:opacity-100 before:transition-opacity',
            showDefaultBackground && 'bg-gradient-to-br from-secondary to-secondary-darkest',
          ])}>
          <div
            className={cn([
              'pointer-events-none absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-100',
              (!themeColors || !themeColors.primary || !themeColors.secondary) &&
                'bg-gradient-to-br from-secondary-darkest to-secondary/80',
            ])}
            style={
              themeColors && themeColors.primary && themeColors.secondary
                ? {
                  backgroundImage: `linear-gradient(to bottom right, rgba(${hexToRgb(themeColors.primary)}, 1), rgba(${hexToRgb(themeColors.secondary)}, 0.8)`,
                }
                : undefined
            }
          />
          {image && image.url && (
            <Image
              src={image.url}
              alt={image.alt || ''}
              className={cn([
                'object-cover object-center transition-all group-hover:duration-[45s] group-hover:scale-150',
                backgroundImageIsLoaded ? 'scale-1 opacity-100' : 'opacity-0 scale-110',
              ])}
              fill
              onLoad={() => {
                setBackgroundImageIsLoaded(true);

                setTimeout(() => {
                  setShowDefaultBackground(false);
                }, 300);
              }}
            />
          )}
        </div>
        {!backgroundImageIsLoaded && (
          <div
            className="absolute bottom-8 right-8 -z-10 h-8 w-8"
            style={{
              color: themeColors && themeColors.secondary ? `${themeColors.secondary}` : '',
            }}>
            <Loader
              className={cn([
                'h-auto w-full',
                !themeColors ||
                  !themeColors.primary ||
                  (!themeColors.secondary && 'text-secondary-light'),
              ])}
            />
          </div>
        )}
      </Link>
    </Tilt>
  );
}
