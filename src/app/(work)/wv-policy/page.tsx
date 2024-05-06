import { Image, Overview, PageLayout } from '@/ui';

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
      <Image
        src="/images/wv-policy/wv-policy-1.jpg"
        alt="WV Policy's new homepage."
        width={2576}
        height={2300}
      />
      <Image
        src="/images/wv-policy/wv-policy-2.jpg"
        alt="A sample widget from the new site."
        width={2576}
        height={1072}
      />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:gap-8 xl:gap-10">
        <Image
          src="/images/wv-policy/wv-policy-3.jpg"
          alt="WV Policy's new homepage on a mobile device."
          width={1256}
          height={2300}
        />
        <Image
          src="/images/wv-policy/wv-policy-4.jpg"
          alt="A sample widget from the new site on a mobile device."
          width={1256}
          height={2300}
        />
      </div>
    </PageLayout>
  );
}
