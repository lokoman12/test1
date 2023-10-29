import tw from 'src/utils/tw.util';

const styles = {
   listSection: (pressed: boolean) => tw`px-6 py-2 ${pressed ? 'bg-primary bg-opacity-12' : ''}`,
};

export default styles;
