import * as React from 'react';
import { ColorValue } from 'react-native';
import Svg, { Path, SvgProps } from 'react-native-svg';

type ActiveSvgProps = SvgProps & {
  activeColor?: ColorValue;
};
function TimetableIconSvg({ activeColor, ...props }: ActiveSvgProps) {
  return (
    <Svg fill="none" {...props}>
      <Path
        fill={activeColor || '#B2BDBE'}
        d="M18.321 7.243a3.077 3.077 0 0 0-1.364-2.557 3.047 3.047 0 0 0-1.721-.529h-.765v1.879a.712.712 0 0 1-.714.714.716.716 0 0 1-.714-.714V4.157H6.779v1.879a.716.716 0 0 1-.715.714.712.712 0 0 1-.714-.714V4.157h-.764c-.85 0-1.622.343-2.179.907A3.048 3.048 0 0 0 1.5 7.243v.471h16.821v-.471ZM4.586 19.821h6.421a6.351 6.351 0 0 1-.857-3.193c0-3.528 2.864-6.392 6.386-6.392.621 0 1.221.085 1.785.25V9.143H1.5v7.6c0 1.7 1.386 3.078 3.086 3.078Z"
      />
      <Path
        fill={activeColor || '#B2BDBE'}
        d="M6.779 3.714A.716.716 0 0 0 6.064 3c-.4 0-.714.321-.714.714v.443h1.429v-.443ZM14.471 3.714A.712.712 0 0 0 13.757 3a.716.716 0 0 0-.714.714v.443h1.428v-.443ZM16.536 11.664a4.96 4.96 0 1 0 .005 9.923 4.96 4.96 0 0 0-.005-9.923Zm1.407 5.679h-1.407a.716.716 0 0 1-.715-.714v-1.472c0-.393.322-.714.715-.714.4 0 .714.321.714.714v.757h.693c.393 0 .714.315.714.715a.716.716 0 0 1-.714.714Z"
      />
    </Svg>
  );
}

export default TimetableIconSvg;
