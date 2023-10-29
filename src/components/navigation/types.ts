import { FC } from 'react';

export type IRoute = {
   name: string;
   component: FC<any>;
};

export type RootStackParamList = {
   welcome: undefined;
   loginWithPhoneNumber: undefined;
   confirmPhoneNumber: {
      phone: string;
      isCreated: boolean;
   };
   homepage: undefined;
   onboarding: undefined;
   mainQuestionnaire: undefined;
   genderQuestionnaire: undefined;
   picturesChoose: undefined;
   cityChoose: undefined;
   successQuestionnaire: undefined;
   serverError: undefined;
};
