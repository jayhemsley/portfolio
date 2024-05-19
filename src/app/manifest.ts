import { MetadataRoute } from 'next';

import { APP_NAME, META_THEME_COLOR_DARK } from '@/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: APP_NAME,
    short_name: APP_NAME,
    start_url: '/',
    display: 'browser',
    background_color: META_THEME_COLOR_DARK,
    theme_color: META_THEME_COLOR_DARK,
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
