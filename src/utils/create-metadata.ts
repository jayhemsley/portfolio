import type { Metadata } from 'next';

import { APP_NAME, APP_URL, META_DESCRIPTION } from '@/constants';

export function createMetadata({
  title = `${APP_NAME}`,
  description = META_DESCRIPTION,
}: {
  title?: string;
  description?: string;
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${APP_NAME}`,
    },
    description,
    formatDetection: {
      address: false,
      email: false,
      telephone: false,
    },
    metadataBase: new URL(APP_URL),
    openGraph: {
      title,
      description,
    },
  };
}
