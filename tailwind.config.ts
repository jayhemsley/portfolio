import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import tailwindCss3d from 'tailwindcss-3d';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  plugins: [
    typography,
    tailwindCss3d,
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => ({
            'animation-delay': value,
          }),
        },
        {
          values: theme('transitionDelay'),
        },
      );
    }),
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s cubic-bezier(0.39, 0.575, 0.565, 1) forwards',
      },
      colors: {
        primary: {
          DEFAULT: '#4272CB',
          dark: '#3565C0',
          darker: '#2454AD',
          darkest: '#441208',
          light: '#5282DA',
          lighter: '#6993DF',
        },
        secondary: {
          DEFAULT: '#535365',
          dark: '#41404E',
          darker: '#2E2E3A',
          darkest: '#13151C',
          light: '#9A9AAC',
          lighter: '#B0B0BF',
          lightest: '#F4F4F6',
        },
        accent: {
          pink: '#E54F6D',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
    fontFamily: {
      sans: ['Messina Sans', 'system-ui', 'sans-serif'],
    },
    transitionDuration: {
      DEFAULT: '300ms',
    },
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
    },
  },
};

export default config;
