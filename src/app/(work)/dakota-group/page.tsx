import Link from 'next/link';

import { Overview, PageLayout } from '@/ui';

import { data } from './data';

export const metadata = {
  title: data.pretitle,
};

export default function DakotaGroupPage(): React.ReactElement {
  return (
    <PageLayout {...data}>
      <Overview
        subtitle="While I was working with Hub & Spoke, their parent company was in need of a simple landing page bringing together all of their creative properties under one umbrella."
        meta={{
          date: 'September 2018',
          roles: ['Front-End Development'],
        }}
        link="https://wearedakotagroup.com">
        <p>
          I put together a simple landing page based off of a provided design that listed all of the
          Dakota Group&rsquo;s properties and provided easy navigation to all of them, while also
          initializing an online presence for the parent company itself.
        </p>
        <p>
          The site&rsquo;s animations are all CSS-based and use the{' '}
          <Link href="https://michalsnik.github.io/aos" target="_blank">
            Animate On Scroll
          </Link>{' '}
          CSS library. Given that the site was supposed to be a quick project, it was more efficient
          to use pre-built libraries rather than re-inventing the wheel. The site came together
          nicely and has proved to be a mainstay for the company.
        </p>
      </Overview>
    </PageLayout>
  );
}
