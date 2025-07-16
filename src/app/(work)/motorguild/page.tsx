import { Overview, PageLayout } from '@/ui';

import { data } from './data';

export const metadata = {
  title: data.pretitle,
};

export default function MotorGuildPage(): React.ReactElement {
  return (
    <PageLayout {...data}>
      <Overview
        subtitle="The car enthusiast side of the internet is currently split between multiple platforms, with no centralized community. MotorGuild aims to fix that."
        meta={{
          status: 'In Development',
          roles: ['Full-Stack Development', 'UI/UX Design'],
          technologies: [
            'TypeScript',
            'React',
            'Next.js',
            'Node.js',
            'Express.js',
            'Postgres',
            'Supabase',
          ],
        }}>
        <p>
          <em>This project is currently under development. Check back soon for more news!</em>
        </p>
      </Overview>
    </PageLayout>
  );
}
