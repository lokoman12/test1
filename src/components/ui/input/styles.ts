import tw from 'src/utils/tw.util';
const getStyles = (focused: boolean) => {
   const styles = {
      container: tw`gap-y-2`,
      inputContainer: tw`gap-x-2 border-solid rounded-2xl px-4 py-3 items-center flex-row overflow-hidden ${
         focused ? 'border-primary border-[1.5px]' : 'border-semiTransparentGray border'
      }`,
      textInput: tw`text-black text-lg flex-1`,
      error: tw`text-red-500`,
   };

   return styles;
};

export default getStyles;
