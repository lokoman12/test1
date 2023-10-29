import { IQuestionnaireSection } from '../types';
import SearchingGenderChoose from './searchingGenderChoose';
import SelfGenderChoose from './selfGenderChoose';

export const questionnaireSections: IQuestionnaireSection[] = [
   { title: 'Ваш пол?', subtitle: 'Выберите свой пол', content: SelfGenderChoose },
   { title: 'Кто вам интересен?', subtitle: 'Выберите свой романтический интерес', content: SearchingGenderChoose },
];
