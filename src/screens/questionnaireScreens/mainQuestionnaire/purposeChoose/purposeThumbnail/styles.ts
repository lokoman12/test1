import tw from 'src/utils/tw.util';

const getStyles = (active: boolean) => {
   const styles = {
      container: tw`px-2 py-3 gap-x-3 border-solid rounded-2xl flex-row ${active ? 'border-[1.5px] border-primary' : 'border border-gray'}`,
      textInfo: tw`gap-y-1`,
   };
   return styles;
};

export default getStyles;
