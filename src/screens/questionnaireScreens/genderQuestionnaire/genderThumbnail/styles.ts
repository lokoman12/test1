import { Gender } from 'src/types';
import tw from 'src/utils/tw.util';

const getStyles = (gender: Gender, selected: boolean) => {
   const getContainerStyle = () => {
      if (!selected) {
         return 'border-gray bg-white';
      }
      if (gender === 'M') {
         return 'bg-genderM';
      }
      return 'bg-genderF';
   };

   const styles = {
      container: tw`px-2 py-3 items-center border border-solid border-transparent rounded-3xl ${getContainerStyle()}`,
      text: tw`${selected ? 'text-white' : 'text-black'}`,
   };

   return styles;
};

export default getStyles;
