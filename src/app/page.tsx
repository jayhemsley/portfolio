import { createClient } from '@/prismicio';
import { Card, Hero } from '@/ui';

export default async function HomePage(): Promise<React.ReactElement> {
  const client = createClient();
  const { data } = await client.getSingle('home');

  return (
    <div className="flex h-full w-full flex-wrap justify-center">
      <Hero title={data.title} subtitle={data.subtitle} />
      <section className="container grid w-11/12 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:gap-8">
        <Card
          href="/"
          pretitle="MotorGuild"
          title="The internet's biggest car meet."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis nibh tortor, eu egestas diam feugiat a."
          variant="large"
          gradient="after:from-[#535365] after:to-[#F7701D]/80"
          image="/images/work/motorguild/cover.jpg"
        />
        <Card
          href="/"
          pretitle="Patronage × Tom Steyer"
          title="Tom Steyer"
          description="Contributing to the technical side of last year's election efforts by extending a central communications platform."
          image="/images/work/tom-steyer/cover.avif"
          gradient="after:from-[#0D21A1] after:to-[#23C9FF]/80"
        />
        <Card
          href="/"
          pretitle="Special Education Foundation of St. Louis"
          title="Empowering Students Beyond the Classroom"
          description="Focusing on core design and code accessibility principles to create an open platform of communication."
          variant="small"
          image="/images/work/special-education-foundation/cover.avif"
          gradient="after:from-[#FED337] after:to-[#0089A1]/80"
        />
        <Card
          href="/"
          pretitle="West Virginia Center on Budget & Policy"
          title="Giving Citizens Equitable Opportunities to Thrive"
          description="A central hub to showcase the research used to inform public dialog and policy in West Virginia."
          variant="small"
          image="/images/work/wv-policy/cover.avif"
          gradient="after:from-[#114276] after:to-[#EBA416]/80"
        />
        <Card
          href="/"
          pretitle="Dakota Group"
          title="The Dakota Group Website"
          description="A color-blocked design for a portfolio of targeted visual creative studios."
          variant="small"
          image="/images/work/dakota-group/cover.avif"
          gradient="after:from-[#36395A] after:to-[#3D9DFF]/80"
        />
        <Card
          href="/"
          pretitle="Cleveland County Economic Development Partnership"
          title="Choose Cleveland County"
          description="Highlighting the wide variety of businesses and growing industries found within Cleveland County, North Carolina."
          variant="small"
          image="/images/work/choose-cleveland-county/cover.avif"
          gradient="after:from-[#AA222F] after:to-[#444440]/80"
        />
      </section>
    </div>
  );
}
