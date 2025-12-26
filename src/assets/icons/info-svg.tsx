import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg';

const InfoSvg = (props: SvgProps) => (
  <Svg width={21} height={21} fill="none" {...props}>
    <G
      stroke="#3867F8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <Path d="M10.5 19.25a8.75 8.75 0 1 0 0-17.5 8.75 8.75 0 0 0 0 17.5ZM10.5 14v-3.5m0-3.5h.009" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h21v21H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default InfoSvg;
