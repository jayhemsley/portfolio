import * as prismic from '@prismicio/client';
import type { Content } from '@prismicio/client';
import type { KeyTextField, LinkField } from '@prismicio/client';
import Link from 'next/link';
import smartquotes from 'smartquotes-ts';

function NavLink({
  link,
  title,
}: {
  link: LinkField;
  title: string | KeyTextField;
}): React.ReactElement {
  return (
    <Link
      className="relative inline-block border-b-2 border-transparent transition-colors hover:border-white"
      href={prismic.asLink(link) || '#'}
      target="_blank">
      {title}
    </Link>
  );
}

export async function Header({
  name,
  navLinks,
}: {
  name?: string;
  navLinks?: Content.NavDocument;
}): Promise<React.ReactElement> {
  return (
    <header className="container pointer-events-none sticky top-4 z-50 mx-auto flex w-11/12 flex-wrap justify-between gap-x-8 gap-y-1 text-lg text-white mix-blend-difference sm:flex-nowrap md:top-8 md:text-xl lg:text-2xl">
      {name && (
        <Link className="pointer-events-auto font-bold" href="/">
          {smartquotes(name)}
        </Link>
      )}

      {navLinks && (
        <nav className="align-items-center pointer-events-auto flex gap-4 font-bold sm:justify-end sm:gap-8 md:gap-12">
          {navLinks?.data?.slices.map((item) => (
            <NavLink
              key={item.id}
              link={item.primary.link}
              title={smartquotes(item.primary.title)}
            />
          ))}
        </nav>
      )}
    </header>
  );
}
