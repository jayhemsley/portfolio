import NextImage from 'next/image';

import { cn, toBase64 } from '@/utils';

function shimmer(w: number, h: number): string {
  const background = `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <rect id="r" width="${w}" height="${h}" />
      <animate xlink:href="#r" attributeName="fill" values="#41404E; #535365; #41404E;" dur="2s" repeatCount="indefinite"  />
    </svg>`;

  return toBase64(background);
}

export function Image({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}): React.ReactElement {
  return (
    <NextImage
      src={src}
      width={width}
      height={height}
      placeholder={`data:image/svg+xml;base64,${shimmer(width, height)}`}
      alt={alt}
      quality={85}
      className={cn(['max-w-full rounded-2xl', className])}
    />
  );
}
