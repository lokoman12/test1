import tw from 'src/utils/tw.util';

const getStyles = (pressed: boolean, disabled: boolean) => {
   const getContainerStyle = () => {
      if (disabled) {
         return 'bg-gray';
      }
      if (pressed) {
         return 'bg-primary';
      }
      return 'border-primary';
   };

   const getTextStyle = () => {
      if (disabled) {
         return 'text-darkgray text-opacity-66';
      }
      if (pressed) {
         return 'text-white';
      }
      return 'text-primary';
   };

   const styles = {
      container: tw`py-6 px-8 rounded-full flex-row items-center gap-x-4.5 border border-solid border-transparent ${getContainerStyle()}`,
      text: tw`${getTextStyle()}`,
   };
   return styles;
};

export default getStyles;
