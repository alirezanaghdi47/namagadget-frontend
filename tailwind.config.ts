import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      xs: '320px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1440px',
    },
    colors: {
      primary: '#263A82',
      secondary: '#F7C3A8',
      success: '#28a745',
      info: '#17a2b8',
      warning: '#ffc107',
      danger: '#dc3545',
      dark: '#1e293b',
      'dark-gray': '#64748b',
      'light-gray': '#cbd5e1',
      light: '#f1f5f9',
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontFamily: {
      sans: ['var(--font-vazirmatn)', 'sans'],
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config;
