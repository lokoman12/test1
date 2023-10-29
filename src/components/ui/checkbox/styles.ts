import tw from 'src/utils/tw.util';

const getStyles = (checked: boolean) => {
   const styles = {
      checkbox: tw`flex-row items-center gap-x-2`,
      checkmark: tw`border-solid rounded-[4px] w-5 h-5 justify-center items-center ${checked ? 'bg-primary' : 'border border-semiTransparentGray'}`,
   };

   return styles;
};

export default getStyles;
