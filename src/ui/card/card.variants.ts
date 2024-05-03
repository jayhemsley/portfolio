import { cva } from 'class-variance-authority';

export const CardVariants = cva(
  'group relative z-10 min-h-64 rounded-2xl text-secondary-lightest hover:text-white hover:shadow-[0_14px_40px_-20px] hover:shadow-secondary-dark/75',
  {
    variants: {
      variant: {
        small: 'col-span-2 md:col-span-1 md:min-h-72 lg:min-h-96 xl:min-h-[32rem]',
        default: 'col-span-2 md:min-h-80 lg:min-h-[28rem] xl:min-h-[36rem]',
        large: 'col-span-2 md:min-h-96 lg:min-h-[36rem] xl:min-h-[44rem]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export const CardPreTitleVariants = cva('block w-full font-light sm:text-lg lg:text-xl', {
  variants: {
    variant: {
      small: '',
      default: 'xl:text-2xl',
      large: 'xl:text-2xl',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const CardTitleVariants = cva('text-2xl/tight font-bold sm:text-3xl/tight', {
  variants: {
    variant: {
      small: 'lg:3xl/tight xl:text-4xl/tight',
      default: 'lg:text-4xl/tight xl:text-5xl/tight',
      large: 'lg:text-4xl/tight xl:text-5xl/tight',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const CardDescriptionVariants = cva(
  'hidden w-10/12 translate-y-2 opacity-0 transition-all will-change-transform group-hover:translate-y-0 group-hover:opacity-80 sm:text-xl',
  {
    variants: {
      variant: {
        small: 'lg:w-11/12 lg:text-xl xl:w-10/12 xl:text-2xl lg:block',
        default: 'lg:w-10/12 lg:text-2xl xl:w-8/12 xl:text-3xl sm:block',
        large: 'lg:w-10/12 lg:text-2xl xl:w-8/12 xl:text-3xl sm:block',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
