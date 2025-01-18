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
      '2xl': '1440px',
    },
    // colors: {
    //   primary: '#263A82',
    //   secondary: '#F7C3A8',
    //   success: '#28a745',
    //   info: '#17a2b8',
    //   warning: '#ffc107',
    //   danger: '#dc3545',
    //   dark: '#1e293b',
    //   'dark-gray': '#64748b',
    //   'light-gray': '#cbd5e1',
    //   light: '#f1f5f9',
    //   transparent: 'transparent',
    //   current: 'currentColor',
    // },
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
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
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
