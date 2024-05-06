import Link from 'next/link';

import { Image, Overview, PageLayout } from '@/ui';

import { data } from './data';

export const metadata = {
  title: data.pretitle,
};

export default function SpecialEducationFoundationPage(): React.ReactElement {
  return (
    <PageLayout {...data}>
      <Overview
        subtitle="Since 1984, the Special Education Foundation has provided assistance to students with disabilities in St. Louis County, helping them achieve both in the classroom and beyond."
        meta={{
          date: 'January 2019',
          roles: ['Full-Stack Development'],
          technologies: ['PHP', 'WordPress'],
          design: 'Hub & Spoke Creative',
        }}
        link="https://sef-stl.org">
        <p>
          While working with the team at{' '}
          <Link href="https://hubandspokecreative.com" target="_blank">
            Hub & Spoke Creative
          </Link>
          , I had the opportunity to revamp the Special Education Foundations primary website. Given
          the increased emphasis on adaptive technology use in both the classroom and everyday life,
          the primary goal of the project was to develop an inclusive website that could be easily
          used by all of their visitors.
        </p>
        <p>
          Once the agency had a design finalized, I worked with them to ensure that the new website
          adhered as closely as possible to the{' '}
          <Link href="https://www.w3.org/TR/WCAG20" target="_blank">
            Web Content Accessibility Guidelines
          </Link>
          , delivering a product that the organization could use to effectively communicate with
          their community.
        </p>
      </Overview>
      <Image
        src="/images/special-education-foundation/sef-1.jpg"
        alt="The new Special Education Foundation of St. Louis homepage."
        width={2576}
        height={2300}
      />
    </PageLayout>
  );
}
