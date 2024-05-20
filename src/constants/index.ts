import type { NavLink } from '@/types';


// System
export const IS_DEVELOPMENT: boolean = process.env.NEXT_PUBLIC_VERCEL_ENV === 'development';
export const IS_PREVIEW: boolean = process.env.NEXT_PUBLIC_VERCEL_ENV === 'development';
export const IS_PRODUCTION: boolean = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';

// App
export const APP_NAME: string = 'Jay Hemsley';
export const APP_URL: string = 'https://hemsley.dev';

// Meta
export const META_DESCRIPTION: string = 'Full-Stack Developer based in Atlanta.';
export const META_THEME_COLOR_DARK: string = '#13151C';
export const META_THEME_COLOR_LIGHT: string = '#F4F4F6';

// Header
export const HEADER_LINKS: NavLink[] = [
  {
    slug: 'resume',
    title: 'Résumé',
    href: 'https://drive.google.com/file/d/11nnGAXXAB-Q3A-IPtH5o5YSCD61rQeOh/view',
    new: true,
  },
  {
    slug: 'github',
    title: 'GitHub',
    href: 'https://github.com/jayhemsley',
    new: true,
  },
  {
    slug: 'email',
    title: 'Email',
    href: 'mailto:jay@hemsley.dev',
    new: true,
  },
];