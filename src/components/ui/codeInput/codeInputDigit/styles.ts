import tw from 'src/utils/tw.util';

const getStyles = (active: boolean) => {
   const styles = {
      container: tw`w-19 h-12 justify-center items-center rounded-2xl border-[1.5px] border-solid ${active ? 'border-primary' : 'border-gray'}`,
   };

   return styles;
};

export default getStyles;
