export type NavLink = {
  slug: string;
  title: string;
  href: string;
  new?: boolean;
};

export type PageData = {
  pretitle?: string;
  title?: string;
  subtitle?: string;
  image?: {
    url: string;
    alt?: string;
  };
  themeColors?: {
    primary?: string;
    primaryDark?: string;
    secondary?: string;
    secondaryDark?: string;
    ui?: string;
    uiDark?: string;
  };
};
