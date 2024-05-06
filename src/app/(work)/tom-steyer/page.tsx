import Link from 'next/link';

import { Image, Overview, PageLayout } from '@/ui';

import { data } from './data';

export const metadata = {
  title: data.pretitle,
};

export default function TomSteyerPage(): React.ReactElement {
  return (
    <PageLayout {...data}>
      <Overview
        subtitle="Leading up to the most recent election, Patronage and the Tom Steyer team worked together to increase civic engagement across the nation."
        meta={{
          date: 'October 2020',
          roles: ['Front-End Development'],
          technologies: ['TypeScript', 'React', 'Next.js', 'WordPress', 'GraphQL'],
          design: 'Patronage',
        }}
        link="https://www.tomsteyer.com/">
        <p>
          While working at{' '}
          <Link href="https://patronage.org" target="_blank">
            Patronage
          </Link>{' '}
          as a front-end developer, I contributed to the campaign efforts of the Tom Steyer team by
          expanding the feature set of their primary online platform. Their main site is one of the
          most important tools used in their efforts to increase political engagement and informed
          decision making among the American public.
        </p>
        <p>
          The main features that I worked on adding to the website included an action center that
          would point visitors to various political initiatives they could take part in, and a map
          that showed all of the candidates running on platforms that included environmental
          policies for sustainability, clean energy, and equality.
        </p>
      </Overview>
      <Image
        src="/images/tom-steyer/tom-steyer-1.jpg"
        alt="The new candidate map widget for the 2020 election season."
        width={2576}
        height={2300}
      />
      <Image
        src="/images/tom-steyer/tom-steyer-2.jpg"
        alt="The new action center for the website."
        width={2576}
        height={2069}
      />
      <Image
        src="/images/tom-steyer/tom-steyer-3.jpg"
        alt="Mobile views for the new map widget and action center."
        width={2576}
        height={2300}
      />
    </PageLayout>
  );
}
