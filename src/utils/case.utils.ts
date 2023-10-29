import { camelCase, snakeCase } from 'change-case';

const changeCaseKeys = require('change-case-keys');

export const toCamel = <T extends string | Record<string, unknown> | unknown[]>(data: T): T => {
   if (typeof data === 'string') {
      return camelCase(data) as any;
   }
   return changeCaseKeys(data, 'camelize', 10);
};

export const toSnake = <T extends string | Record<string, unknown> | unknown[]>(data: T): T => {
   if (typeof data === 'string') {
      return snakeCase(data) as any;
   }
   return changeCaseKeys(data, 'underscored', 10);
};
