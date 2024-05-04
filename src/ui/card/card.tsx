'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Tilt from 'react-parallax-tilt';

import { cn } from '@/utils';

import {
  CardDescriptionVariants,
  CardPreTitleVariants,
  CardTitleVariants,
  CardVariants,
} from './card.variants';

export function Card({
  pretitle,
  title,
  description,
  variant = 'default',
  href,
  image,
  gradient = 'after:from-primary/80 after:to-accent-pink',
  className,
}: {
  pretitle?: string;
  title: string;
  description?: string;
  href: string;
  image?: string;
  gradient?: string;
  className?: string;
  variant?: 'small' | 'default' | 'large';
}): React.ReactElement {
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
        {(pretitle || title || description) && (
          <div className="select-none drop-shadow translate-z-10">
            {(pretitle || title) && (
              <div className="mb-4 flex w-11/12 flex-wrap gap-1 transition lg:mb-8">
                {pretitle && (
                  <span className={cn(CardPreTitleVariants({ variant }))}>{pretitle}</span>
                )}
                {title && <h2 className={cn(CardTitleVariants({ variant }))}>{title}</h2>}
              </div>
            )}
            {description && (
              <p className={cn(CardDescriptionVariants({ variant }))}>{description}</p>
            )}
          </div>
        )}
        <div
          className={cn([
            'absolute left-0 top-0 -z-10 h-full w-full overflow-hidden rounded-2xl before:absolute before:left-0 before:top-0 before:z-10 before:h-1/2 before:w-full before:bg-gradient-to-b before:from-secondary-darkest/75 before:to-transparent before:opacity-100 before:transition-opacity after:absolute after:left-0 after:top-0 after:z-20 after:h-full after:w-full after:bg-gradient-to-br after:opacity-0 after:transition-opacity group-hover:after:opacity-100',
            showDefaultBackground && 'bg-gradient-to-br from-secondary to-secondary-darkest',
            gradient,
          ])}>
          {image && (
            <Image
              src={image}
              alt=""
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
      </Link>
    </Tilt>
  );
}
