import { Overview, PageLayout } from '@/ui';

import { data } from './data';

export const metadata = {
  title: data.pretitle,
};

export default function WvPolicyPage(): React.ReactElement {
  return (
    <PageLayout {...data}>
      <Overview
        subtitle="The West Virginia Center on Budget & Policy is a non-profit and non-partisan policy research organization serving as a reputable source of credible information on the state's public budget and fiscal issues for both policymakers and the public."
        meta={{
          date: 'August 2018',
          roles: ['Design', 'Front-End Development'],
        }}
        link="https://wvpolicy.org/">
        <p>
          I was tasked with modernizing their website design to help them to better report their
          research and data to the public. Their previous site was relatively inflexible when it
          came to representing different forms of content, and they were looking for a website
          facelift that would also give them a solid design foundation to build upon as the
          organization grew.
        </p>
        <p>
          The refreshed design for WV Policy&rsquo;s website focused on highlighting what mattered
          most: their latest platform issues and research. The new site was also responsive, giving
          mobile users an improved experience over the previous iteration.
        </p>
      </Overview>
    </PageLayout>
  );
}
