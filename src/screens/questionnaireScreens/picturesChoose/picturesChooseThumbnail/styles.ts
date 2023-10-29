import tw from 'src/utils/tw.util';

const getStyles = (disabled: boolean) => {
   const styles = {
      container: tw`p-4 gap-x-5 border border-solid border-gray rounded-3xl flex-row items-center`,
      textInfo: tw`flex-1 gap-y-1`,
      text: tw`${disabled ? 'text-semiTransparentGray' : 'text-black'}`,
   };

   return styles;
};

export default getStyles;
