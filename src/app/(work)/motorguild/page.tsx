import { Overview, PageLayout } from '@/ui';

import { data } from './data';

export const metadata = {
  title: data.pretitle,
};

export default function MotorGuildPage(): React.ReactElement {
  return (
    <PageLayout {...data}>
      <Overview
        meta={{
          status: 'In Development',
          roles: ['Full-Stack Development', 'UI/UX Design'],
          technologies: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Postgres'],
        }}
        link="https://motorguild.com">
        <p>
          This project is currently under development. Check back soon for more news, or sign up for
          the waiting list by visiting the site!
        </p>
      </Overview>
    </PageLayout>
  );
}
