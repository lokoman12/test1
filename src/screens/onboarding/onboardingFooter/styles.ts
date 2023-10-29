import tw from 'src/utils/tw.util';

const styles = {
   container: tw`flex-row justify-between items-center`,
   dots: tw`flex-row gap-x-6`,
   dot: (active: boolean) => tw`h-1.5 border border-solid border-primary rounded-full ${active ? 'w-12 bg-primary' : 'w-4'}`,
   buttons: tw`flex-row gap-x-4`,
   button: tw`p-5.2 rounded-full`,
   buttonLeft: tw`bg-gray`,
   buttonRight: tw`bg-primary`,
   iconLeft: tw`text-primary`,
   iconRight: tw`text-white`,
};

export default styles;
