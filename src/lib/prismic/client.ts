import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';

import { IS_PRODUCTION, PRISMIC_REPOSITORY } from '@/constants';

const routes: prismic.ClientConfig['routes'] = [
  {
    type: 'home',
    path: '/',
  },
];

export const createClient = (clientConfig: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(PRISMIC_REPOSITORY, {
    routes,
    fetchOptions: IS_PRODUCTION
      ? { next: { tags: ['prismic'] }, cache: 'force-cache' }
      : { next: { revalidate: 5 } },
    ...clientConfig,
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: clientConfig.previewData,
    req: clientConfig.req,
  });

  return client;
};
