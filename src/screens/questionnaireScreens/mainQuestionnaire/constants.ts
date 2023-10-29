import { IQuestionnaireSection } from '../types';
import PersonalInfoForm from './personalInfoForm';
import PurposeChoose from './purposeChoose';
import TagsChoose from './tagsChoose';

export const questionnaireSections: IQuestionnaireSection[] = [
   {
      title: 'Как вас зовут?',
      subtitle: 'Эта информация не видна другим пользователям',
      content: PersonalInfoForm,
   },
   { title: 'Какие у вас интересы и предпочтения?', subtitle: 'Выберите свои интересы', content: TagsChoose },
   { title: 'Какова ваша цель?', subtitle: 'Выберите цель', content: PurposeChoose },
];

export const FIO_MAX = 'ФИО должно быть длиною не более 150 символов!';
export const USERNAME_MIN = 'Введите никнейм!';
export const USERNAME_MAX = 'Никнейм должен быть длиной не более 150 символов!';
export const USERNAME_NOT_VALID = 'Никнейм может содержать только латинские буквы и специальные символы (_ . @ + -)!';
export const TAGS_MIN = 'Выберите хотя бы один интерес!';
export const TAGS_MAX = 'Выберите не более 10 интересов!';
