import { Card, Hero } from '@/ui';

import { data as chooseClevelandCounty } from './(work)/choose-cleveland-county/data';
import { data as dakotaGroup } from './(work)/dakota-group/data';
import { data as motorguild } from './(work)/motorguild/data';
import { data as specialEducationFoundation } from './(work)/special-education-foundation/data';
import { data as tomSteyer } from './(work)/tom-steyer/data';
import { data as wvPolicy } from './(work)/wv-policy/data';

export default function HomePage(): React.ReactElement {
  return (
    <div className="flex h-full w-full animate-fade-in flex-wrap justify-center">
      <Hero
        title="Full-Stack Developer Based in Atlanta, GA"
        subtitle="I work with small businesses and public organizations across the world to craft engaging digital experiences."
      />
      <section className="container grid w-11/12 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:gap-8">
        <Card href="/motorguild" {...motorguild} variant="large" />
        <Card href="/tom-steyer" {...tomSteyer} />
        <Card
          href="/special-education-foundation"
          {...specialEducationFoundation}
          variant="small"
        />
        <Card href="/wv-policy" {...wvPolicy} variant="small" />
        <Card href="/dakota-group" {...dakotaGroup} variant="small" />
        <Card href="/choose-cleveland-county" {...chooseClevelandCounty} variant="small" />
      </section>
    </div>
  );
}
