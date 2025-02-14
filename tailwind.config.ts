// libraries
import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');

export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '320px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    fontFamily: {
      sans: ['var(--font-vazirmatn)', 'sans'],
    },
    extend: {
      fontSize: {
        xxs: '0.7rem',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    nextui({
      addCommonColors: false,
      defaultTheme: 'light',
      defaultExtendTheme: 'light',
      layout: {},
      themes: {
        light: {
          colors: {
            background: '#FFFFFF',
            foreground: '#11181C',
            default: {
              DEFAULT: '#fafafa',
              foreground: '#18181b',
            },
            primary: {
              foreground: '#FFFFFF',
              DEFAULT: '#006FEE',
            },
            secondary: {
              DEFAULT: '#3f3f46',
              foreground: '#e4e4e7',
            },
          },
        },
        dark: {
          colors: {
            background: '#000000',
            foreground: '#ECEDEE',
            default: {
              DEFAULT: '#18181b',
              foreground: '#fafafa',
            },
            primary: {
              foreground: '#FFFFFF',
              DEFAULT: '#006FEE',
            },
            secondary: {
              DEFAULT: '#e4e4e7',
              foreground: '#3f3f46',
            },
          },
        },
      },
    }),
  ],
} satisfies Config;
