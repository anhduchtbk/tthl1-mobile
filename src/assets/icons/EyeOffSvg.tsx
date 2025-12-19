import * as React from 'react';
import type { ColorValue } from 'react-native';
import Svg, { G, Path, Defs, ClipPath, Rect, type SvgProps } from 'react-native-svg';

const EyeOffSvg = ({
  size = 20,
  color = '#7B8698',
  ...props
}: SvgProps & { size?: number; color?: ColorValue }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip0_2019_3671)">
      <Path
        d="M14.95 14.95A8.391 8.391 0 0110 16.667C4.167 16.667.833 10 .833 10A15.375 15.375 0 015.05 5.05m3.2-1.517a7.6 7.6 0 011.75-.2c5.833 0 9.167 6.667 9.167 6.667a15.417 15.417 0 01-1.8 2.658m-5.6-.891a2.498 2.498 0 01-4.329-1.749 2.5 2.5 0 01.795-1.785m-7.4-7.4l18.334 18.334"
        stroke={color}
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_2019_3671">
        <Rect width="20" height="20" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default EyeOffSvg;
