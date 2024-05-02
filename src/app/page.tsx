import { Card, Hero } from '@/ui';

export default function HomePage(): React.ReactElement {
  return (
    <div className="flex h-full w-full flex-wrap items-center justify-center">
      <Hero />
      <section className="container flex flex-wrap gap-8">
        <Card client="someone" title="Card Title" description="Card Description" />
        <Card client="someone" title="Card Title" description="Card Description" />
        <Card client="someone" title="Card Title" description="Card Description" />
      </section>
    </div>
  );
}
