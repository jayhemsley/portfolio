import Link from 'next/link';

import { Overview, PageLayout } from '@/ui';

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
    </PageLayout>
  );
}
