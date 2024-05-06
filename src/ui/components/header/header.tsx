import Link from 'next/link';

import type { NavLink } from '@/types';
import { cn } from '@/utils';

export function Header({
  title,
  links,
}: {
  title?: string;
  links?: NavLink[];
}): React.ReactElement {
  return (
    <header className="container pointer-events-none top-0 z-50 mx-auto flex w-11/12 select-none flex-wrap justify-between gap-x-8 gap-y-1 pt-4 text-lg font-bold text-white mix-blend-difference sm:flex-nowrap md:sticky md:text-xl lg:text-2xl">
      {title && (
        <Link className="pointer-events-auto" href="/">
          {title}
        </Link>
      )}

      {links && (
        <nav
          className={cn([
            'align-items-center pointer-events-auto flex gap-4 sm:justify-end sm:gap-8 md:gap-12',
            !title && 'sm:ml-auto',
          ])}>
          {links.map((link) => (
            <Link
              key={link.slug}
              className="inline-block border-b-2 border-transparent transition-colors hover:border-white"
              href={link.href}
              target={link.new ? '_blank' : '_self'}>
              {link.title}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
