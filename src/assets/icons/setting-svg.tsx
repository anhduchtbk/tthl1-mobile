import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SettingSvgComponent(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.568 15.024a2.09 2.09 0 00-2.092-2.092H4.593A2.09 2.09 0 002.5 15.024v4.883A2.09 2.09 0 004.593 22h4.883a2.09 2.09 0 002.092-2.093v-4.883zm10.464 0a2.09 2.09 0 00-2.093-2.092h-4.883a2.09 2.09 0 00-2.093 2.092v4.883A2.09 2.09 0 0015.056 22h4.883a2.09 2.09 0 002.093-2.093v-4.883zm-3.055-3.632l2.91-2.91a2.093 2.093 0 000-2.96l-2.91-2.91a2.093 2.093 0 00-2.959 0l-2.91 2.91a2.093 2.093 0 000 2.96l2.91 2.91a2.093 2.093 0 002.96 0zm-7.409-6.831a2.09 2.09 0 00-2.092-2.093H4.593A2.09 2.09 0 002.5 4.561v4.883a2.09 2.09 0 002.093 2.093h4.883a2.09 2.09 0 002.092-2.093V4.56z"
        fill={props.color ? props.color : '#B2BDBE'}
      />
    </Svg>
  );
}

export default SettingSvgComponent;
