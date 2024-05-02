import Link from 'next/link';

import { APP_NAME } from '@/constants';

function NavLink({ href, title }: { href: string; title: string }): React.ReactElement {
  return (
    <Link
      className="relative transition-colors hover:text-primary-dark"
      href={href}
      target={href.startsWith('http') ? '_blank' : '_self'}>
      {title}
    </Link>
  );
}

export function Header(): React.ReactElement {
  return (
    <header className="container sticky top-0 mx-auto w-11/12 justify-between py-4 text-lg sm:flex md:py-8 md:text-xl lg:text-2xl">
      <Link href="/" className="mb-1 block text-secondary-darkest sm:m-0">
        {APP_NAME}
      </Link>
      <nav className="align-items-center flex gap-4 sm:justify-end sm:gap-6 lg:gap-8">
        <NavLink
          href="https://drive.google.com/file/d/11nnGAXXAB-Q3A-IPtH5o5YSCD61rQeOh/view?usp=drive_link"
          title="Résumé"
        />
        <NavLink href="https://github.com/jayhemsley" title="GitHub" />
        <NavLink href="mailto:jay@hemsley.dev?subject=Hello, Let's Work Together!" title="Email" />
      </nav>
    </header>
  );
}
