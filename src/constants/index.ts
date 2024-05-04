export const IS_DEVELOPMENT: boolean = process.env.NEXT_PUBLIC_VERCEL_ENV === 'development';
export const IS_PREVIEW: boolean = process.env.NEXT_PUBLIC_VERCEL_ENV === 'development';
export const IS_PRODUCTION: boolean = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';

export const APP_NAME: string = process.env.NEXT_PUBLIC_APP_NAME || 'Portfolio v2024.1';
export const APP_URL: string = process.env.NEXT_PUBLIC_APP_URL!;

export const META_DESCRIPTION: string =
  'Jay Hemsley is a front-end web developer based in Atlanta, Georgia.';
export const META_THEME_COLOR: string = '#535365';

export const PRISMIC_REPOSITORY: string = process.env.NEXT_PUBLIC_PRISMIC_REPOSITORY!;
