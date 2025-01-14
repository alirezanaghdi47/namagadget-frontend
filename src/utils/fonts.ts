// libraries
import localFont from 'next/font/local';

export const vazirmatn = localFont({
  src: [
    {
      path: '../../public/assets/fonts/vazirmatn-regular.woff2',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../../public/assets/fonts/vazirmatn-medium.woff2',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../../public/assets/fonts/vazirmatn-bold.woff2',
      style: 'normal',
      weight: '700',
    },
  ],
});
