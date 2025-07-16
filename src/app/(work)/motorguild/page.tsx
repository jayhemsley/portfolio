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
          <em>Coming soon.</em>
        </p>
        <p>
          Active development of this project has been temporarily paused as I look into ways that I
          can create this platform as a sustainable yet fully open-source, privacy respecting one
          where users own their data (ActivityPub, anyone?).
        </p>
        <p>Check back soon for more news!</p>
      </Overview>
    </PageLayout>
  );
}
