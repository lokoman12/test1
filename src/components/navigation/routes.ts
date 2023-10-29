import Homepage from 'src/screens/Homepage';
import ConfirmPhoneNumber from 'src/screens/confirmPhoneNumber';
import LoginWithPhoneNumber from 'src/screens/loginWithPhoneNumber';
import Onboarding from 'src/screens/onboarding';
import CityChoose from 'src/screens/questionnaireScreens/cityChoose';
import GenderQuestionnaire from 'src/screens/questionnaireScreens/genderQuestionnaire';
import MainQuestionnaire from 'src/screens/questionnaireScreens/mainQuestionnaire';
import PicturesChoose from 'src/screens/questionnaireScreens/picturesChoose';
import SuccessQuestionnaire from 'src/screens/questionnaireScreens/successQuestionnaire';
import Welcome from 'src/screens/welcome';
import { IRoute } from './types';

export const mainRoutes: IRoute[] = [
   {
      name: 'homepage',
      component: Homepage,
   },
];

export const newUserRoutes: IRoute[] = [
   {
      name: 'onboarding',
      component: Onboarding,
   },
   {
      name: 'mainQuestionnaire',
      component: MainQuestionnaire,
   },
   {
      name: 'genderQuestionnaire',
      component: GenderQuestionnaire,
   },
   {
      name: 'picturesChoose',
      component: PicturesChoose,
   },
   {
      name: 'cityChoose',
      component: CityChoose,
   },
   {
      name: 'successQuestionnaire',
      component: SuccessQuestionnaire,
   },
];

export const noAuthRoutes: IRoute[] = [
   {
      name: 'welcome',
      component: Welcome,
   },
   {
      name: 'loginWithPhoneNumber',
      component: LoginWithPhoneNumber,
   },
   {
      name: 'confirmPhoneNumber',
      component: ConfirmPhoneNumber,
   },
];
