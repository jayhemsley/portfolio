import * as prismic from '@prismicio/client';
import type { Content, KeyTextField, LinkField } from '@prismicio/client';
import Link from 'next/link';

import { cn } from '@/utils';

function NavLink({
  link,
  title,
}: {
  link: LinkField;
  title: string | KeyTextField;
}): React.ReactElement {
  return (
    <Link
      className="inline-block border-b-2 border-transparent transition-colors hover:border-white"
      href={prismic.asLink(link) || '#'}
      target="_blank">
      {title}
    </Link>
  );
}

export function Header({
  name,
  navLinks,
}: {
  name?: string;
  navLinks?: Content.NavDocument;
}): React.ReactElement {
  return (
    <header className="container pointer-events-none sticky top-0 z-50 mx-auto flex w-11/12 select-none flex-wrap justify-between gap-x-8 gap-y-1 pt-4 text-lg font-bold text-white mix-blend-difference sm:flex-nowrap md:text-xl lg:text-2xl">
      {name && (
        <Link className="pointer-events-auto" href="/">
          {name}
        </Link>
      )}

      {navLinks && (
        <nav
          className={cn([
            'align-items-center pointer-events-auto flex gap-4 sm:justify-end sm:gap-8 md:gap-12',
            !name && 'sm:ml-auto',
          ])}>
          {navLinks?.data?.slices.map((item) => (
            <NavLink key={item.id} link={item.primary.link} title={item.primary.title} />
          ))}
        </nav>
      )}
    </header>
  );
}
