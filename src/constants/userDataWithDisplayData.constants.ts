import { City } from 'src/types';

import { ImageSourcePropType } from 'react-native';
import { Purpose } from 'src/types';

export type CityWithName = {
   city: City;
   name: string;
};

export type PurposeWithShowingData = {
   purpose: Purpose;
   title: string;
   description: string;
   imageSrc: ImageSourcePropType;
};

import { Tag } from 'src/types';

export type TagWithName = {
   tag: Tag;
   name: string;
};

export const citiesWithNames: CityWithName[] = [
   {
      city: 'MSK',
      name: 'Москва',
   },
   {
      city: 'PITER',
      name: 'Санкт-Петербург',
   },
   {
      city: 'NOVOSIB',
      name: 'Новосибирск',
   },
   {
      city: 'EKAT',
      name: 'Екатеринбург',
   },
   {
      city: 'KAZAN',
      name: 'Казань',
   },
   {
      city: 'NIZHNIYNOV',
      name: 'Нижний новгород',
   },
   {
      city: 'CHELYAB',
      name: 'Челябинск',
   },
   {
      city: 'SAMARA',
      name: 'Самара',
   },
   {
      city: 'OMSK',
      name: 'Омск',
   },
   {
      city: 'ROSTOV',
      name: 'Ростов-на-Дону',
   },
   {
      city: 'YFA',
      name: 'Уфа',
   },
   {
      city: 'KRASNOYARSK',
      name: 'Красноярск',
   },
   {
      city: 'VORONESH',
      name: 'Воронеж',
   },
   {
      city: 'PERM',
      name: 'Пермь',
   },
   {
      city: 'VOLGOGRAD',
      name: 'Волгоград',
   },
];

export const purposesWithShowingData: PurposeWithShowingData[] = [
   {
      purpose: 'FRIENDSHIP',
      title: 'Знакомства',
      description: 'Пример пояснительного текста',
      imageSrc: require('assets/images/purposes/1.png'),
   },
   {
      purpose: 'LOVE',
      title: 'Отношения',
      description: 'Пример пояснительного текста',
      imageSrc: require('assets/images/purposes/2.png'),
   },
   {
      purpose: 'ENTERTAINMENT',
      title: 'Для развлечения',
      description: 'Пример пояснительного текста',
      imageSrc: require('assets/images/purposes/3.png'),
   },
];

export const tagsWithNames: TagWithName[] = [
   { tag: 'dogs', name: 'Собаки' },
   { tag: 'cats', name: 'Кошки' },
   { tag: 'pizza', name: 'Пицца' },
   { tag: 'alcohol', name: 'Алкоголь' },
   { tag: 'sport', name: 'Спорт' },
   { tag: 'rock', name: 'Рок' },
   { tag: 'hip-hop', name: 'Хип-хоп' },
];
