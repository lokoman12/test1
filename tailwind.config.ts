import type { Config } from 'tailwindcss';

export default {
   content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
   theme: {
      extend: {
         colors: {
            primary: '#402F9E',
            secondary: '#5B88CB',
            secondarylight: '#97CDFF',
            black: '#0F161F',
            darkgray: '#333333',
            semiTransparentGray: 'rgba(51,51,51,0.33)',
            lightgray: '#F7F7F7',
            gray: '#E3E0E3',
            genderM: '#43A5FF',
            genderF: '#FF97F5',
            customRed: '#EB5757',
         },
         fontFamily: {
            SFBold: ['SFBold'],
            SFSemibold: ['SFSemibold'],
            SFMedium: ['SFMedium'],
            SFLight: ['SFLight'],
            SF: ['SF'],
         },
      },
   },
} satisfies Config;
