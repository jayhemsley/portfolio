import type { Config } from 'tailwindcss';
import tailwindCss3d from 'tailwindcss-3d';
import radix from 'tailwindcss-radix';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  // future: {
  //   hoverOnlyWhenSupported: true,
  // },
  plugins: [
    radix,
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
        'fade-in': 'fadeIn 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) forwards',
        'fade-in-down': 'fadeInDown 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) forwards',
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
          lighter: '#B0B0Bf',
          lightest: '#F4F4F6',
        },
        accent: {
          pink: '#E54F6D',
          obsidian: '#0E0E40',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInDown: {
          '0%': { opacity: '0', translateY: '-1rem' },
          '100%': { opacity: '1', translateY: '0' },
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
