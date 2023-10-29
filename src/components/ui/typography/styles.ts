import tw from 'src/utils/tw.util';
import { TypographyVariant } from './types';

const getStyles = (variant: TypographyVariant, centered: boolean) => {
   const getSpecificStyles = () => {
      switch (variant) {
         case 'h1':
            return 'font-SFBold text-5xl tracking-[0.48px]';
         case 'h2':
            return 'font-SFBold text-4xl tracking-[0.36px]';
         case 'h3':
            return 'font-SFBold text-2xl tracking-[0.24px]';
         case 'bold-1':
            return 'font-SFBold text-xl tracking-[0.2px]';
         case 'bold-2':
            return 'font-SFBold text-base tracking-[0.16px]';
         case 'bold-3':
            return 'font-SFBold text-sm tracking-[0.14px]';

         case 'text-14':
            return 'font-SF text-sm tracking-[0.14px]';
         case 'text-12':
            return 'font-SFMedium text-xs tracking-[0.5px]';
         case 'text-10':
            return 'font-SFSemibold text-xs uppercase tracking-[0.5px]';
         // `text` case
         default:
            return 'font-SF text-base tracking-[0.16px]';
      }
   };

   const styles = tw`text-black ${centered ? 'text-center' : ''} ${getSpecificStyles()}`;

   return styles;
};

export default getStyles;
