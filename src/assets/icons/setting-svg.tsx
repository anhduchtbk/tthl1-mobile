import * as React from 'react';
import { ColorValue } from 'react-native';
import Svg, { Path, SvgProps } from 'react-native-svg';

type ActiveSvgProps = SvgProps & {
  activeColor?: ColorValue;
};
function SettingSvg({ activeColor, ...props }: ActiveSvgProps) {
  return (
    <Svg fill="none" {...props}>
      <Path
        fill={activeColor || '#B2BDBE'}
        fillRule="evenodd"
        d="M11.568 15.024a2.09 2.09 0 0 0-2.092-2.092H4.593A2.09 2.09 0 0 0 2.5 15.024v4.883A2.09 2.09 0 0 0 4.593 22h4.883a2.09 2.09 0 0 0 2.092-2.093v-4.883Zm10.464 0a2.09 2.09 0 0 0-2.093-2.092h-4.883a2.09 2.09 0 0 0-2.093 2.092v4.883A2.09 2.09 0 0 0 15.056 22h4.883a2.09 2.09 0 0 0 2.093-2.093v-4.883Zm-3.055-3.632 2.91-2.91a2.093 2.093 0 0 0 0-2.96l-2.91-2.91a2.093 2.093 0 0 0-2.959 0l-2.91 2.91a2.093 2.093 0 0 0 0 2.96l2.91 2.91a2.093 2.093 0 0 0 2.96 0Zm-7.409-6.831a2.09 2.09 0 0 0-2.092-2.093H4.593A2.09 2.09 0 0 0 2.5 4.561v4.883a2.09 2.09 0 0 0 2.093 2.093h4.883a2.09 2.09 0 0 0 2.092-2.093V4.56Z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

export default SettingSvg;
