import tw from 'src/utils/tw.util';
import { ButtonVariant } from './types';

const getStyles = (variant: ButtonVariant, disabled: boolean, pressed: boolean, centeredContent: boolean) => {
   const getSpecificStyles = () => {
      const specificStyles = {
         container: '',
         text: '',
      };

      if (disabled) {
         specificStyles.text += ' text-darkgray text-opacity-66';
      }

      if (centeredContent) {
         specificStyles.container += ' justify-center';
      }

      switch (variant) {
         case 'outlined':
            specificStyles.container += ' border-[1.5px] border-solid';
            if (disabled) {
               specificStyles.container += ' border-gray';
               break;
            }
            specificStyles.container += ' bg-primary border-primary bg-opacity-0';
            specificStyles.text += ' text-primary';

            if (pressed) {
               specificStyles.container += ' bg-opacity-12';
            }

            break;
         case 'text':
            if (disabled) {
               break;
            }
            specificStyles.container += ' bg-primary bg-opacity-0';
            specificStyles.text += ' text-primary';

            if (pressed) {
               specificStyles.container += ' bg-opacity-12';
            }

            break;

         // `filled` case
         default:
            if (disabled) {
               specificStyles.container += ' bg-gray';
               break;
            }
            specificStyles.container += ' bg-primary';
            specificStyles.text += ' text-white';

            if (pressed) {
               specificStyles.container += ' opacity-88';
            }

            break;
      }

      return specificStyles;
   };

   const styles = {
      button: tw`py-4 px-6 rounded-full flex-row items-center gap-x-2.5
		${getSpecificStyles().container}`,
      text: tw`${getSpecificStyles().text}`,
   };

   return styles;
};

export default getStyles;
