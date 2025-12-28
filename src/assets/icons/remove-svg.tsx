import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect, SvgProps } from 'react-native-svg';

const RemoveSvg = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Rect width={20} height={20} fill="red" rx={10} />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.25}
        d="M5.625 14.271 10 9.896l4.375 4.375"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.25}
        d="M14.375 5.73 10 10.103 5.625 5.73"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Rect width={20} height={20} fill="#fff" rx={10} />
      </ClipPath>
    </Defs>
  </Svg>
);

export default RemoveSvg;
