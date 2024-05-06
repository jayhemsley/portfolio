import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

import { IS_DEVELOPMENT } from '@/constants';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = headers();
  const domain = headersList.get('host') as string;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${IS_DEVELOPMENT ? 'http' : 'https'}://${domain}/sitemap.xml`,
  };
}
