import { CodeBracketSquareIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

import { APP_NAME } from '@/constants';

export function Footer({
  title,
  email,
  source,
}: {
  title?: string;
  email?: string;
  source?: string;
}): React.ReactElement {
  return (
    <footer className="container mx-auto w-11/12 pb-4">
      {(title || email) && (
        <div className="flex flex-wrap justify-center py-12 text-center sm:gap-2 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32">
          {title && (
            <span className="block w-full text-lg font-light sm:text-xl md:text-2xl lg:text-3xl dark:text-secondary-lighter">
              {title}
            </span>
          )}
          {email && (
            <Link
              className="inline-block border-b-2 border-transparent pb-3 text-xl font-bold transition-colors hover:border-secondary-dark sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl dark:hover:border-secondary-lightest"
              href={`mailto:${email}`}
              target="_blank">
              {email}
            </Link>
          )}
        </div>
      )}
      <div className="flex w-full flex-wrap-reverse items-center justify-center gap-2 text-center text-secondary sm:flex-nowrap sm:justify-between sm:text-left dark:text-secondary-lighter">
        <p className="w-full sm:w-auto">
          &copy;
          {' '}
          {APP_NAME}
          {' '}
          {new Date().getFullYear()}
        </p>
        {source && (
          <Link
            href={source}
            className="group inline-flex gap-2 transition-colors hover:text-secondary-darkest dark:hover:text-secondary-lightest"
            target="_blank">
            <CodeBracketSquareIcon className="h-auto w-4 transition-transform group-hover:scale-125" />
            View Source on GitHub
          </Link>
        )}
      </div>
    </footer>
  );
}
