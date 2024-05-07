import { Overview, PageLayout } from '@/ui';

import { data } from './data';

export const metadata = {
  title: data.pretitle,
};

export default function MotorGuildPage(): React.ReactElement {
  return (
    <PageLayout {...data}>
      <Overview
        subtitle="Coming soon."
        meta={{
          status: 'In Development',
          roles: ['Full-Stack Development', 'UI/UX Design'],
          technologies: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'Postgres'],
        }}
        link="https://motorguild.com">
        <p>
          <em>This project is currently under development.</em>
        </p>
        <p>
          Check back soon for more news, or sign up for the waiting list by visiting the link below!
        </p>
      </Overview>
    </PageLayout>
  );
}
