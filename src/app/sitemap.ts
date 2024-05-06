import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

import { IS_DEVELOPMENT } from '@/constants';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = headers();
  const domain = headersList.get('host') as string;

  return [
    {
      url: `${IS_DEVELOPMENT ? 'http' : 'https'}://${domain}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
