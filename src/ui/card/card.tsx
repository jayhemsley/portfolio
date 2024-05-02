import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import smartquotes from 'smartquotes-ts';

import { cn } from '@/utils';

export function Card({
  client,
  title,
  description,
  className,
}: {
  client?: string;
  title?: string;
  description?: string;
  className?: string;
}): React.ReactElement {
  return (
    <div
      className={cn([
        'relative flex w-full cursor-pointer flex-wrap overflow-hidden rounded-2xl bg-black p-8 text-secondary-lightest shadow-primary-dark/75 transition-shadow hover:shadow-xl',
        className,
      ])}>
      {(client || title) && (
        <div className="mb-16 w-full transition sm:mb-6 md:mb-8">
          {client && <span className="mb-1 block">{smartquotes(client)}</span>}
          {title && <h2 className="font-bold drop-shadow">{smartquotes(title)}</h2>}
        </div>
      )}
      {description && (
        <p className="hidden w-11/12 translate-y-2 opacity-0 transition sm:mb-24 sm:block xl:mb-28">
          {smartquotes(description)}
        </p>
      )}
      <div className="absolute bottom-8 left-8 mt-auto w-11/12">
        <span className="align-items-baseline absolute left-0 z-10 inline-flex h-auto translate-y-1/2 border-b-[1px] border-solid border-secondary-lightest opacity-0 transition delay-0">
          View the case study
          {' '}
          <ArrowLongRightIcon className="ml-1 h-4 w-4" />
        </span>
      </div>
    </div>
  );
}
