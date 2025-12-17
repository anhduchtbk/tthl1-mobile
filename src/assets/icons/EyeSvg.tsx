import * as React from 'react';
import type { ColorValue } from 'react-native';
import Svg, { Path, type SvgProps } from 'react-native-svg';

const EyeSvg = ({
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
    <Path
      d="M.833 10S4.167 3.333 10 3.333c5.834 0 9.167 6.667 9.167 6.667S15.833 16.667 10 16.667.833 10 .833 10z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default EyeSvg;
