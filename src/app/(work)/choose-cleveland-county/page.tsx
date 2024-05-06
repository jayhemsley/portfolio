import Link from 'next/link';

import { Image, Overview, PageLayout } from '@/ui';

import { data } from './data';

export const metadata = {
  title: data.pretitle,
};

export default function ChooseClevelandCountyPage(): React.ReactElement {
  return (
    <PageLayout {...data}>
      <Overview
        subtitle="The Cleveland County Economic Development Partnership works to help new businesses and industries seamlessly establish and expand their presence in their corner of North Carolina."
        meta={{
          date: 'August 2019',
          roles: ['Front-End Development'],
          technologies: ['PHP', 'WordPress'],
          design: 'RDG',
        }}
        link="https://chooseclevelandcountync.com">
        <p>
          While contracted with{' '}
          <Link href="http://rdg-one.com" target="_blank">
            RDG
          </Link>{' '}
          and{' '}
          <Link href="https://aboutdci.com" target="_blank">
            DCI
          </Link>{' '}
          I had the opportunity to bring their new design to life. After being provided with the
          design mockups, I built their revamped site on the WordPress, Timber and Advanced Custom
          Fields stack.
        </p>
        <p>
          Their new site serves as their new home to showcase the highlights and benefits of setting
          up shop in the county, its key industries, prime properties and more.
        </p>
      </Overview>
      <Image
        src="/images/choose-cleveland-county/ccedp-1.jpg"
        alt="The Cleveland County Economic Development Partnership's new homepage."
        width={2576}
        height={2300}
      />
      <Image
        src="/images/choose-cleveland-county/ccedp-2.jpg"
        alt="A sample subpage from the new website."
        width={2576}
        height={2300}
      />
      <Image
        src="/images/choose-cleveland-county/ccedp-3.jpg"
        alt="A sample subpage from the new website."
        width={2576}
        height={2300}
      />
      <Image
        src="/images/choose-cleveland-county/ccedp-4.jpg"
        alt="Mobile views of the new website."
        width={2576}
        height={2300}
      />
    </PageLayout>
  );
}
