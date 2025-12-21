import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect, SvgProps } from 'react-native-svg';

const CloseSvg = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <G
      stroke="#4E4E4E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      clipPath="url(#a)"
    >
      <Path d="M5.625 14.271 10 9.896l4.375 4.375" />
      <Path d="M14.375 5.73 10 10.103 5.625 5.73" />
    </G>
    <Rect
      width={18.75}
      height={18.75}
      x={0.625}
      y={0.625}
      stroke="#E9E9E9"
      strokeWidth={1.25}
      rx={9.375}
    />
    <Defs>
      <ClipPath id="a">
        <Rect width={20} height={20} fill="#fff" rx={10} />
      </ClipPath>
    </Defs>
  </Svg>
);
export default CloseSvg;
