import { ChevronDoubleRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

import { toSlug } from '@/utils';

function OverviewMeta({
  title,
  items,
}: {
  title: string;
  items: string | string[];
}): React.ReactElement {
  return (
    <div className="w-full sm:w-2/5 lg:w-full">
      <span className="mb-1 block font-bold text-secondary-lighter">{title}</span>
      <ul className="flex flex-wrap gap-1">
        {(typeof items === 'string' ? [items] : items).map((item) => (
          <li key={toSlug(item)} className="w-full text-secondary-lightest">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Overview({
  title = 'Overview',
  subtitle,
  children,
  meta,
  link,
}: {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  meta?: {
    date?: string;
    status?: string;
    roles?: string[];
    technologies?: string[];
    design?: string;
  };
  link?: string;
}): React.ReactElement {
  return (
    <section className="flex flex-wrap items-start gap-10 sm:w-10/12 md:gap-8 lg:gap-16 xl:gap-20 2xl:gap-24">
      <div className="flex flex-wrap gap-6 sm:flex-1 sm:gap-8">
        <div className="flex w-full flex-wrap gap-2">
          <h2 className="w-full text-3xl font-black text-secondary-darkest md:text-4xl dark:text-white">
            {title}
          </h2>
          <p className="text-xl font-light md:text-2xl">{subtitle}</p>
        </div>
        <div className="prose w-full max-w-none text-secondary-dark dark:prose-invert prose-a:text-[--page-theme-ui] prose-a:underline-offset-4 dark:text-secondary-lightest dark:prose-a:text-[--page-theme-ui-dark]">
          {children}
        </div>
        {link && (
          <div className="w-full">
            <Link
              href={link}
              className="group inline-flex select-none rounded-2xl bg-secondary-darkest px-5 py-3 font-bold text-secondary-lightest transition-all backface-hidden hover:bg-[--page-theme-ui] hover:shadow-xl hover:scale-105 active:scale-95 dark:bg-secondary-dark dark:hover:bg-[--page-theme-ui-dark]"
              target="_blank">
              Visit Website
              <ChevronDoubleRightIcon className="ml-1.5 h-auto w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
      <div className="flex w-full flex-wrap gap-6 rounded-2xl bg-secondary-darkest p-8 sm:gap-8 lg:w-4/12 lg:gap-6 xl:w-4/12 2xl:w-3/12 dark:bg-secondary-darker">
        {meta?.date && <OverviewMeta title="Date" items={meta.date} />}
        {meta?.status && <OverviewMeta title="Status" items={meta.status} />}
        {meta?.roles && (
          <OverviewMeta title={meta.roles.length > 1 ? 'Roles' : 'Role'} items={meta.roles} />
        )}
        {meta?.technologies && (
          <OverviewMeta
            title={meta.technologies.length > 1 ? 'Technologies' : 'Technology'}
            items={meta.technologies}
          />
        )}
        {meta?.design && <OverviewMeta title="Design By" items={meta.design} />}
      </div>
    </section>
  );
}
