import tw from 'src/utils/tw.util';

const getStyles = (selected: boolean) => {
   const styles = {
      container: tw`border border-solid border-primary px-2 py-1 rounded-lg ${selected ? 'bg-primary' : 'border'}`,
      text: tw`${selected ? 'text-white' : ''}`,
   };
   return styles;
};

export default getStyles;
