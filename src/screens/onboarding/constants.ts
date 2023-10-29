import { OnboardingPageProps } from './onboardingPage/types';

export const onboardingPages: OnboardingPageProps[] = [
   {
      title: 'Добро пожаловать в Sumeet',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      lottieSrc: require('assets/animations/handsHoldingHeart.json'),
   },
   {
      title: 'Чаты',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      lottieSrc: require('assets/animations/phoneChatMessages.json'),
   },
   {
      title: 'Сервисы',
      description: `Консультация и советы экспертов\nДоставка подарков`,
      lottieSrc: require('assets/animations/present.json'),
   },
];
