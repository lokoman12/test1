import tailwindConfig from '../../tailwind.config';
import { create } from 'twrnc';

const tw = create(tailwindConfig);

export const colors = tailwindConfig.theme.extend.colors;

export default tw;
