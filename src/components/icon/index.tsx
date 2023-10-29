import React, { FC } from 'react';
import { SvgXml, XmlProps } from 'react-native-svg';
import { iconsXmlMap } from './constants';

type Props = Omit<XmlProps, 'xml'> & {
   size?: number;
   name: keyof typeof iconsXmlMap;
};

const Icon: FC<Props> = ({ size, width, height, stroke = 'none', name, fill = 'none', ...props }) => {
   const xml = iconsXmlMap[name];

   return <SvgXml fill={fill} xml={xml} width={size || width} height={size || height} stroke={stroke} {...props} />;
};

export default Icon;
